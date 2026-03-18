import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';

const EXERCISES = [
  { sign: '♈', name: 'Wall Sit' },
  { sign: '♉', name: 'Chair Push-Ups' },
  { sign: '♊', name: 'Seated Marching' },
  { sign: '♋', name: 'Leg Raises' },
  { sign: '♌', name: 'Chair Squats' },
  { sign: '♍', name: 'Wall Push-Ups' },
  { sign: '♎', name: 'Shoulder Press' },
  { sign: '♏', name: 'Side Leg Lifts' },
  { sign: '♐', name: 'Toe Taps' },
  { sign: '♑', name: 'Step-Ups' },
  { sign: '♒', name: 'Side Twists' },
  { sign: '♓', name: 'Plank' },
];

const ACTIVE_MS  = 30_000;
const REST_MS    = 10_000;
const REVIVE_MS  = 5_000;
const BUBBLE_PX  = 56;
const RADIUS_PCT = 0.38; // fraction of clock-face radius used for the ring

/**
 * All bubbles live at left:50% / top:50% in CSS.
 * This function returns the CSS transform string that moves bubble i
 * to its clock-face position (or to center when active).
 *
 * Using transform-only avoids the left/top percentage animation quirks
 * that caused the original display issues.
 */
function getBubbleTransform(i, clockSize, isActive, activeScale) {
  if (isActive) {
    // Center on the clock face and scale up.
    return `translate(-50%, -50%) scale(${activeScale.toFixed(2)})`;
  }
  const θ = (i / 12) * 2 * Math.PI - Math.PI / 2; // i=0 → 12 o'clock
  const r = clockSize * RADIUS_PCT;
  const x = (r * Math.cos(θ)).toFixed(1);
  const y = (r * Math.sin(θ)).toFixed(1);
  // translate(-50%, -50%) centers the bubble on its anchor point (the clock center),
  // then the pixel offset moves it out to its clock-ring position.
  return `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
}

export default function ChopList() {
  const [phase,      setPhase]      = useState('idle'); // idle | active | rest | completing
  const [currentIdx, setCurrentIdx] = useState(0);
  const [completed,  setCompleted]  = useState(new Set());
  const [sweepAngle, setSweepAngle] = useState(0);
  const [restCount,  setRestCount]  = useState(10);
  const [clockSize,  setClockSize]  = useState(480); // reasonable default before measurement

  const clockRef      = useRef(null);
  const rafRef        = useRef(null);
  const timeoutRef    = useRef(null);
  const phaseStartRef = useRef(0);

  // Refs hold the latest phase-runner so RAF callbacks never see a stale closure.
  const runActiveRef = useRef(null);
  const runRestRef   = useRef(null);

  // Measure the clock face to compute pixel-based ring offsets.
  useEffect(() => {
    const ro = new ResizeObserver(([e]) => setClockSize(e.contentRect.width));
    if (clockRef.current) ro.observe(clockRef.current);
    return () => ro.disconnect();
  }, []);

  // Cleanup on unmount.
  useEffect(() => () => {
    if (rafRef.current)     cancelAnimationFrame(rafRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  function stopAll() {
    if (rafRef.current)     { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    if (timeoutRef.current) { clearTimeout(timeoutRef.current);     timeoutRef.current = null; }
  }

  runActiveRef.current = (idx, comp) => {
    phaseStartRef.current = performance.now();
    setPhase('active');
    setCurrentIdx(idx);
    setSweepAngle(0);

    const tick = (now) => {
      const el = now - phaseStartRef.current;
      setSweepAngle(Math.min((el / ACTIVE_MS) * 360, 360));

      if (el < ACTIVE_MS) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        const next = new Set(comp);
        next.add(idx);
        setCompleted(next);

        if (idx + 1 >= EXERCISES.length) {
          setPhase('completing');
          timeoutRef.current = setTimeout(() => {
            setPhase('idle');
            setCompleted(new Set());
            setCurrentIdx(0);
          }, REVIVE_MS);
        } else {
          runRestRef.current(idx + 1, next);
        }
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  runRestRef.current = (idx, comp) => {
    phaseStartRef.current = performance.now();
    setPhase('rest');
    setCurrentIdx(idx);
    setRestCount(10);

    const tick = (now) => {
      const el = now - phaseStartRef.current;
      setRestCount(Math.max(0, Math.ceil((REST_MS - el) / 1000)));

      if (el < REST_MS) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        runActiveRef.current(idx, comp);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const handleStart = () => {
    stopAll();
    setCompleted(new Set());
    runActiveRef.current(0, new Set());
  };

  const handleStop = () => {
    stopAll();
    setPhase('idle');
    setCurrentIdx(0);
    setCompleted(new Set());
    setSweepAngle(0);
  };

  const isRunning   = phase !== 'idle';
  const activeScale = Math.max(1, (clockSize * 0.68) / BUBBLE_PX);

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <button
          className={styles.btn}
          onClick={isRunning ? handleStop : handleStart}
        >
          {isRunning ? 'Stop CHOP' : 'Start the CHOP'}
        </button>
      </div>

      <div className={styles.clockFace} ref={clockRef}>

        {/* 10-second rest countdown in the clock center */}
        {phase === 'rest' && (
          <div className={styles.center}>
            <span className={styles.countdown}>
              {String(restCount).padStart(2, '0')}
            </span>
          </div>
        )}

        {EXERCISES.map((ex, i) => {
          const isActive   = phase === 'active' && i === currentIdx;
          const isDone     = completed.has(i);
          const isReviving = phase === 'completing';

          return (
            <div
              key={i}
              className={[
                styles.zodiacBubble,
                isDone     ? styles.done     : '',
                isReviving ? styles.reviving : '',
              ].filter(Boolean).join(' ')}
              style={{
                transform: getBubbleTransform(i, clockSize, isActive, activeScale),
                zIndex: isActive ? 20 : 1,
              }}
            >
              {/* Radar sweep: black sector grows 0→360° over 30 s.
                  Two-position syntax avoided for Firefox compatibility. */}
              {isActive && (
                <div
                  className={styles.sweepOverlay}
                  style={{
                    background: `conic-gradient(
                      from -90deg,
                      rgba(0,0,0,0.88)   0deg,
                      rgba(0,0,0,0.88)   ${Math.max(0, sweepAngle - 3)}deg,
                      rgba(255,60,0,0.95) ${Math.max(0, sweepAngle - 3)}deg,
                      rgba(255,60,0,0.95) ${sweepAngle}deg,
                      transparent        ${sweepAngle}deg
                    )`,
                  }}
                />
              )}

              <span className={styles.zodiacEmoji}>{ex.sign}</span>
              {isActive && (
                <span className={styles.signName}>{ex.name}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

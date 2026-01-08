import { useState, useEffect, useRef } from 'react';

export default function WorkoutStopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('active'); // 'active' or 'rest'
  
  const exercises = [
    '♈ Wall Sit',
    '♉ Chair-Assisted Push-Ups',
    '♊ Seated Marching',
    '♋ Seated Leg Raises',
    '♌ Chair-Assisted Squats',
    '♍ Wall Push-Ups',
    '♎ Seated Shoulder Press',
    '♏ Seated Side Leg Lifts',
    '♐ Seated Toe Taps',
    '♑ Chair-Assisted Step-Ups',
    '♒ Seated Side Twists',
    '♓ Plank (Kneeling or Full)'
  ];

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        const duration = phase === 'active' ? 30000 : 10000;
        const newProgress = prev + 100;
        
        if (newProgress >= duration) {
          if (phase === 'active') {
            // Switch to rest phase
            setPhase('rest');
            return 0;
          } else {
            // Move to next exercise
            const nextIndex = currentIndex + 1;
            if (nextIndex >= exercises.length) {
              // Workout complete - stop but keep everything styled
              setIsRunning(false);
              return 0;
            }
            setCurrentIndex(nextIndex);
            setPhase('active');
            return 0;
          }
        }
        
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isRunning, currentIndex, phase, exercises.length]);

  const startWorkout = () => {
    setIsRunning(true);
    setCurrentIndex(0);
    setProgress(0);
    setPhase('active');
  };

  const stopWorkout = () => {
    setIsRunning(false);
    setProgress(0);
    setPhase('active');
  };

  const getBackgroundStyle = (index) => {
    // Completed exercises stay styled
    if (index < currentIndex) {
      return { backgroundColor: 'maroon', color: 'white' };
    }
    
    // Current exercise during active phase shows fill animation
    if (index === currentIndex && phase === 'active') {
      const duration = 30000;
      const percentage = (progress / duration) * 100;
      return {
        background: `linear-gradient(to right, maroon ${percentage}%, white ${percentage}%)`,
        color: percentage > 50 ? 'white' : 'black'
      };
    }
    
    // Current exercise during rest phase stays completed (maroon)
    if (index === currentIndex && phase === 'rest') {
      return { backgroundColor: 'maroon', color: 'white' };
    }
    
    return { backgroundColor: 'white', color: 'black' };
  };

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        {!isRunning ? (
          <button 
            onClick={startWorkout}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Start the CHOP
          </button>
        ) : (
          <button 
            onClick={stopWorkout}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Stop CHOP
          </button>
        )}
        
        {isRunning && phase === 'rest' && (
          <span style={{ marginLeft: '20px', fontSize: '16px', color: '#666' }}>
            Rest period... ({Math.ceil((10000 - progress) / 1000)}s)
          </span>
        )}
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          {exercises.map((exercise, index) => (
            <tr key={index}>
              <td 
                style={{
                  ...getBackgroundStyle(index),
                  padding: '20px',
                  border: '1px solid #ddd',
                  fontSize: '18px',
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}
              >
                {exercise}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
// composed by Claude Sonnet 4.6
import clsx from 'clsx';
import { useRef, useEffect, useState } from 'react';
import styles from './styles.module.css';

// ─── Add / edit your panels here ────────────────────────────────────────────
// bgColor accepts any global CSS class name. The ones already defined in
// custom.css are: lemonchiffon | cornflowerblue | mediumaquamarine | orchid | darkgrey
const PanelList = [
  {
    title: 'kCal Meal Tracker',
    img: require('@site/static/img/kcal.png').default,
    linker: 'https://kcal.you',
    bgColor: 'orchid',
    description: (
      <>
        The kCal meal tracker app uses AI Vision
        to ID food pictures, sourcing nutritional
        info from the expansive USDA food database.
      </>
    ),
  },
  {
    title: 'Simple AI Image Generator',
    img: require('@site/static/img/j4cks-dot-com.png').default,
    linker: 'https://j4cks.com',
    bgColor: 'darkgrey',
    description: (
      <>
        HuggingFace inference providers bring three
        different open source AI models, rendering a text
        prompt into imagery. (Free, with rate limiting.)
        
      </>
    ),
  },
  {
    title: 'Ultima Plus Patcher',
    img: require('@site/static/img/patcher-preview.png').default,
    linker: 'https://ultima-plus.vercel.app/',
    bgColor: 'mediumaquamarine',
    description: (
      <>
        Software upgrader and customizer for the
        SNES game "Final Fantasy 4 Ultima Plus".
        A fan project authored by "8-bit fan" with
        extensive options crafted by the community. 
      </>
    ),
  },
  {
    title: 'Post Everywhere at Once',
    img: require('@site/static/img/onblast-preview.png').default,
    linker: 'https://onblast.vercel.app',
    bgColor: 'lemonchiffon',
    description: (
      <>
        Onblast lets you post to Bluesky,
        Mastodon, Threads, X, and LinkedIn
        from a single message. Coming soon..
      </>
    ),
  },
  {
    title: 'Daily CHOP Practice',
    img: require('@site/static/img/chop-preview.png').default,
    linker: '/docs/tutorial-extras/chop',
    bgColor: 'orchid',
    description: (
      <>
        Bespoke CSS app that cycles through
        a set of daily orthostatic exercises.
      </>
    ),
  }
];
// ────────────────────────────────────────────────────────────────────────────

function Panel({ img, title, description, linker, bgColor, reversed }) {
  const panelRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = panelRef.current;
    // Guard for SSR and environments without IntersectionObserver.
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={panelRef}
      className={clsx(styles.panel, reversed && styles.panelReversed, bgColor, visible && styles.panelVisible)}
    >
      <div className={styles.panelImage}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.panelText}>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={linker}>
          <button className="glossy-btn">Check it out</button>
        </a>
      </div>
    </div>
  );
}

export default function HomepagePanels() {
  return (
    <section className={styles.panelsSection}>
      {PanelList.map((props, idx) => (
        <Panel key={idx} {...props} reversed={idx % 2 !== 0} />
      ))}
    </section>
  );
}

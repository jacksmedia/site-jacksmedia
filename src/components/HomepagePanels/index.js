// composed by Claude Sonnet 4.6
import clsx from 'clsx';
import styles from './styles.module.css';

// ─── Add / edit your panels here ────────────────────────────────────────────
// bgColor accepts any global CSS class name. The ones already defined in
// custom.css are: lemonchiffon | cornflowerblue | mediumaquamarine | orchid | darkgrey
const PanelList = [
  {
    title: 'Demo the kCal app',
    img: require('@site/static/img/kcal.png').default,
    linker: 'https://kcal-pi.vercel.app',
    bgColor: 'orchid',
    description: (
      <>
        My in-development kCal app uses Kimi AI's
        K2.5 model to ID food pictures, and offers
        nutritional info from a free USDA API database.
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
    title: 'Publish with Notion',
    img: require('@site/static/img/kitten-blogger.png').default,
    linker: '/docs/tutorial-notion/faq',
    bgColor: 'lemonchiffon',
    description: (
      <>
        Notion helps organize and publish
        lists, notes or content, for free!
      </>
    ),
  },
  {
    title: 'Illustrate with AI',
    img: require('@site/static/img/tundra0.png').default,
    linker: '/docs/tutorial-ai-art/DALLE1',
    bgColor: 'cornflowerblue',
    description: (
      <>
        Current "AI Art" tools let you write 
        what you wish to see,
        and to refine your mind's eye.
      </>
    ),
  },
  {
    title: 'Create Videos with AI',
    img: require('@site/static/img/invideo-preview.png').default,
    linker: '/docs/tutorial-invideo/basics',
    bgColor: 'darkgrey',
    description: (
      <>
        Once you know how to prompt images, 
        check out this guide to making videos
        using public resources & YT clips.
      </>
    ),
  },
    {
    title: 'Socialize with Discord',
    img: require('@site/static/img/top-emoji.png').default,
    linker: '/docs/tutorial-discord/discord-intro',
    bgColor: 'mediumaquamarine',
    description: (
      <>
        Discord offers dynamic community
        and useful features for keeping
        followers and friends informed.
      </>
    ),
  },
    {
    title: 'Practice Moving Qi Daily',
    img: require('@site/static/img/qi-videos.png').default,
    linker: '/docs/tutorial-extras/chi',
    bgColor: 'orchid',
    description: (
      <>
        A rotating, curated selection of YTs,
        and practice daily for health!
      </>
    ),
  },
];
// ────────────────────────────────────────────────────────────────────────────

function Panel({ img, title, description, linker, bgColor, reversed }) {
  return (
    <div className={clsx(styles.panel, reversed && styles.panelReversed, bgColor)}>
      <div className={styles.panelImage}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.panelText}>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={linker}>
          <button className="glossy-btn">Read More...</button>
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

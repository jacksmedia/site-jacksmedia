import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Publish with Notion',
    img: require('@site/static/img/kitten-blogger.png').default,
    linker: '/docs/tutorial-notion/faq',
    description: (
      <>
        Notion helps organize and publish
        lists, notes or content, for free!
      </>
    ),
  },
  {
    title: 'Socialize with Discord',
    img: require('@site/static/img/top-emoji.png').default,
    linker: '/docs/tutorial-discord/discord-intro',
    description: (
      <>
        Discord offers dynamic community
        and useful features for keeping
        things archived & available
      </>
    ),
  },
  {
    title: 'Illustrate with AI',
    img: require('@site/static/img/tundra0.png').default,
    linker: '',
    description: (
      <>
        Current "AI Art" tools let you write 
        what you wish to see, and refine your mind's eye
      </>
    ),
  },
  {
    title: 'Create Video with AI',
    img: require('@site/static/img/invideo-preview.png').default,
    linker: '',
    description: (
      <>
        Once you know how to prompt images, 
        check out this guide to making videos
      </>
    ),
  },
  {
    title: 'Practice Moving Qi Daily',
    img: require('@site/static/img/qi-videos.png').default,
    linker: '',
    description: (
      <>
        Healthy body generates healthy mind. 
        Use a rotating, curated selection of YTs,
        and practice daily for health!
      </>
    ),
  }
];

function Feature({img, title, description, linker}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} />
      </div>
      <div className="text--center padding-horiz--md padding-vert--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={linker}>
          <button>Read More...</button>
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
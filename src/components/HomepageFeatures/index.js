import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Use EGLD',
    img: require('@site/static/img/magic-egld.png').default,
    linker: 'https://xport.al/referral/o6q0in3yh6/',
    description: (
      <>
        EGLD is the crypto with the world's best wallet &
        you can send/use/stake it for fractions of a penny on the MultiversX blockchain
      </>
    ),
  },
  {
    title: 'Wield Synthography',
    img: require('@site/static/img/book02.png').default,
    linker: '/docs/tutorial-ai-art/midjourney1',
    description: (
      <>
        Synthographic aka "AI Art" tools let you write 
        what you wish to see, and refine your mind's eye
      </>
    ),
  },
  {
    title: 'Mine Crypto in 2023',
    img: require('@site/static/img/raven.png').default,
    linker: '/docs/tutorial-mining/intro',
    description: (
      <>
        Ravencoin can be yours when you download and run free software
        on your gaming PC or laptop. Hodl or swap and be your own banker!
      </>
    ),
  },
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
          <button>More...</button>
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
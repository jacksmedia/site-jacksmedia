import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Use EGLD',
    img: require('@site/static/img/magic-egld.png').default,
    description: (
      <>
        Elrond EGLD is the crypto with the world's best wallet &
        you can send/use/stake it for fractions of a penny
      </>
    ),
  },
  {
    title: 'Keep Calm & Hold Combeys',
    img: require('@site/static/img/archduke-combey253.png').default,
    description: (
      <>
        Combased Combeys are the cream of the crop of Elrond NFTs
        for passive income plus added holder benefits
      </>
    ),
  },
  {
    title: 'Follow Lannuvár DAO',
    img: require('@site/static/img/cropped-Lannuvar.png').default,
    description: (
      <>
        The Realm of Karitha is the MMO world that birthed Lannuvár,
        a DAO focused on role playing and successful brand management
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Use EGLD',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Elrond EGLD is the crypto with the world's best wallet &
        you can send/use/stake it for fractions of a penny
      </>
    ),
  },
  {
    title: 'Keep Calm & Hold Combeys',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Combased Combeys are the cream of the crop of Elrond NFTs
        for passive income plus added holder benefits
      </>
    ),
  },
  {
    title: 'Follow Lannuvár DAO',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The Realm of Karitha is the MMO world that birthed Lannuvár,
        a DAO focused on role playing and successful brand management
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Use EGLD',
    img: require('@site/static/img/magic-egld.png').default,
    linker: 'https://get.maiar.com/referral/o6q0in3yh6',
    description: (
      <>
        EGLD is the crypto with the world's best wallet &
        you can send/use/stake it for fractions of a penny on the MultiversX blockchain
      </>
    ),
  },
  {
    title: 'Keep Calm & Hold Combeys',
    img: require('@site/static/img/archduke-combey253.png').default,
    linker: 'https://www.combased.io/',
    description: (
      <>
        ComVerse Combeys are the cream of the crop of
        passive income NFTs with added holder benefits
      </>
    ),
  },
  {
    title: 'Help SuperVictor',
    img: require('@site/static/img/blaz-svcoin.gif').default,
    linker: 'https://www.frameit.gg/marketplace/nft/VICLOTTERY-19f055-01/19772',
    description: (
      <>
        Help a kid with the world's worst medical bills, he needs
        SMA treatments ASAP so maybe donate a tiny bit?
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
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={linker}>
          <button>Go See</button>
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
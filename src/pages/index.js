import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('reactive-height hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero__title', styles.gradient1 )}>{siteConfig.title}</h1>
        <h6 className={clsx('hero__subtitle', styles.gradient2 )}>{siteConfig.tagline}</h6>
        <h6 className={clsx('hero__title', styles.gradient1 )}>Check out our vibe-coded Prototype Paralegal App</h6>
        
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docreview">
            Go To App
          </Link>
        </div>
      </div>
    </header>
  );F
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

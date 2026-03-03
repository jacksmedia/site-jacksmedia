import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepagePanels from '@site/src/components/HomepagePanels';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('reactive-height hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero__title', styles.gradient1 )}>{siteConfig.title}</h1>
        <h6 className={clsx('hero__subtitle', styles.gradient2 )}>{siteConfig.tagline}</h6>
      </div>
    </header>
  );F
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Guides and Projects by Jacks Media">
      <HomepageHeader />
      <main>
        <HomepagePanels />
      </main>
    </Layout>
  );
}

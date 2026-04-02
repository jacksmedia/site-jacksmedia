import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function FourOhFour() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Guides and Projects by Jacks Media">
      <main>
        <h1 className='reactive-height'>That's not a page on this site.</h1>
      </main>
    </Layout>
  );
}

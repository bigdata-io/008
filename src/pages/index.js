import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Logo from '@site/static/img/bigdata-logo.svg'
import Heading from '@theme/Heading';
import styles from './index.module.css';
import '../css/custom.css'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const Svg = require('@site/static/img/bigdata-logo.svg').default
  return (
    <>
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <Logo className='title-logo' /> */}
        {/* <Svg className={`title-logo`} role="img" /> */}
         {/* <img src={Logo} alt="BigData Logo" className="title-logo" /> */}
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
              <div className='button-word'>Start From Here</div>
          </Link>
        </div>
      </div>
    </header>
    </>
 );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="来自西南石油大学的大数据智能团队">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

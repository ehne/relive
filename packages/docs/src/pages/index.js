import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

function HomepageHeader () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero')}>
      <div className="container">
        <h1 className="hero__title">Create Broadcast Graphics Using React.</h1>
        <p className="hero__subtitle">{siteConfig.title}: {siteConfig.tagline}</p>
        <div>
          <Link
            className="button button--primary button--lg"
            to="/docs/quickstart/installing">
            Relive Quickstart - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}: ${siteConfig.tagline}.`}
      description="A live animation system for React.">
      <HomepageHeader />
      <main>
        <div>
        </div>

      </main>
    </Layout>
  )
}

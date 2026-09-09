import { Anchors, Close, Company, Downstream, Faq, Method, Platforms, Roles } from './components/Sections'
import { Hero } from './components/Hero'
import { SiteFooter, SiteHeader } from './components/SiteChrome'

function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="bg-navy px-5 py-2.5 text-center text-sm font-medium text-white">
        AI on AWS, Azure, Google Cloud, and Vyuha. FinOps and AIOps through Curate and Zolix.
      </div>
      <SiteHeader />
      <main>
        <Hero />
        <Anchors />
        <Downstream />
        <Method />
        <Platforms />
        <Roles />
        <Company />
        <Faq />
        <Close />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App

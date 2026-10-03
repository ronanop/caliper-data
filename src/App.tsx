import { Anchors, Close, Company, Downstream, Faq, Method, Platforms, Roles } from './components/Sections'
import { Capabilities, Categories, Outcomes, PerformanceModel, Problem } from './components/PerformanceSections'
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
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Categories />
        <PerformanceModel />
        <Method />
        <Outcomes />
        <Anchors />
        <Capabilities />
        <Downstream />
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

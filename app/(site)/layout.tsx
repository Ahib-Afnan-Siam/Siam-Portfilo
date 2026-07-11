import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import CursorGlow from '@/components/ui/CursorGlow'
import ScrollToTop from '@/components/ui/ScrollToTop'
import Scene from '@/components/three/Scene'

/**
 * Layout for the public portfolio.
 * The /admin area lives outside this group, so it gets none of this.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CursorGlow />

      {/* Global animated particle / floating object background */}
      <Scene className="fixed inset-0 z-0 pointer-events-none" />

      <div className="relative z-10">
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}
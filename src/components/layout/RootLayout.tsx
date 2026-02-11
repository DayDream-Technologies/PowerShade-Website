import { SkipLink } from '@/components/layout/SkipLink'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { GlobalStructuredData } from '@/components/StructuredData'

interface RootLayoutProps {
  children: React.ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <GlobalStructuredData />
      <SkipLink />
      <Header />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  )
}

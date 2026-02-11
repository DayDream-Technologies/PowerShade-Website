import { Routes, Route } from 'react-router-dom'
import { RootLayout } from '@/components/layout/RootLayout'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { UsesPage } from '@/pages/UsesPage'
import { ShopPage } from '@/pages/ShopPage'

export default function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/uses" element={<UsesPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </RootLayout>
  )
}

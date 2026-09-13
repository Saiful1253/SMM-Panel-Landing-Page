import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Loading from './components/Loading'
import FloatingChat from './components/FloatingChat'
import BackToTop from './components/BackToTop'
import Analytics from './components/Analytics'
import PlausibleAnalytics from './components/PlausibleAnalytics'
import AnalyticsTracker from './components/AnalyticsTracker'
import AuthModal from './components/AuthModal'
import { ModalProvider, useModal } from './context/ModalContext'

function AppContent() {
  const { authModal, closeAuthModal } = useModal()

  return (
    <div className="app">
      <Analytics />
      <PlausibleAnalytics />
      <Loading />
      <AnalyticsTracker />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingChat />
      <BackToTop />
      <AuthModal isOpen={authModal.isOpen} onClose={closeAuthModal} initialMode={authModal.mode} />
    </div>
  )
}

export default function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  )
}

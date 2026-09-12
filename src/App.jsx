import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Loading from './components/Loading'
import FloatingChat from './components/FloatingChat'

export default function App() {
  return (
    <div className="app">
      <Loading />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}

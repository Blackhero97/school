import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProgramsPage from './pages/ProgramsPage'
import TeachersPage from './pages/TeachersPage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/haqida" element={<AboutPage />} />
            <Route path="/dasturlar" element={<ProgramsPage />} />
            <Route path="/oqituvchilar" element={<TeachersPage />} />
            <Route path="/yangiliklar" element={<NewsPage />} />
            <Route path="/boglanish" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

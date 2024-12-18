import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import Log from './pages/Log'
import NotFound from './pages/NotFound'
import Footer from './pages/Footer'
import Experience from './pages/Experience'
import Hire from './pages/Hire'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='services' element={<Services />} />
        <Route path='log' element= {<Log />} />
        <Route path='*' element={<NotFound />} />
        <Route path='experience' element={<Experience />} />
        <Route path='hire' element={<Hire />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

import  Nav from './Component/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Service from './Pages/Service.jsx'
import Contact from './Pages/Contact.jsx'
import Footer from './Component/Footer.jsx'

function App() {
 return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Service />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
        
      
    </>
  )
}

export default App

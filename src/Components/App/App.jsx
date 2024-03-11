import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from '../Navbar/Navbar.jsx'
import Home from '../Home/Home'
import Gallery from '../VehicleGallery/Gallery.jsx'
import Help from '../Help/Help.jsx'
import Location from '../Locations/Locations.jsx'
import Footer from '../Footer/Footer.jsx'




export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cars-and-services' element={<Gallery />} />
          <Route path='/help' element={<Help />} />
          <Route path='/locations' element={<Location />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/1.home/Home'
import Services from './Pages/2.services/services'
import Portfolio from './Pages/3.portfolio/portfolio'
import Contact from './Pages/4.contact/contact'
import Navbar from './Components/header/Navbar'
import Footer from './Components/footer/Footer'


function App() {

  return (
    <div>
      <Router>
      <Navbar/>
      
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path ='/services' element={<Services/>}/>
      <Route path ='/portfolio' element={<Portfolio/>}/>
      <Route path ='/contact' element={<Contact/>}/>

      
      </Routes>

      <Footer/>

      </Router>
    </div>
  )
}

export default App

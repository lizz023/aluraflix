import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import GlobalStyle from './GlobalStyle'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Slider from './HomeCarrousel/Slider'


function App() {

  return (
    <Router>
      <GlobalStyle/>
      <Header/>
      <Banner/>
      <Slider/>
      
      
      <Routes>
        <Route/>
      </Routes>
      <Footer/>
    </Router>
  
      
    
  )
}

export default App

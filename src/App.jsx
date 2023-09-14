
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import GlobalStyle from './GlobalStyle'
import Banner from './Components/Banner'

function App() {
  

  return (
    <Router>
      <GlobalStyle/>
      <Header/>
      <Banner/>

      
      <Routes>
        <Route/>
      </Routes>
    </Router>
      
    
  )
}

export default App

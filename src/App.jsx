import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import GlobalStyle from './GlobalStyle'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import NewVideo from './Pages/NewVideo'


function App() {

  return (
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/newVideo' element={<NewVideo/>}/>
      </Routes>
      <Footer/>
    </Router>

  )
}

export default App

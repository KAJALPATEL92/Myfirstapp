import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Navbar/Home'
import About from './Navbar/About'
import Contact from './Navbar/Contact'
import Navbar from './Navbar/Navbar'

export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
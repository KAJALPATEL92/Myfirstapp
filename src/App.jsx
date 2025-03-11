import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Navbar/Home'
import About from './Navbar/About'
import Contact from './Navbar/Contact'
import Navbar from './Navbar/Navbar'
import Create from './Navbar/Create'
import Update from './Navbar/Update'
import Read from './Navbar/Read'

export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/create' element={<Create/>}/>
              <Route path="/update/:id" element={<Update />}/>
              <Route path="/read/:id" element={<Read />}/>
              
          </Routes>
        </BrowserRouter>
    </div>
  )
}
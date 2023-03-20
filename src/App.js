import React from 'react'
import "../src/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Introduction from "../src/Component/Introduction"
import Module1 from "../src/Component/Module1"
import Module2 from "../src/Component/Module2"
import Module3 from "../src/Component/Module3"
import HomePage from '../src/Component/HomePage';
import {BrowserRouter,Routes,Route, NavLink} from "react-router-dom"


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
    </div>
  </nav>
  <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
     <span><img src='https://cdn.shortpixel.ai/spai/q_lossless+w_150+to_webp+ret_img/https://split.io/wp-content/uploads/2020/03/react-logo.png?width=150'alt='react-logo' className='imgsection'/></span>
      <span className="navbar-brand mb-0 h2">React Learning Path</span>
      <span><NavLink to='/' className='navlink'>Introduction</NavLink></span>
      <span><NavLink to='/module1' className='navlink'>Module-1</NavLink></span>
      <span><NavLink to='/module2' className='navlink'>Module-2</NavLink></span>
      <span><NavLink to='/module3' className='navlink'>Module-3</NavLink></span>
    </div>
  </nav>
    <HomePage/>
    <Routes>
    <Route path='/' element={<Introduction></Introduction>}/>
    <Route path='/module1' element={<Module1/>}/>
    <Route path='/module2' element={<Module2/>}/>
    <Route path='/module3' element={<Module3/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App



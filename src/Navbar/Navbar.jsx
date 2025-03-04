import { Link } from "react-router-dom";


function Navbar(){
 
  return (
    <div>
   
   
 <nav className="navbar navbar-default">
  <div className="container-fluid">
    <ul className="nav navbar-nav">
      <li className="active"><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      
    </ul>
  </div>
</nav>

   
    </div>
  )
}

export default Navbar;
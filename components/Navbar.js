import React from 'react'
import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import { NavLink} from "react-router-dom";
import { color } from 'framer-motion';






const Navbar =() =>{

   
  
    return (

       <div className='navbar'>
        <ul className='navItem'>
            <li> <NavLink className="nav-link"  activeClassName="active"  to="/"  >Home</NavLink></li> 
            <li> <NavLink  className="nav-link"    activeClassName="active"  to="/about">About</NavLink> </li>
            <li> <NavLink  className="nav-link"   to="/contact" activeClassName="active">Contact</NavLink> </li>
            <li> <NavLink  className="nav-link"  to="/product" activeClassName="active">Product</NavLink> </li>
        </ul>
        <div className='search-box'>
            <input type='text' placeholder='Search Here'/><FaSearch size={25} color='#ced4da' cursor='pointer' />

        </div>

       </div>
    )

}
    export default Navbar;
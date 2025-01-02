import React from 'react'
import './Sidebar.css';
import { delay, motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Sidebar  ({icon, name}) {
 
  const subheading ={
  true:{
    Opacity:1,
  },
  false:{
    Opacity:0,
    display:'none'
  }
  }

  return(
    

      
        <motion.div
          className="item" >
         <motion.div className='icon'>
          {icon}
         </motion.div>
        <motion.span 
         variants={subheading}
         >
          {name}
          

         </motion.span>
        </motion.div>
        
      );
    };
   
    
    
export default Sidebar;

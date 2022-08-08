import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Search from './Search'
import { FaAngleDown } from "react-icons/fa";
import Input from './Input';




const SharedLayout = () => {
  const [toggle, setToggle] = useState(false)


  const toggleMenu = (e) => {
    setToggle(!toggle);
  }



  return (
    <div>
      <header>
        <nav>
          <Link to='/' className='logo'>Protekh</Link>
          <button className='btn_'>Explore <FaAngleDown /></button>
          <Search />
          <ul>
            <NavLink to='#'><li>Online Degree</li></NavLink>
            <NavLink to='#'><li>Find your New Career</li></NavLink>
            <NavLink to='#'><li>For Universities</li></NavLink>

          </ul>
          <Link to='#' className='a'>Log In</Link>
          <button className='btn' onClick={toggleMenu}>Sign Up</button>
          {toggle && (

            <Input />
          )
          }


        </nav>

      </header>
      <Outlet />

    </div>
  )
}

export default SharedLayout
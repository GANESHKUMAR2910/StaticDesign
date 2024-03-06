import React from 'react'
import "./MenuBar.css"
import { IoPerson } from "react-icons/io5";
import { FaAlignJustify } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiWindows10 } from "react-icons/si";
import { IoBagAdd } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";


const MenuBar = () => {
  return (
    <div className='container-1'>
      <div className='Icon-1'><FaAlignJustify/></div>
      <div className='Icon-2'><IoPerson/></div>
      <div className='Icon-3'><BiLogoTailwindCss/></div>
      <div className='Icon-3'><SiWindows10/></div>
      <div className='Icon-3'><IoBagAdd/></div>
      <div className='Icon-3'><IoIosSettings/></div>
      <div className='Icon-4'><MdLogout/></div>
      
    </div>
  )
}

export default MenuBar

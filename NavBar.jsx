import "./NavBar.css"
import React from "react";
import { IoNotificationsSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { PiDotsNineFill } from "react-icons/pi";
import { AiFillAmazonSquare } from "react-icons/ai";
import { SiWalmart } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
function NavBar(){
    return(
        <div className="container-nav-1">
            <div className="nav-2">  
            <span className="wallet">Wallet</span> <span className="inputcontainer"></span><span className="font"><FaSearch/></span><span><input className="input" placeholder="search" /></span>
            <span className="notification"><IoNotificationsSharp/></span>  
          </div>
          <div className="container-nav-2">
            <span className="cards">Cards</span>
            <span className="dot"><BsThreeDots/></span>
          </div>
          <div className="card">
          <div className="card1">
            <span className="universal">Universal</span><span className="dot2"><BsThreeDots/></span>
            <div className="cardvalue">€9,925</div>
            <div className="cardvalue-2">*4859</div>
          </div>
          <div className="card2">
            <div className="goldcard">
          <div className="Gold">Gold</div>
          <div className="dot6"><BsThreeDots/></div>
          </div>
            <div className="cardvalue2">€2,569</div>
            <div className="cardvalue-3">*5987</div>
          </div>
          <div className="card3">
            <div className="silvercard">
          <div className="silver">Silver</div>
          <div className="dot3"><BsThreeDots/></div>
          </div>
            <div className="cardvalue12">€1,248</div>
            <div className="cardvalue-3">*6985</div>
          </div>
          </div>
          <div className="container-5">
            <div className="Last">Last Transactions</div>
            <div className="dot4"><PiDotsNineFill/></div>
          </div>
          <div className="container-6">
             <div className="row1">
                <div className="namw12">Name of transactions</div>
               <div className="category">Category</div>
               <div>Cashback</div>
               <div>amount</div>
             </div>
             <div className="row2">
             <span><AiFillAmazonSquare/></span> <div className="amazon">Amazon</div>
              <div className="shopping">Shopping</div>
              <div className="value15">+$15,50</div>
              <div className="value102">-$102.00</div>
             </div>
             <div className="row3">
             <span><SiWalmart/></span> <div className="Walmart">Walmart</div>
              <div className="Food">Food</div>
              <div className="value5">+$5,00</div>
              <div className="value28">-$28.90</div>
          </div>
          </div>
        
        </div>
    )
}
export default NavBar;
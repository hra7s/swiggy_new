import React from 'react';
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';
import '../index.css'


const Header = ()=>{
   const [btnReact,setBtnReact]= useState("Login")


    //when ever state variable updates react rerenders /
    useEffect(()=>{
        console.log("useEffect Called")
    },[btnReact])

    // const btnReact="Login"
    return (
        <div className="header">
            <div className='logo'>
                <img alt="data" className="logo" src={LOGO_URL} />
            </div>
            <div className='navItems'>
                        <ul>
                            <li> 
                            <Link  to="/"> Home</Link>
                            </li>
                            <li>
                             {/* <Link to="/about">AboutUs</Link>  */}
                             <a href='/about'>AboutUs</a>  
                            </li>
                            <li>
                            <Link  to="/contact"> Contact Us</Link></li>
                            <li>Cart</li>
                            <button className='login' onClick={()=>{btnReact==="Login"?setBtnReact("LogOut"):setBtnReact("Login");}}>
                                {btnReact}
                            </button> 
                        </ul>
                        {console.log("inside header")}
                       
            </div>
        </div>
    )
}


export default Header

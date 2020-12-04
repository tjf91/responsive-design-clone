import React, { useState, useEffect } from 'react'

export default function Header (){
    const [menu,setMenu] =useState(false)    
    const [scroll,setScroll] = useState(true)

    useEffect(() => {
        document.addEventListener("scroll", () => {
          const scrollCheck = window.scrollY < 200
          console.log(scrollCheck)
          if (scrollCheck !== scroll) {
            setScroll(scrollCheck)
          }
        })
      })



    return(
        <header>
            <div className={`header-top ${scroll?null:'header-top-scroll'}`}>
  <div id='header-logo'>
          Start BootStrap
        </div>
        <div id='header-mobile-menu'>
          <button id='menu-button' onClick={()=>setMenu(!menu)}>Menu</button>
        </div>
        <div id='header-menu'>
            <p>About</p>
            <p>Projects</p>
            <p>Contact</p>
        </div>

            </div>
      
       

        <div className ={`mobile-menu ${menu?null:'mobile-menu-hide'}`}>
            <p>About</p>
            <p>Projects</p>
            <p>Contact</p>
        </div>
      </header>
    )
}
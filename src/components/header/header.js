import React from 'react'
import TopHeader from '../topHeader/topHeader';






const Header = () => {
return (
    
        <header>
        <TopHeader></TopHeader>
        <nav>
            <div className="logo">
                <img src="/img/logo.svg" alt=""/>
                {/* <h1>HaridasjiKa</h1>
                <span>Test Of Trust</span> */}
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Haridasjika Special</a></li>
                <li><a href="#">Our Story</a></li>
                {/* <li><a href="contact.html">Contact</a></li> */}
            </ul>
            <div className="search">
                <input type="text" name="" id="" placeholder="Search Here"/>
                <button className="btn">Search</button>
            </div>
            <ul>
            <li><a href="#">Login/Register</a></li>
            </ul>
        </nav>
    </header>
   
    
)
}

export default Header;
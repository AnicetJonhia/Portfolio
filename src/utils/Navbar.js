// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="container">

            <div className="row justify-content-between">
            {/* ... le reste du code du Navbar ... */}
                <div className="logo">
                    <a href="index.html">Devel<span>oper</span></a>
                    
                </div>
                
                <div className="links">
                    <ul className="menu">
                        <li className="nav-item"><a href="#home" className="nav-link active">Home <span></span></a></li>
                        
                        <li className="nav-item"><a href="#about" className="nav-link">About <span></span></a></li>
                        <li className="nav-item"><a href="#services" className="nav-link">Experiences <span></span></a></li>
                        <li className="nav-item"><a href="#portfolio" className="nav-link">Portfolio <span></span></a></li>
                        
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact <span></span></a></li>
                    </ul>
                </div>
                
                <div className="menu-btn">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;

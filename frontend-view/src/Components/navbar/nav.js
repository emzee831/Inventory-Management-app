import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import logo from "../../images/kiglogo.jpg"


function Navbar() {
    const [click, setClick] = useState(false)
    const handleCick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)


    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <nav className="navbar"> 
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Vintage Outlet Management Tool
                        <img src={logo} alt="" style={{
                            width: '85px', height: '85px'
                        }}/>
                    </Link>
                    <div className='menu-icon' onClick={handleCick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/inventory" className='nav-links' onClick={closeMobileMenu}>
                                List items
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/search" className='nav-links' onClick={closeMobileMenu}>
                                Search items
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/additem" className='nav-links' onClick={closeMobileMenu}>
                                Add items
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </nav>
        </>
    )   
}

export default Navbar

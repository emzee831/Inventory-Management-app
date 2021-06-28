import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import logo from "../../images/kiglogo.jpg"
// import { Button } from './Button'


function Navbar() {
    const [click, setClick] = useState(false);
    const handleCick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    // const [button, setButton] = useState(true);
    // const showButton = () => {
    //     if(window.innerWidth <= 960) {
    //         setButton(false)
    //     } else {
    //         setButton(true)
    //     }
    // };

    // useEffect(() => {
    //     showButton();
    // }, []);
    // window.addEventListener('resize', showButton);

    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Gully Vintage Outlet Management Tool
                        <img src={logo} alt="" style={{
                            width: '61px', height: '61px'
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
                        <li className='nav-item'>
                            <Link to="/updateitem" className='nav-links' onClick={closeMobileMenu}>
                                Update item
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/deleteitem" className='nav-links' onClick={closeMobileMenu}>
                                Delete item
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
                </div>
            </nav>
        </nav>
        </>
    )   
}

export default Navbar

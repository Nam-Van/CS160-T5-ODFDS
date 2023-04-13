import React from 'react'
import Logo from "../images/logo2.png"
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import { useContext } from 'react'

const Navbar = () => {

    const{ currentUser, logout } = useContext(AuthContext);
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="links">
                    {/* <Link className= 'link' to="/login">
                        <h6>Login</h6>
                    </Link> */}
                    {/* <Link className= 'link' to="/?cat=delivery">
                        <h6>Delivery</h6>
                    </Link> */}
                    {/* <Link className= 'link' to="/register">
                        <h6>Register</h6>
                    </Link> */}
                    <span>{currentUser?.username}</span>
                    {currentUser ? (
                        <span onClick={logout}>Logout</span>
                        ): (
                        <Link className="link" to="/login">Login</Link>
                        // <Link className= "link" to="/register">Register</Link>
                        )}
                        
                    
                        {/* <span>Logout</span> */}
                    <span className='delivery'>
                        <Link className="link" to = "/delivery">Delivery</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
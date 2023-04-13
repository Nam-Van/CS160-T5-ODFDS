import React from 'react'
import Logo from "../images/logo2.png"
import {Link} from 'react-router-dom'

const DriverNav = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="links">
                    <Link className= 'link' to="/?cat=profile">
                        <h6>Profile</h6>
                    </Link>
                    <Link className= 'link' to="/?cat=earnings">
                        <h6>Earnings</h6>
                    </Link>
                    <Link className= 'link' to="/?cat=orders">
                        <h6>Order</h6>
                    </Link>
                    <span>Name</span>
                    <span>Logout</span>
                    <span className='delivery'>
                        <Link className="link" to = "/?cat=startedshift">Start Shift</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DriverNav
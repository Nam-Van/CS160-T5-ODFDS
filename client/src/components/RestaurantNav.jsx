import React from 'react'
import Logo from "../images/logo2.png"
import {Link} from 'react-router-dom'

const RestaurantNav = () => {
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
                    <Link className= 'link' to="/?cat=orders">
                        <h6>Orders</h6>
                    </Link>
                    {/* <Link className= 'link' to="/register">
                        <h6>Register</h6>
                    </Link> */}
                    <span>Name</span>
                    <span>Logout</span>
                    <span className='delivery'>
                        <Link className="link" to = "/delivery">Delivery</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RestaurantNav
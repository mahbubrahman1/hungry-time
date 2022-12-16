import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import '../../assets/scss/app.scss'

const Navbar = () => {
    return (
        <div className='container'>
            <nav className='d-flex justify-content-between mt-2'>
                <img src={Logo} alt="" height={'50px'} />
                <ul className='d-flex align-items-center'>
                    <li className='nav-link me-3'>SignIn</li>
                    <button className='btn btn-warning'><li className='nav-link'>SignUp</li></button>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
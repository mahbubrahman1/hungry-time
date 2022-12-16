import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import '../../assets/scss/app.scss'

const Navbar = () => {
    return (
        <div class="container">
            <nav class="navbar navbar-expand-lg sticky-top position-absolute me-auto">
                <div>
                    <img src={Logo} alt="" width={'130px'} />
                </div>
                <ul className='nav'>
                    <Link to='#'><li className='me-3 nav-link '>SignIn</li></Link>
                    <Link><button className='btn btn-warning'>SignUp</button></Link>
                </ul>
            </nav >
        </div >
    )
}

export default Navbar
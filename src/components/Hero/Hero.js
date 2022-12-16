import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='bg-image d-flex flex-column justify-content-center'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='fw-bold'>Are you hungry!</h1>
                        <h1>Don't wait!</h1>
                        <h1>Order Now.</h1>
                        <button className='btn btn-warning'>Menu Items</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
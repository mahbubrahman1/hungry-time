import React from 'react'
import { Link } from 'react-router-dom'

const Items = () => {
    return (
        <div className='d-flex justify-content-center'>
            <button className='btn'>Breakfast</button>
            <button className='btn'>Lunch</button>
            <button className='btn'>Dinner</button>
        </div>
    )
}

export default Items
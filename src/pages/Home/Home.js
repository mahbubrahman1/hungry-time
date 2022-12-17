import React from 'react'
import Hero from '../../components/Hero/Hero'
import Items from '../../components/Items/Items'
import About from './About'

const Home = () => {
    return (
        <div>
            <Hero />
            <Items />
            <About />
        </div>
    )
}

export default Home
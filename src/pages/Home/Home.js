import React from 'react'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Items from '../../components/Items/Items'
import About from './About'

const Home = () => {
    return (
        <div>
            <Hero />
            <Items />
            <About />
            <Footer />
        </div>
    )
}

export default Home
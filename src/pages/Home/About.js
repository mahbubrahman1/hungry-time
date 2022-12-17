import React from 'react'
import '../../assets/scss/app.scss'

const About = () => {
    const about = [
        {
            title: 'Super Fast Delivery',
            image: 'https://i.ibb.co/7C8mKLS/fast-delivery.jpg',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum odio est!'
        },
        {
            title: 'Brilliant Chef',
            image: 'https://i.ibb.co/yF4qzFx/brilliant-chef.jpg',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum odio est!'
        },
        {
            title: '24/7 Service',
            image: 'https://i.ibb.co/pbg8Mv1/service.jpg',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum odio est!'
        },
        {
            title: 'Home Delivery',
            image: 'https://i.ibb.co/nR0Ryt8/home-delivery.jpg',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum odio est!'
        },
    ]

    return (
        <div className='container mb-3'>
            <h2 className='text-center mb-3 fw-bold'>Why Choose Us</h2>
            <div class="row row-cols-1 row-cols-md-4 g-3">
                {
                    about.map(content => (
                        <div class="col">
                            <div class="card border-0 about-card rounded-5">
                                <img src={content.image} class="card-img-to" alt="..." />
                                <h3 class="card-title about-card-title">{content.title}</h3>
                                <p className='about-card-text'>{content.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >

    )
}

export default About
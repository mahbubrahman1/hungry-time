import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import LogoFooter from '../../assets/images/logo-footer.png'

const Footer = () => {
    return (
        <footer class="text-center text-lg-start text-muted">
            <div class="container text-center text-md-start mt-5">
                <div class="row mt-3">
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <div class="mb-4">
                            <img src={LogoFooter} alt="" width={'100 %'} />
                        </div>
                        <p>
                            Here you can use rows and columns to organize your footer content. Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit.
                        </p>
                        <p>© 2022 Copyright by Mahbubur Rahman</p>
                    </div>

                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                            Menu
                        </h6>
                        <p>
                            <a href="#!" class="text-reset">Breakfast</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Lunch</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Dinner</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">All</a>
                        </p>
                    </div>

                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                            Follow
                        </h6>
                        <p>
                            <a href="#!" class="text-reset">Facebook</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Instragram</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Twitter</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Linkedin</a>
                        </p>
                    </div>

                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><FontAwesomeIcon icon={faLocation} /> New York, NY 2033, US</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> hungrytime@email.com</p>
                        <p><FontAwesomeIcon icon={faPhone} /> + 05 334 667 88</p>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
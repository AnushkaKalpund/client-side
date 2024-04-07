import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/front.jpg" alt="About" className='w-75 mt-5'/>
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5 mb-0">
                            About us
                        </h3>
                        <h1 className="display-6 mb-2">
                            Who <b>We</b> Are
                        </h1>
                        <hr className='w-50' />
                        <p className="lead mb-4">We are the "House Of Cars" a place where you will get to experince all the best things a customer wants for their cars!
                        We provide a complete guide regarding the car prices, deals, systems and services. We also give brief information regarding the cars interior and exterior designing!
                        Here we provide a complete car servicing, car repairs, car inspection, brake services, denting-painting and battery jump start.
                        </p>
                        <NavLink to="/Home" className="btn btn-primary px-4 py-2 rounded-pill">
                        <i className='fa fa-user-plus ms-2'></i>Get started</NavLink>
                        <NavLink to="/Contact" className="btn btn-primary px-4 py-2 ms-2 rounded-pill">
                        <i className='fa fa-sign-out ms-2'></i>Contact us</NavLink>
                        {/* <button link to="/home" className="btn btn-primary px-4 py-2">Get Started</button>
                        <button link to="/contact" className="btn btn-primary px-4 py-2 ms-2">Contact Us</button> */}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
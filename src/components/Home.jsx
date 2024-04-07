import React from 'react'
import Contact from './Contact'
import Services from './Services'
import About from './About'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <section id="home">
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 mt-5'>
                        <h1 className='display-4 mb-4 text-center text-dark'>Imagine the unimaginable with The House Of Cars !</h1>
                        <br /><br />
                        <p className="lead text-center fs-4 mb-5 text-dark"> Welcome to the gateway of cars world and get great services available.</p>
                        <br /><br />
                        <div className="buttons d-flex justify-content-center">
                        <NavLink to="/Contact" className="btn btn-light px-4 py-2 rounded-pill">
                        <i className='fa fa-user-plus ms-2'></i>Contact</NavLink>
                        <NavLink to="/Services" className="btn btn-light px-4 py-2 ms-2 rounded-pill">
                        <i className='fa fa-sign-out ms-2'></i>Services</NavLink>
                            {/* <div className="btn btn-light me-4 px-4 py-2 rounded-pill">Get Quote</div>
                            <div link to="/Services"className="btn btn-light me-4 px-4 py-2 btn-outline-light rounded-pill">Our Services</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
         <About />
        <Services />
        <Contact />
    </div>
  )
}

export default Home
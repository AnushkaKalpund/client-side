import React from 'react'
import { NavLink } from 'react-router-dom'

const FrontPage = () => {
  return (
    <div>
        <section id="HOME">
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 mt-5'>
                    <h3 className='display-4 mb-4 text-center text-dark'>Imagine the unimaginable with The House Of Cars !</h3>  
                    <br /><br />
                        <p className="lead text-center fs-4 mb-5 text-secondary"> Welcome to the gateway of cars world and get great services available.</p>
                        {/* <div className="buttons d-flex justify-content-center">
                        <NavLink to="/Login" className="btn btn-light me-4 px-4 py-2 rounded-pill">
                        <i className='fa fa-user-plus ms-2'></i>Login</NavLink>
                        <NavLink to="/register" className="btn btn-light me-4 px-4 py-2 btn-outline-light rounded-pill">
                        <i className='fa fa-sign-out ms-2'></i>Register</NavLink> 
                            {/* <div className="btn btn-light me-4 px-4 py-2 rounded-pill">Get Quote</div>
                            <div link to="/Services"className="btn btn-light me-4 px-4 py-2 btn-outline-light rounded-pill">Our Services</div> */}
                         {/* </div> */}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default FrontPage
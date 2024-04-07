import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light shadow">
  <div class="container">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">Contact</a>
        </li>
      </ul> */}
      <a class="navbar-brand text-secondary fs-1 mx-auto" href="#"><i>House Of Cars : Next Car for You!</i></a>
      
      {props.auth ?
      <>
     <NavLink to="/login"  className='btn btn-outline-primary ms-auto px-4 rounded-pill'>
        <i className='fa fa-sign-in ms-2'></i>Login</NavLink>
     <NavLink to="/register" className='btn btn-outline-primary ms-2 px-4 rounded-pill'>
     <i className='fa fa-user-plus ms-2'></i>Register</NavLink>
     </>
      :
      <>
     {/* <NavLink to="/dashboard" className='btn btn-outline-primary ms-2 px-4 rounded-pill'>
     <i className='fa fa-user-plus ms-2'></i>Dashboard</NavLink> */}
     <NavLink to="/register" className='btn btn-outline-primary ms-2 px-4 rounded-pill'>
     <i className='fa fa-user-plus ms-2'></i>Register</NavLink>
     <NavLink to="/FrontPage" className='btn btn-outline-primary ms-2 px-4 rounded-pill'>
     <i className='fa fa-sign-out ms-2'></i>Logout</NavLink>
     </>
}
    </div>
  </div>
</nav>
</div>
    </>
    )
}

export default Navbar
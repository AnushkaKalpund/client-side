import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        username : "",
        email : "",
        password : ""
    });

    // handle inputs
    const handleInput = (event)  =>{
        let name = event.target.name;
        let value = event.target.value;

        setUser({...user, [name]:value});
    }

    // handle submit
    const handleSubmit = async (event) =>{
        event.preventDefault();
        // object destructuring
        // store obj data into variable
        const {username, email, password} = user;
        try {
            const res = await fetch ('/register', {
               method : "POST",
               headers : {
                "Content-Type" : "application/json"
               },
               body : JSON.stringify({
                username, email, password
               }) 
            })
            console.log(res.status)
            if(res.status === 400 || !res){
                window.alert("Already used details")
            }else{
                window.alert("Registered Successfully");
                // navigate.pushState('/login')
                navigate('/login');
            }
        } catch (error) {
            
        }
    }
  return (
    <div>
            <div className="container shadow my-5">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center
                     form order-2">
                        <h1 className="display-4 fw-bolder text-center">Hello !!</h1>
                        <p className="lead">Enter your details for registration</p>
                        <h5 className="mb-4">Or</h5>
                        <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">
                            Login
                        </NavLink>
                    </div>
                    <div className="col-md-6">
                        <h1 className="display-6 fw-bolder mb-5">Register</h1>
                        <form onSubmit={handleSubmit} method="POST">
                            <div class="mb-3">
                                <label for="name" class="form-label">Username</label>
                                <input type="text" class="form-control" id="name" 
                                name="username"
                                value={user.username} 
                                onChange={handleInput}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                                name="email"
                                value={user.email} 
                                onChange={handleInput}/>
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" 
                                name="password"
                                value={user.password} 
                                onChange={handleInput}/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">I agree to Terms and Conditions.</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}


export default Register
        
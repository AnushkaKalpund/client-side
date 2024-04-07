import React from 'react'
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const Contact = () => {

    // const navigate = useNavigate()

    const [msg, setMsg] = useState({
        name : "",
        email : "",
        message : ""
    });

    // handle input
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setMsg({...msg, [name]:value});
    }

     // handle submit
     const handleSubmit = async (event) =>{
        event.preventDefault();
        // object destructuring
        // store obj data into variable
        const {name, email, message} = msg;
        try {
            const res = await fetch ('/message', {
               method : "POST",
               headers : {
                "Content-Type" : "application/json"
               },
               body : JSON.stringify({
                name, email, message
               }) 
            })
            console.log(res.status)
            if(res.status === 400 || !res){
                window.alert("Message not send. Try again.")
            }else{
                window.alert("Message sent.");
                setMsg({
                    name : "",
                    email : "",
                    message : ""
                })
                // navigate.pushState('/login')
                // navigate('/login');
            }
        } catch (error) {
            
        }
    }



    return (
        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                            <h1 className="display-6 text-center mb-4">Have some Questions ?</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/contact.jpg" alt="contact" className="w-75" />
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit} method="POST">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name"
                                     name="name"
                                     value={msg.name}
                                     onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" 
                                    placeholder="name@example.com" 
                                    name="email"
                                    value={msg.email}
                                    onChange={handleChange}/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Your message or Question</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                                    name="message"
                                    value={msg.message}
                                    onChange={handleChange}></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-primary">Send Message<i className="fa fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
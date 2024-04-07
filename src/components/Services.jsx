import React from 'react'

const Services = () => {
    return (
        <div>
            <section id="services">
                <div className="container my-5 oy-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Our Services</h3>
                            <h1 className="display-6 text-center mb-4">Our Awesome Services</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <img src='./assets/car1.webp' alt="car-1" className='w-50'/>
                                    {/* <i className="fa fa-cogs fa-4x mb-4 text-primary"></i> */}
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Complete Car Servicing At Your Doorstep</h5>
                                    <p class="card-text lead">Most of routine check ups, oil change, Spot checking of vehicles, Cleaning we do on spot.</p>
                                    <a href="/contact" class="btn btn-secondary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                <img src='./assets/car2.webp' alt="car-2" className='w-50'/>
                                    {/* <i className="fa fa-star-half fa-4x mb-4 text-primary"></i> */}
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Car Repairs & Servicing</h5>
                                    <p class="card-text lead">We offer an extensive range of car repair services for cars of all models. Also helps in improvement in handling.</p>
                                    <a href="/contact" class="btn btn-secondary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                <img src='./assets/car3.webp' alt="car-3" className='w-50'/>
                                    {/* <i className="fa fa-cogs fa-4x mb-4 text-primary"></i> */}
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Interior-exterior Detailing</h5>
                                    <p class="card-text lead"> Protect car body paint. Stain Remove from Seat cover and its protection. Protects the exterior.</p>
                                    <a href="/contact" class="btn btn-secondary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                <img src='./assets/car-4.webp' alt="car-4" className='w-50'/>
                                    {/* <i className="fa fa-laptop fa-4x mb-4 text-primary"></i> */}
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Battery Jump Start</h5>
                                    <p class="card-text lead">Easy replacement of battery. Conveinent and easy services.</p>
                                    <a href="/contact" class="btn btn-secondary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                <img src='./assets/car5.webp' alt="car-5" className='w-50'/>
                                    {/* <i className="fa fa-mobile fa-4x mb-4 text-primary"></i> */}
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Brake Service</h5>
                                    <p class="card-text lead">Maintenance of the brakes means longer lifespan of the vehicle.</p>
                                    <a href="/contact" class="btn btn-secondary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                <img src='./assets/car6.jpeg' alt="car-6" className='w-50'/>
                                    {/* <i className="fa fa-users fa-4x mb-4 text-primary"></i> */}
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Denting-Painting</h5>
                                    <p class="card-text lead">Computerized colour matching.
                                       Replacement service at low cost.</p>
                                    <a href="/contact" class="btn btn-secondary">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
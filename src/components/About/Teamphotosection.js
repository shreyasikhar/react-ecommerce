import React from 'react'
import Heading from '../Reusable/Heading'

export default function Teamphotosection() {
    return (
        <div className="bg-theme">
            <div className ="container">
                <div className="row">
                    <div className="mx-auto">
                        <Heading title="Our Team" />
                        <div className="card-group mb-5">
                            <div className="card">
                                <img className="card-img-top" src="https://images.pexels.com/photos/3215527/pexels-photo-3215527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                <div className="card-body">
                                <h5 className="card-title">Name 1</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="https://images.pexels.com/photos/4049459/pexels-photo-4049459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                <div className="card-body">
                                <h5 className="card-title">Name 2</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="https://images.pexels.com/photos/4427548/pexels-photo-4427548.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                <div className="card-body">
                                <h5 className="card-title">Name 3</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>      
    )
}
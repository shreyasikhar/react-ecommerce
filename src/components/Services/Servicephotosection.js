import React from 'react'
import Heading from '../Reusable/Heading'

export default function Servicephotosection() {
    return (
        <div className="bg-theme">
            <div className ="container">
                <div className="row">
                    <div className="mx-auto pt-3">
                        <Heading title="Our Services" />
                        <div className="card-group mb-5">
                            <div className="card">
                                <img className="card-img-top" src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                <div className="card-body">
                                <h5 className="card-title">Service 1</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                <div className="card-body">
                                <h5 className="card-title">Service 2</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                <div className="card-body">
                                <h5 className="card-title">Service 3</h5>
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
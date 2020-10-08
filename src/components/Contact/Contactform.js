import React from 'react'
import Heading from '../Reusable/Heading'

export default function Contactform() {
    return (
        <section className="py-3"> 
            <div className="container">
                <Heading title="Contact Us" />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto">
                        <form action="https://formspree.io/f/xyybknvr" method="POST" autoComplete="off">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder="Your Name" 
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Your Email" 
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="mobile" 
                                    id="mobile" 
                                    placeholder="Your Mobile" 
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <textarea 
                                    type="text" 
                                    name="description" 
                                    id="description" 
                                    placeholder="Your Message" 
                                    className="form-control"
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-info btn-block py-2 text-uppercase">Submit</button>
                        </form>
                    </div>
                </div>    
            </div>    
        </section>
    )
}
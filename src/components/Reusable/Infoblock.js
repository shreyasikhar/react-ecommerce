import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="col-10 col-sm-8 mx-auto text-center">
                    <p className="lead text-white mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel pariatur molestias saepe, ad officiis reprehenderit veniam ullam enim aliquam quam corrupti in odio soluta fuga totam, temporibus fugiat recusandae quod delectus animi! Architecto veritatis commodi atque ipsam quasi necessitatibus quia error consectetur vero earum. Hic voluptates iure quae unde, culpa, porro dolore quos ipsum optio accusantium praesentium accusamus at repellat.
                    </p>
                    <Link to="">
                        <button className="btn btn-warning btn-lg">
                            {heading}
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
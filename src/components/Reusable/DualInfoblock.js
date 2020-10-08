import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function DualInfoblock({heading, cardImg}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 mx-auto">
                        <p className="lead text-white mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime distinctio similique rerum alias, delectus ea corrupti aperiam, est natus, at ab! Assumenda aperiam adipisci aliquid eum minus asperiores officiis nemo nobis similique, inventore, officia amet doloremque ipsam! Atque cum at veritatis, id nihil eius velit rerum alias voluptatem similique sed? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, facilis reiciendis totam ad, tempora, sit ipsa quas fugiat perspiciatis quae laudantium labore error commodi excepturi voluptates debitis temporibus aspernatur ut id vel officia in iste corporis. Nam non fugiat ab voluptate! Nostrum asperiores pariatur maxime corporis, consectetur cupiditate ut ipsa officia debitis dolorum quidem commodi cum vitae dolor voluptate iusto nesciunt expedita necessitatibus dolore rem soluta molestiae accusantium quaerat. Vitae similique enim et facere quaerat necessitatibus accusantium. Saepe sapiente, necessitatibus laudantium, quaerat quod quidem facilis molestiae quo temporibus provident corporis rem minus commodi pariatur a dicta, culpa adipisci quam aperiam.
                        </p>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="card bg-dark">
                            <img className="card-img-top" src={cardImg} alt="" />
                            <div className="card-body">
                                <h5 className="card-title text-success">Just Click Photos</h5>
                                <p className="card-text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, at, id laudantium voluptatum error molestias nostrum repudiandae ullam quaerat, perspiciatis quia atque minima. Laudantium, officia? Harum dolores esse ut provident.</p>
                                <Link to="/team" className="btn btn-warning btn-block">{heading}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
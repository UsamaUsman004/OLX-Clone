import React, { Component } from 'react';
import Footer from '../Components/footer';
import NavBar  from '../Components/navbar';
import CategoryNav from '../Components/categoryNav'

export default class productDetails extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <CategoryNav />
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img className="d-block w-100" src="https://i.ytimg.com/vi/_adJBzQgfsg/maxresdefault.jpg" alt="First slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeGUoYsyJeXh6GzOKcLI8-cR4_9m5Ok-DJew&usqp=CAU" alt="Second slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmYseLoKu8RniJ00Z-Nl6JSt5iACXO5SlKGg&usqp=CAU" alt="Third slide" />
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className="card-title">Description</h3>
                                            <p className="card-text">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className="card-title">PRICE</h3>
                                            <p className="card-subtitle mb-2 text-muted">ITEM NAME</p>
                                            <small className="text-muted">Select 3 Images of your Item
                                                <span className="float-right">Oct 20</span>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 my-2">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Seller Descriprion</h5>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <img className="img-fluid" alt="img-user" src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/user-icon.png" />
                                                </div>
                                                <div className="col-md-8 mt-3">
                                                    <h6 className="card-subtitle">USER NAME</h6>
                                                    <small className="text-muted card-subtitle">+923102257759</small><br />
                                                    <small className="text-muted card-subtitle">Uusman004@gmail.com</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6 className="card-title">Posted in</h6>
                                            <small className="text-muted">Bahria Town, Islamabad, Islamabad Capital Territory</small>
                                            <iframe title="map" src="https://www.google.com/maps/d/embed?mid=1wMZLD-KoIBt-zG0r8ziRkZeqgUA&hl=en" className="border border-dark rounded mt-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
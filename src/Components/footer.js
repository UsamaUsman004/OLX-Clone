import React, { Component } from 'react';

export default class footer extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid bg-light">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-2 mr-2 footerSection my-3 my-md-0">
                                <h5>POPULAR CATEGORIES</h5>
                                <ul className="footerLinks">
                                    <li>Cars</li>
                                    <li>Flats for rent</li>
                                    <li>Jobs</li>
                                    <li>Mobile Phones</li>
                                </ul>
                            </div>
                            <div className="col-md-2 mr-2 footerSection my-3 my-md-0">
                                <h5>TRENDING SEARCHES</h5>
                                <ul className="footerLinks">
                                    <li>Bikes</li>
                                    <li>Watches</li>
                                    <li>Books</li>
                                    <li>Dogs</li>
                                </ul>
                            </div>
                            <div className="col-md-2 mr-2 footerSection my-3 my-md-0">
                                <h5>ABOUT US</h5>
                                <ul className="footerLinks">
                                    <li>About OLX Group</li>
                                    <li>OLX Blog</li>
                                    <li>Contact Us</li>
                                    <li>OLX for Businesses</li>
                                </ul>
                            </div>
                            <div className="col-md-2 mr-2 footerSection my-3 my-md-0">
                                <h5>OLX</h5>
                                <ul className="footerLinks">
                                    <li>Help</li>
                                    <li>Sitemap</li>
                                    <li>Legal &amp; Privacy Information</li>
                                </ul>
                            </div>
                            <div className="col-md-2 mx-2 footerSection my-3 my-md-0">
                                <h5>Follow us</h5>
                                <ul className="footerLinks">
                                    <li>
                                        <i className="fa fa-facebook mr-2" />
                                        <i className="fa fa-instagram mr-2" />
                                        <i className="fa fa-twitter mr-2" />
                                        <i className="fa fa-youtube" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid text-white py-3" style={{ background: '#002f34', fontSize: '12px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-left">
                                <b>Other Countries</b> India - South Africa - Indonesia
              </div>
                            <div className="col-md-6 text-right">
                                <b>Free Classifieds in Pakistan</b> © 2006-2020 OLX
              </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
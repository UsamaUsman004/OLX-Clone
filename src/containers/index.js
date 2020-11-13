import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { NavBar, CategoryNav } from '../Components/navbar';
import Footer from '../Components/footer';
import AdImg1 from '../images/ad1.jpg';
import AdImg2 from '../images/ad2.jpg';
import Product from '../Components/product';
import Ad from '../Components/ad';

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <CategoryNav />
                <Ad src={AdImg1} alt="demo" />
                <Product />
                <Ad src={AdImg2} alt="demo" />
                <Footer />

                {/* <h1>HOME</h1>
                <Link to="/Profile">go to Profile</Link> */}

            </div>
        )
    }
}
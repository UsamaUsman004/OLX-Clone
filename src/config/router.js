import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Index from '../containers/index';
import Profile from '../containers/profile';
import AddProduct from '../containers/addProduct';
import ProductDetails from '../containers/productDetails';


export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Index} />
                <Route exact path='/profile' component={Profile} />
                <Route path='/addproduct' component={AddProduct} />
                <Route exact path='/productdetails' component={ProductDetails} />
            </Router>
        )
    }
}
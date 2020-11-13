import React, { Component } from 'react';
// import firebaseConfig from '../config/firebaseConfig';
// import firebase from 'firebase/app';
import { signInWithGoogle } from '../config/firebaseConfig';
import { auth } from '../config/firebaseConfig';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
                <Link to="/" className="navbar-brand font-weight-bold mr-5">Olx</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="form-inline navbar-form">
                    <div className="input-group border border-dark rounded my-3 my-md-0">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><span className="fa fa-search" /></span>
                        </div>
                        <select className="custom-select">
                            <option value={0}>Open this select menu</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                    </div>
                    <div className="input-group input-group-search mx-auto">
                        <input type="text" className="form-control border border-dark" placeholder="Search this blog" />
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="button">
                                <i className="fa fa-search" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {
                            this.state.currentUser ? (
                                <li className="nav-item dropdown">
                                    <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="row ">
                                            <div className="col-md-12">
                                                <img src={this.state.currentUser.photoURL} className="img-fluid rounded-circle" alt="user-img" style={{ width: '60px' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/profile">Profile</Link>
                                        <div className="dropdown-item" onClick={() => auth.signOut()}>LogOut</div>
                                    </div>
                                </li>

                            ) :
                                <li className="nav-item mr-2 d-flex justify-content-center">
                                    <button onClick={signInWithGoogle} className="btn btn-white font-weight-bold">Login</button>
                                </li>

                        }



                        <li className="nav-item d-flex justify-content-center">
                            <Link className="sellbtn text-center py-2 border border-dark bg-white rounded text-dark font-weight-bold" to="/addproduct">
                                <i className="fa fa-plus mr-2" /> Sell
                            </Link>
                        </li>





                    </ul>
                </div>


            </nav>
        );
    }
}

class CategoryNav extends Component {
    render() {
        return (
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link text-dark font-weight-bold" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            All Categories<i className="fa fa-chevron-down ml-1" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/">Mobile Phone</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/">Cars</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/">Motorcycle</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/">House</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/">TV - Video - Audio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/">Tablets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/">Land &amp; Plots</Link>
                    </li>
                </ul>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <b>Category - 1</b>
                                <ul className="categoryList">
                                    <li>Coffee</li>
                                    <li>Tea</li>
                                    <li>Milk</li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <b>Category - 1</b>
                                <ul className="categoryList">
                                    <li>Coffee</li>
                                    <li>Tea</li>
                                    <li>Milk</li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <b>Category - 1</b>
                                <ul className="categoryList">
                                    <li>Coffee</li>
                                    <li>Tea</li>
                                    <li>Milk</li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <b>Category - 1</b>
                                <ul className="categoryList">
                                    <li>Coffee</li>
                                    <li>Tea</li>
                                    <li>Milk</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}


export { NavBar, CategoryNav };
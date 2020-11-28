import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GoogleSignIn, logOut } from '../store/action';
import firebase from 'firebase/app';


class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = firebase.auth().onAuthStateChanged(user => {
            this.setState({ currentUser: user });
            console.log("State changed", user);
        });

    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        console.log("Current State ==>", this.state.currentUser)


        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
                <Link to="/" className="navbar-brand font-weight-bold mr-5">OLX</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="form-inline navbar-form">
                    <div className="input-group border border-dark rounded my-3 my-md-0">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><span className="fa fa-search" /></span>
                        </div>
                        <select className="custom-select">
                            <option defaultValue={0}>Open this select menu</option>
                            <option defaultValue={1}>One</option>
                            <option defaultValue={2}>Two</option>
                            <option defaultValue={3}>Three</option>
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
                                                <img src={this.state.currentUser.photoURL} className="img-fluid rounded-circle" alt={this.state.user} style={{ width: '60px' }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/profile">Profile</Link>
                                        <div className="dropdown-item" to="/" onClick={() => this.props.logOut()}>LogOut</div>
                                    </div>
                                </li>

                            ) :
                                <li className="nav-item mr-2 d-flex justify-content-center">
                                    <button onClick={() => this.props.GoogleSignIn()} className="btn btn-white font-weight-bold">Login</button>
                                </li>

                        }
                        <li className="nav-item d-flex justify-content-center">
                            <button
                                onClick={
                                    () => this.state.currentUser ? window.location.href += 'addproduct'
                                        :
                                        this.props.GoogleSignIn()
                                }
                                className="sellbtn text-center py-2 border border-dark bg-white rounded text-dark font-weight-bold">
                                <i className="fa fa-plus mr-2" /> Sell
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}



const mapStateToProps = (state) => ({
    current_user: state.current_user
})


const mapDispatchToProps = (dispatch) => ({
    //   set_data: (data) => dispatch(set_data(data)),

    GoogleSignIn: (data) => dispatch(GoogleSignIn(data)),
    logOut: (data) => dispatch(logOut(data)),

})
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
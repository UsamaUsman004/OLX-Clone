import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/footer';
import { NavBar, CategoryNav } from '../Components/navbar';

export default class About extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <NavBar />
                <CategoryNav />
                <div className="container my-5">
                    <div className="card">
                        <div className="card-header bg-white">
                            <h5>Profile</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <label className="font-weight-bold mb-3">Basic Information</label>
                                        <input type="text" className="form-control border border-dark" placeholder="full Name" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control border border-dark" placeholder="About Me (Optional)" rows={3} defaultValue={""} />
                                    </div>
                                    <hr />
                                    <div className="form-group">
                                        <label className="font-weight-bold mb-3">Contact Information</label>
                                        <input type="email" className="form-control border border-dark" placeholder="user@email.com" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img className="img-fluid" alt="user-img" src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/user-icon.png" />
                                </div>
                            </div>
                        </div>
                        <div className="card-footer bg-white">
                            <Link className="btn btn-dark" to="/">Back</Link>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}
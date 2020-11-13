import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
                    <Link to="/" className="navbar-brand font-weight-bold mr-5">Olx</Link>
                </nav>
                <div className="container mt-5">
                    <div className="card">
                        <div className="card-header bg-white">
                            <h4 className="text-center font-weight-bold">POST YOUR AD</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <label className="font-weight-bold">SELECT CATEGORY</label>
                                    <select className="form-control border border-dark">
                                        <option selected>Select Category</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label className="font-weight-bold">SELECT CATEGORY</label>
                                    <select className="form-control border border-dark">
                                        <option selected>Select Sub-Category</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <h5 className="font-weight-bold my-3">INCLUDE SOME DETAILS</h5>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label>Ad Title*</label>
                                        <input type="text" className="form-control border border-dark" />
                                        <small className="form-text text-muted">Mention the key features of your item (e.g. brand, model, age, type)</small>
                                    </div>
                                    <div className="col">
                                        <label>Set Price*</label>
                                        <div className="input-group border border-dark rounded">
                                            <div className="input-group-prepend ">
                                                <span className="input-group-text" id="inputGroupPrepend2">Rs.</span>
                                            </div>
                                            <input type="text" className="form-control" aria-describedby="inputGroupPrepend2" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Description*</label>
                                <textarea className="form-control border border-dark" rows={3} defaultValue={""} />
                            </div>
                            <hr className="my-4" />
                            <h5 className="font-weight-bold">UPLOAD PHOTOS</h5>
                            <small className="form-text text-muted">Select 3 Images of your Item</small>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6 mt-3">
                                        <button type="button" className="btn btn-outline-dark px-4 py-3 mx-1"><i className="fa fa-camera" /></button>
                                        <button type="button" className="btn btn-outline-dark px-4 py-3 mx-1"><i className="fa fa-camera" /></button>
                                        <button type="button" className="btn btn-outline-dark px-4 py-3 mx-1"><i className="fa fa-camera" /></button>
                                    </div>
                                    <div className="col-md-6">
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <h5 className="font-weight-bold">CONFIRM YOUR LOCATION</h5>
                            <div className="form-group">
                                <label>State*</label>
                                <select className="form-control border border-dark">
                                    <option />
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <hr className="my-4" />
                            <h5 className="font-weight-bold mb-5">REVIEW YOUR DETAILS</h5>
                            <div className="row">
                                <div className="col-md-2">
                                    <img className="img-fluid" alt="user-img" src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/user-icon.png" />
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col-md-12 mb-3">
                                            <label>Name*</label>
                                            <input type="text" className="form-control border border-dark" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label>Set Price*</label>
                                            <div className="input-group border border-dark rounded">
                                                <div className="input-group-prepend ">
                                                    <span className="input-group-text" id="inputGroupPrepend2">+92</span>
                                                </div>
                                                <input type="text" className="form-control" aria-describedby="inputGroupPrepend2" required />
                                            </div>
                                            <small className="form-text text-muted">This phone number will be shown on your ads</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer bg-white">
                            <button className="btn btn-secondary">Post Now</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
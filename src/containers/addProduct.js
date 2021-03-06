import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Add_product } from '../store/action';
import firebaseConfig from '../config/firebaseConfig';
import firebase from 'firebase/app'

class AddProduct extends Component {
    constructor() {
        super()
        this.state = {
            products: {
                category: '',
                title: '',
                price: '',
                description: '',
                state: '',
                name: '',
                contact: '',
                url: '',
                file: ''
            },

        }
    }

    handleSubmit = (event) => {
        const { category, title, price, description, state, name, contact, url, file } = this.state.products
        this.props.Add_product(this.state.products)

        // const { file } = this.state.products;

        // var ref = firebase.storage().ref().child(`images/${file.name}`).put(file)
        // ref.on('state_changed', function (snapshot) {
        //     //progress
        // },
        //     function (error) {
        //         //error
        //     },
        //     function () {
        //         //complete
        //         ref.snapshot.ref.getDownloadURL()
        //             .then(function (downloadURL) {
        //                 console.log('File available at', downloadURL);                      
        //             });
        //     }
        // );

        
      

        // console.log("File====>", file)

        // console.log("State yeh hai", this.state)
        // this.props.Add_product(this.state.products)
        // console.log('State Here ==>', this.state.products)
        event.preventDefault()
        // alert(` 
        //   ____Your Details____\n 
        //   category: ${category},
        //     title: ${title},
        //     price: ${price},
        //     description: ${description},
        //     state: ${state},
        //     name: ${name},
        //     contact: ${contact},
        //     url:${url},
        //     file:${file}
        // `)
    }

    handleChange = (event) => {
        if (event.target.type == 'file') {
            this.setState(
                {
                    products: {
                        ...this.state.products, file: event.target.files[0]
                    }
                }
            )
        }

        else {
            this.setState({
                products: {
                    ...this.state.products, [event.target.name]: event.target.value
                }
            })
        }
    }



    upload_data = () => {


        console.log("YEh rahi ==>", this.state)

        // var ref = firebase.storage().ref().child(`images/${e.target.files[0].name}`).put(e.target.files[0])
        // ref.on('state_changed', function (snapshot) {
        // }, function (error) {
        // }, function () {
        //     ref.snapshot.ref.getDownloadURL()
        //         .then(function (downloadURL) {
        //             console.log('File available at', downloadURL);
        //         });
        // }
        // );
    }

    render() {
        // let products = this.state;
        // console.log('Add Product==>', products)
        // console.log("Image is here", this.state.products.file)
        // console.log("Props Recieved==>", this.props)
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
                        <form onSubmit={this.handleSubmit}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <label className="font-weight-bold">SELECT CATEGORY</label>
                                        <select name="category" onChange={this.handleChange} className="form-control border border-dark">
                                            <option>Select Category</option>
                                            <option value="cars">Cars</option>
                                            <option value="bikes">Bikes</option>
                                            <option value="plots">Plots</option>
                                            <option value="mobiles">Mobiles</option>
                                        </select>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <h5 className="font-weight-bold my-3">INCLUDE SOME DETAILS</h5>

                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <label>Ad Title*</label>
                                            <input name="title" onChange={this.handleChange} type="text" className="form-control border border-dark" />
                                            <small className="form-text text-muted">Mention the key features of your item (e.g. brand, model, age, type)</small>
                                        </div>
                                        <div className="col">
                                            <label>Set Price*</label>
                                            <div className="input-group border border-dark rounded">
                                                <div className="input-group-prepend ">
                                                    <span className="input-group-text" id="inputGroupPrepend2">Rs.</span>
                                                </div>
                                                <input type="text" onChange={this.handleChange} name="price" className="form-control" aria-describedby="inputGroupPrepend2" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Description*</label>
                                    <textarea onChange={this.handleChange} className="form-control border border-dark" rows={3} name="description" />
                                </div>
                                <hr className="my-4" />
                                <h5 className="font-weight-bold">UPLOAD PHOTOS</h5>
                                <small className="form-text text-muted">Select Image of your Item</small>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-6 mt-3">
                                            <input type="file" name="image"
                                                // onChange={
                                                //     (e) => this.set_image(e)
                                                // }

                                                onChange={this.handleChange}
                                            />

                                            {/* <input type='button' className="btn btn-secondary mt-4" onClick={() => this.upload_image}  /> */}



                                            {/* <label htmlFor="img1" className="btn btn-outline-dark px-4 py-3 mx-1"><i className="fa fa-camera" /></label> */}

                                            {/* <button type="button" className="btn btn-outline-dark px-4 py-3 mx-1"><i className="fa fa-camera" /></button>
                                            <button type="button" className="btn btn-outline-dark px-4 py-3 mx-1"><i className="fa fa-camera" /></button>
                                            <button type="button" className="btn btn-outline-dark px-4 py-3 mx-1"><i className="fa fa-camera" /></button> */}
                                        </div>
                                        <div className="col-md-6">
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <h5 className="font-weight-bold">CONFIRM YOUR LOCATION</h5>
                                <div className="form-group">
                                    <label>State*</label>
                                    <select name="state" onChange={this.handleChange} className="form-control border border-dark">
                                        <option />
                                        <option value="sindh">Sindh</option>
                                        <option value="balochistan">Balochistan</option>
                                        <option value="punjab">Punjab</option>
                                        <option value="kpk">KPK</option>
                                        <option value="gilgit">Gilgit Baltistan</option>
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
                                                <input name="name" onChange={this.handleChange} type="text" className="form-control border border-dark" placeholder="Owner Name" />
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <label>Contact No.*</label>
                                                <div className="input-group border border-dark rounded">
                                                    <div className="input-group-prepend ">
                                                        <span className="input-group-text" id="inputGroupPrepend2">+92</span>
                                                    </div>
                                                    <input name="contact" onChange={this.handleChange} type="text" className="form-control" aria-describedby="inputGroupPrepend2" required />
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
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    current_user: state.current_user,
    products: state.products
})


const mapDispatchToProps = (dispatch) => ({
    Add_product: (data) => dispatch(Add_product(data)),

})
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
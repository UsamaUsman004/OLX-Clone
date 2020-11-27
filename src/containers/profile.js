import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/footer';
import NavBar  from '../Components/navbar';
import CategoryNav from '../Components/categoryNav';
import { connect } from 'react-redux';
class About extends Component {
    render() {
        console.log("Profile==>",this.props)
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
                                        <input type="text" className="form-control border border-dark" defaultValue={this.props.current_user.name} />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control border border-dark" placeholder="About (Optional)"  rows={3} defaultValue={""} />
                                    </div>
                                    <hr />
                                    <div className="form-group">
                                        <label className="font-weight-bold mb-3">Contact Information</label>
                                        <input type="email" className="form-control border border-dark" defaultValue={this.props.current_user.email} placeholder="user@email.com" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control border border-dark" placeholder="+92 333 1234567" defaultValue={this.props.current_user.phoneNumber} />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img className="img-fluid h-100"  alt="user-img" src={this.props.current_user.profile} />
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


const mapStateToProps = (state) => ({
    current_user: state.current_user
})


// const mapDispatchToProps = (dispatch) => ({
//     //   set_data: (data) => dispatch(set_data(data)),
//     GoogleSignIn: (data) => dispatch(GoogleSignIn(data))

// })
export default connect(mapStateToProps, null)(About);
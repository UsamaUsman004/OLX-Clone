// import { Link } from 'react-router-dom';
import NavBar from '../Components/navbar';
import CategoryNav from '../Components/categoryNav'
import Footer from '../Components/footer';
import AdImg1 from '../images/ad1.jpg';
import AdImg2 from '../images/ad2.jpg';
import Product from '../Components/product';
import Ad from '../Components/ad';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleSignIn, get_products } from '../store/action';
import { Link } from 'react-router-dom';

class Home extends Component {
    componentDidMount() {
        this.props.get_products();
    }
    render() {
        console.log("Props Recieved==>", this.props)
        console.log("User from reducer in products ==>", this.props.products)
        return (

            <div>
                <NavBar />
                <CategoryNav />
                <Ad src={AdImg1} alt="demo" />
                {/* <Product /> */}

                <div className="container-fluid my-5">
                    <div className="container">
                        <p style={{ fontSize: '24px' }} className="my-4">Fresh Recommendations</p>




                        <div className="row">

                            {this.props.products.map((v, i) => {
                                {console.log("yeh value hai",v)}
                                return <div className="col-md-3 my-3">
                                    <div className="card">
                                        <img className="card-img-top img-fluid" src={v.url} alt="Item-Img" style={{ height: '10rem' }} />
                                        <div className="card-body yellowBorder">

                                            <Link to="/productdetails" className="card-title font-weight-bold text-dark">{v.title}</Link>
                                            <p className="card-text text-secondary" style={{ fontSize: '14px' }}>{v.description}</p>
                                            <small className="text-secondary">
                                                {v.state} <p className="text-right" style={{ display: 'inline', float: 'right' }}>18 OCT</p></small>
                                        </div>
                                    </div>
                                </div>

                            })}




                            {/* <div className="col-md-3 my-3">
                                <div className="card">
                                    <img className="card-img-top img-fluid" src="https://assets.ajio.com/medias/sys_master/root/ajio/catalog/5ef38fcbf997dd433b43d714/-473Wx593H-461205998-black-MODEL.jpg" alt="Item-Img" style={{ height: '10rem' }} />
                                    <div className="card-body yellowBorder">

                                        <Link to="/productdetails" className="card-title font-weight-bold text-dark">Shoes</Link>
                                        <p className="card-text text-secondary" style={{ fontSize: '14px' }}>Some quick example text build ..</p>
                                        <small className="text-secondary">
                                            LYARI TOWN KARACHI <p className="text-right" style={{ display: 'inline', float: 'right' }}>18 OCT</p></small>
                                    </div>
                                </div>
                            </div> */}

                            {/* <Items/> */}

                        </div>
                    </div>
                </div>
                <Ad src={AdImg2} alt="demo" />
                <Footer />
                {/* <button onClick={() => this.props.GoogleSignIn()}> Login</button> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    current_user: state.current_user,
    products: state.products
})


const mapDispatchToProps = (dispatch) => ({
    //   set_data: (data) => dispatch(set_data(data)),
    GoogleSignIn: (data) => dispatch(GoogleSignIn(data)),
    get_products: (data) => dispatch(get_products(data)),

})
export default connect(mapStateToProps, mapDispatchToProps)(Home);

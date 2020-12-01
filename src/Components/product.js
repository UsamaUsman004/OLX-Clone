import React, { Component } from 'react';
// import Items from './items';
import { get_products } from '../store/action';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Product extends Component {
    componentDidMount() {
        this.props.get_products();
    }
    render() {
        console.log("User from reducer in products ==>", this.props.products)
        return (
            <div className="container-fluid my-5">
                <div className="container">
                    <p style={{ fontSize: '24px' }} className="my-4">Fresh Recommendations</p>

                    {/* {this.props.products.map((v,i)=>{
                            <h2 key={i}>{v.category}</h2>
                        })}  */}

                    <div className="row">

                        

                        
                        <div className="col-md-3 my-3">
                            <div className="card">
                                <img className="card-img-top img-fluid" src="https://assets.ajio.com/medias/sys_master/root/ajio/catalog/5ef38fcbf997dd433b43d714/-473Wx593H-461205998-black-MODEL.jpg" alt="Item-Img" style={{ height: '10rem' }} />
                                <div className="card-body yellowBorder">

                                    <Link to="/productdetails" className="card-title font-weight-bold text-dark">Shoes</Link>
                                    <p className="card-text text-secondary" style={{ fontSize: '14px' }}>Some quick example text build ..</p>
                                    <small className="text-secondary">
                                        LYARI TOWN KARACHI <p className="text-right" style={{ display: 'inline', float: 'right' }}>18 OCT</p></small>
                                </div>
                            </div>
                        </div>

                        {/* <Items/> */}

                    </div>
                </div>
            </div>

        )
    }
}



const mapStateToProps = (state) => ({
    // current_user: state.current_user,
    products: state.products
})


const mapDispatchToProps = (dispatch) => ({
    get_products: (data) => dispatch(get_products(data)),

})
export default connect(mapStateToProps, mapDispatchToProps)(Product);

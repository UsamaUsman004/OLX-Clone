import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class items extends Component {
    render() {
        return (
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
        )
    }
}
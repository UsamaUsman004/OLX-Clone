import React, { Component } from 'react';
import Items from './items';

export default class Product extends Component {
    render() {
        return (
            <div className="container-fluid my-5">
                <div className="container">
                    <p style={{ fontSize: '24px' }} className="my-4">Fresh Recommendations</p>
                    <div className="row">
                        <Items/>

                    </div>
                </div>
            </div>

        )
    }
}

import React, { Component } from 'react';


export default class Ad extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <img src={this.props.src}  className="img-fluid" alt={this.props.alt} />
                    </div>
                </div>
            </div>
        )
    }
}
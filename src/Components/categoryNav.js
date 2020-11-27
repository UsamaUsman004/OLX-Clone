import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CategoryNav extends Component {
    render() {
        return (
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link text-dark font-weight-bold" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            All Categories<i className="fa fa-chevron-down ml-1" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/">Mobile Phone</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/">Cars</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/">Motorcycle</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/">House</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/">TV - Video - Audio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/">Tablets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/">Land &amp; Plots</Link>
                    </li>
                </ul>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <b>Category - 1</b>
                                <ul className="categoryList">
                                    <li>Coffee</li>
                                    <li>Tea</li>
                                    <li>Milk</li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <b>Category - 1</b>
                                <ul className="categoryList">
                                    <li>Coffee</li>
                                    <li>Tea</li>
                                    <li>Milk</li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <b>Category - 1</b>
                                <ul className="categoryList">
                                    <li>Coffee</li>
                                    <li>Tea</li>
                                    <li>Milk</li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <b>Category - 1</b>
                                <ul className="categoryList">
                                    <li>Coffee</li>
                                    <li>Tea</li>
                                    <li>Milk</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

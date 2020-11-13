import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './config/router';
// import { NavBar, CategoryNav } from './Components/navbar';
// import Footer from './Components/footer';
// import Ad from './Components/ad';
// import AdImg1 from './images/ad1.jpg';
// import AdImg2 from './images/ad2.jpg';
// import Product from './Components/product';


class App extends Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>

    )
  }
}



export default App;

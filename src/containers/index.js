// import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/navbar';
import CategoryNav from '../Components/categoryNav'
import Footer from '../Components/footer';
import AdImg1 from '../images/ad1.jpg';
import AdImg2 from '../images/ad2.jpg';
import Product from '../Components/product';
import Ad from '../Components/ad';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleSignIn } from '../store/action'

class Home extends Component {
    render() {
        console.log("Props Recieved==>",this.props)
        return (
            <div>
                <NavBar />
                 <CategoryNav />
                 <Ad src={AdImg1} alt="demo" />
                 <Product />
                 <Ad src={AdImg2} alt="demo" />
                <Footer />
                {/* <button onClick={() => this.props.GoogleSignIn()}> Login</button> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    current_user: state.current_user
})


const mapDispatchToProps = (dispatch) => ({
    //   set_data: (data) => dispatch(set_data(data)),
    GoogleSignIn: (data) => dispatch(GoogleSignIn(data))

})
export default connect(mapStateToProps, mapDispatchToProps)(Home);

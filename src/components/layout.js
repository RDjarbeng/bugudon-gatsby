import React from 'react'
import Header from './Header/header';
import Footer from './Footer/Footer';
//CSS styles

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import AOS from "aos";//trying to implement aos


const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
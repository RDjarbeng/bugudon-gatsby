import React from 'react'
import Header from './Header/header';
import Footer from './Footer/Footer';
//CSS styles
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";


const Layout = (props) => {
    AOS.init();
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
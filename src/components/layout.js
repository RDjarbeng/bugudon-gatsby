import React from 'react'
import Header from './Header/header';
import Footer from './Footer/Footer';
//CSS styles
import './App.css';
import './style.css';


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
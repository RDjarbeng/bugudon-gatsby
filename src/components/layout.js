import React from 'react'
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Footer from './footer'
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
import React from 'react';
import { Link } from 'gatsby';


export default function Header() {
    return(
        <header id="nav1" style={{height:40}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-white p-0 nav-menu shadow">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand p-0 mr-auto" to="/"> <img src="/img/logo.jpg" alt="logo" className="logo-img d-inline-block align-top"/></Link>
                    <ul className="navbar-nav  mt-2 mt-lg-0 mr-5" id="responsive-navbar-nav">
                    <li className="nav-item">
                            <Link activeClassName="active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                            <Link to="/projects" activeClassName="active">Projects</Link>
                    </li>
                    <li className="nav-item">
                            <Link to="/investors" activeClassName="active">Investors {'&'} Off takers</Link>
                    </li>
                    <li className="nav-item">
                            <Link to="/company" activeClassName="active">Company</Link>
                    </li>
                    <li className="nav-item">
                            <Link to="/contact" activeClassName="active">Contact Us</Link>
                    </li>
                    </ul>
                </div>
                </nav>
        </header>
       
    );
}
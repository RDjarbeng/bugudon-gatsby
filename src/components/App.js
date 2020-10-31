import React from 'react';
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import Layout from '../components/layout'
import Home from './components/Home/Home';

import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Company from './components/Portfolio/Company';
import Privacy from './components/Privacy/Privacy';
import InvestorSection from './components/Home/InvestorSection';
import './App.css';
import './style.css';


function App() {
  return (
    <Layout>
      <div>
        Welcome Home
      </div>
    </Layout> 
  );
}

export default App;
import React from "react";
import Layout from '../components/layout'
// import App from "../components/App";
import Home from "../components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap'
export default function Index() {
  return (
    <Layout>
      <div>
        Welcome Home
         <Home />
      </div>
     </Layout>
  )
  
}

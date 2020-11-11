import React from 'react';
import { Link } from 'gatsby';
import data from '../../content/contactData.json'
import ReactMarkdownWithHtml from "react-markdown/with-html";

export default function Footer(){
    return(
  <footer id="footer" style={{borderTop: '2px solid white'}}>
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Links</h4>
            <ul>
              <li> <Link to="/projects">Projects</Link></li>
              <li> <Link to="/investors">Investors & Off takers</Link></li>
              <li> <Link to="/company">Company</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy">Privacy policy</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
                <p><strong>Location:</strong><br />
                  {<ReactMarkdownWithHtml children={data.locationInfo} allowDangerousHtml />}
            {/* H/No. C684 <br />
            Nii Kwamena Bonnie Crescent<br />
            Dzorwulu, Accra, Ghana<br /><br /> */}

                  <strong>Postal Address:</strong> <br />
                  {<ReactMarkdownWithHtml children={data.postalInfo} allowDangerousHtml />}
              <br />
            </p>

          </div>

          <div className="col-lg-3 col-md-6 footer-contact pushed-down">
            
            <div>
                  <strong className="font-weight-bold">Phone:</strong>
                  {<ReactMarkdownWithHtml children={data.phoneInfo} allowDangerousHtml />}
                  <br />
                  <strong>Email:</strong><br /> 
                  {<ReactMarkdownWithHtml children={data.emailInfo} allowDangerousHtml />}
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-info">
            <h3> Careers</h3>
                {<ReactMarkdownWithHtml children={data.careers} allowDangerousHtml />}
            <br />

            {/* <a href="contact.html" className="text-dark" > </a>*/}
            <button className="btn btn-warning"> Send mail</button>

          </div>

        </div>
      </div>
    </div>
    <div className="container-fluid p-0" style={{backgroundColor:'ash'}}>
      <p className="copyright mb-0">
        &copy; Copyright {new Date().getFullYear()} <strong><span>Bugudon Ltd</span></strong>. All Rights Reserved. Developed and maintained by <a href="https://sterde.com">Sterde</a>
      </p>
    </div>
    <span className="back-to-top"><i className="icofont-simple-up"></i></span>
      </footer>
    );
}



import React from 'react';
import Carousels from '../Carousel/Carousels';
import SectionTitle from '../Home/SectionTitle';
import {ContactData} from './ContactData';
import ContactCards from './ContactCards';
import Map from './Map';
import ContactForm from './ContactForm';
import data from '../../content/contactData.json'
import ReactMarkdownWithHtml from "react-markdown/with-html";

export default function Contact(){
    return(
      <React.Fragment>  
        <Carousels 
          source1={data.image1}
          source2={data.image2}
          source3={data.image3}
        />
         <div className="container pt-3">
           <SectionTitle title="CONTACT US"/>
         </div>
         <div className="container text-center">
            <h4 className="font-weight-bold mb-0">Location:</h4>
            <p style={{lineHeight:1.5}} className="mb-2" id="contactInfo"><strong>Postal Address:</strong> – P.O.Box GP 4107, Accra <br />
                <strong>Email:</strong> yehodamines@yahoo.com <br />
            <strong>Call us:</strong> {ContactData[3].info} <br />
            </p>
            <h4 className="font-weight-bold mb-0">Internship & Careers</h4>
          <p className="mb-0" style={{ lineheight: 1.5 }}>
            {<ReactMarkdownWithHtml children={data.careers} allowDangerousHtml />}
            </p>
       </div>

       <div className="container mt-3">
          <div className="row">
              {
                ContactData.map(({classes,title,info})=>{
                  return(
                    <ContactCards key={title} classes={classes} title={title} info={info} />
                  )
                })
              }
          </div> 
          <div className="row mb-3">
            <Map />
            <ContactForm />
          </div> 
       </div>

       
      </React.Fragment> 
    )
}
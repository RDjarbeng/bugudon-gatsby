import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { graphql, useStaticQuery } from 'gatsby';
import parse, { domToReact }  from 'html-react-parser';

export default function BenefitCards() {
  const benefits = useStaticQuery(graphql`
      query{
  benefit1: markdownRemark(fileAbsolutePath: {regex: "/content/HomeBenefits/benefit1/i"}) {
    frontmatter {
      title
      image1
      image2
    }
    html
  }
  benefit2: markdownRemark(fileAbsolutePath: {regex: "/content/HomeBenefits/benefit2/i"}) {
    frontmatter {
      title
      image1
    }
    html
  }
  benefit3: markdownRemark(fileAbsolutePath: {regex: "/content/HomeBenefits/benefit3/i"}) {
    frontmatter {
      title
      image1
      image2
    }
    html
  }
}

  `)

  const options = {
    replace: ({  children, name }) => {
      //add the class to the ol
      if (name === 'ol') {
        return <ol className="pl-3 text-justify list-div pt-0 ">{domToReact(children, options)}</ol>;
      }
    }
  };
  
  return (
    <div className="row mt-2 mb-3">
      <div className="col-md-4 pl-0 pr-0">
        <div className="shadow card border-0 h-100">
          <Carousel className="carousel-inner" style={{ height: 200 }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={benefits.benefit1.frontmatter.image1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={benefits.benefit1.frontmatter.image2}
                alt="First slide"
              />
            </Carousel.Item>
          </ Carousel>

          <div className="card-body pl-2 pr-2 pt-0">
            <h5 className="card-title text-center font-weight-bold mb-0">{benefits.benefit1.frontmatter.title}</h5>

            <div className="card-text mb-0">
              {/* <ol className="pl-3 text-justify list-div pt-0 ">
                  <li>The creation of wealth within the local host community in terms of direct and indirect jobs;</li>
                  <li>Development of social amenities and infrastructure by Government, NGO’s,
                    and private entities due to increased economic activities in the area;</li>
                  <li>Proper management of the environmental issues associated with
                    mining under the supervision of the EPA.</li>
                </ol> */}
              {parse(benefits.benefit1.html, options)}
              
            </div>

          </div>
        </div>
      </div>
      <div className="col-md-4 zero-pr">
        <div className="shadow card h-100 border-0">
          <img className="card-img-top" src={benefits.benefit2.frontmatter.image1} alt="Card cap" style={{ height: 200 }} />
          <div className="card-body pl-2 pr-2 pt-0">
            <h5 className="card-title text-center font-weight-bold mb-0">{benefits.benefit2.frontmatter.title}</h5>
            <div className="card-text mb-0">
              {/* <ol className="pl-3 text-justify list-div pt-0 ">
                <li>Increase government revenues from the area via applicable taxes, royalties, and levies;</li>
                <li>Increase foreign direct investment into Ghana;</li>
                <li>Increase foreign exchange reserves to support the local currency.</li>
              </ol> */}
              {parse(benefits.benefit2.html, options)}
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 zero-pr">
        <div className="shadow card h-100 border-0">
          <Carousel className="carousel-inner" style={{ height: 200 }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={benefits.benefit3.frontmatter.image1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={benefits.benefit3.frontmatter.image2}
                alt="First slide"
              />
            </Carousel.Item>
          </ Carousel>
          <div className="card-body pl-2 pr-2 pt-0">
            <h5 className="card-title pt-0 text-center font-weight-bold mb-0">{benefits.benefit3.frontmatter.title}</h5>
            <div className="card-text mb-0">
              {parse(benefits.benefit3.html, options)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
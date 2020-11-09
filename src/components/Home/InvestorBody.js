import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import parse from 'html-react-parser';
export default function InvestorBody() {
    
    const investors = useStaticQuery(graphql`
      query{
        investor: markdownRemark(fileAbsolutePath: {regex: "/content/HomeInvestors/investor/i"}) {
            frontmatter {
            title
            image
            }
            html
        }
        offtaker: markdownRemark(fileAbsolutePath: {regex: "/content/HomeInvestors/offtaker/i"}) {
            frontmatter {
            title
            image
            }
            html
        }
    }
  `)
    
    
    return(
        <div className="row pb-3">
            <div className="col-md-6 h-100 pb-3">
                <img src={investors.investor.frontmatter.image} className="shadow img-fuid rounded" alt="investors" style={{height: '85%',width : '100%'}} />
            </div>
            <div className="col-md-6 shadow h-100">
                <h4 className="font-weight-bold">Investors</h4>
                {parse(investors.investor.html)}
        </div>
        <div className="col-md-6 shadow h-100">
                <h4 className="font-weight-bold">Off-takers</h4>
Bugudon Limited is working with its partners to commence production
    of at least one of the minerals listed below on its project by first
    (1st) quarter 2022.

Projected mineral products are:

1. Gold bars
2. Ilmenite.

The company is seeking potential off-taker arrangements from reputable
entities that will ensure ready demand for all minerals to be produced.

Interest entities can send emails to offtakers@bugudon.com
        </div>
        <div className="col-md-6 h-100">
                <img src="/img/Hnet-image (4).gif" className="shadow img-fluid rounded" alt="investors" style={{height: '85%',width: '100%'}} />
        </div>
     </div>
    );
}
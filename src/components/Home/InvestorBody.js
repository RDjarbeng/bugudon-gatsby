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
            {/* Investor section */}
            <div className="col-md-6 h-100 pb-3">
                <img src={investors.investor.frontmatter.image} className="shadow img-fuid rounded" alt="investors" style={{height: '85%',width : '100%'}} />
            </div>
            <div className="col-md-6 shadow h-100">
                <h4 className="font-weight-bold">{investors.investor.frontmatter.title}</h4>
                {parse(investors.investor.html)}
            </div>
            {/* offtakers section */}
        <div className="col-md-6 shadow h-100">
                <h4 className="font-weight-bold">{investors.offtaker.frontmatter.heading}</h4>
                {parse(investors.offtaker.html)}
        </div>
        <div className="col-md-6 h-100">
                <img src={investors.offtaker.frontmatter.image} className="shadow img-fluid rounded" alt="investors" style={{height: '85%',width: '100%'}} />
        </div>
     </div>
    );
}
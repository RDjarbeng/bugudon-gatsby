import React from 'react';
import investors from '../../contentJSON/homeInvestors.json'
import ReactMarkdownWithHtml from "react-markdown/with-html";


export default function InvestorBody() {
    return(
        <div className="row pb-3">
            <div className="col-md-6 h-100 pb-3">
                <img src="static/img/business-163464_1280.jpg" className="shadow img-fuid rounded" alt="investors" style={{height: '85%',width : '100%'}} />
            </div>
            <div className="col-md-6 shadow h-100">
                <h4 className="font-weight-bold">Investors</h4>
                In line with the company’s mission of progressively harnessing the best philosophies,
practices, tools, partnerships, and resources to grow the company’s mining and process
capability, the proponents of Bugudon Limited are seeking investors in the various projects
that the company is promoting.

The company has the concession rights, and have further invested in some amount of geological
works to establish economic quantities of gold on all concession. And for this reason, is
seeking for investors to exploit the potential together.

Interest entities can send emails to investors@bugudon.com
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
                <img src="static/img/Hnet-image (4).gif" className="shadow img-fluid rounded" alt="investors" style={{height: '85%',width: '100%'}} />
        </div>
     </div>
    );
}
import React from 'react';
// import parse from 'html-react-parser'
import ReactMarkdownWithHtml from "react-markdown/with-html";

export default function Highlight({ style, heading, paragraph, color, data_aos }) {
    return(
        <div className="col-md-4 p-3">
            <div className=" shadow col h-100" style={style} data-aos={data_aos}> 
                <h5 className="font-weight-bolder pt-2">{heading}</h5>
                <p style={{ color }} className="font-weight-bold" >
                    <ReactMarkdownWithHtml children={paragraph} allowDangerousHtml />
                </p>
            </div>
        </div>
    );
}

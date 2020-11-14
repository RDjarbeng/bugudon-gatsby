import React from 'react';
import data from '../../content/companyData.json'
import ReactMarkdownWithHtml from "react-markdown/with-html";

export const LeadersData = [
    {
        img_src : data.leaderPic1,
        name :data.leaderTitle1,
        description : 
            <React.Fragment>
                <ReactMarkdownWithHtml children={data.leaderContent1} allowDangerousHtml />
            </React.Fragment>
    },
    {
        img_src: data.leaderPic2,
        name: data.leaderTitle2,
        description:
            <React.Fragment>
                <ReactMarkdownWithHtml children={data.leaderContent2} allowDangerousHtml />
            </React.Fragment>
    },
    {
        img_src: data.leaderPic3,
        name: data.leaderTitle3,
        description:
            <React.Fragment>
                <ReactMarkdownWithHtml children={data.leaderContent3} allowDangerousHtml />
            </React.Fragment>
    },
    {
        img_src: data.leaderPic4,
        name: data.leaderTitle4,
        description:
            <React.Fragment>
                <ReactMarkdownWithHtml children={data.leaderContent4} allowDangerousHtml />
            </React.Fragment>
    }
]
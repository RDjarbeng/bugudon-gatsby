import React from 'react';
import { faEnvelope, faPhone, faMap } from '@fortawesome/free-solid-svg-icons';
import data from '../../content/contactData.json'
import ReactMarkdownWithHtml from "react-markdown/with-html";

export const ContactData = [
    {
        classes: faMap,
        title:"Location",
        info:<React.Fragment>
              {/* H/No. C684, <br />
              Nii Kwamena Bonnie Crescent
              Dzorwulu, Accra, Ghana */}
            {<ReactMarkdownWithHtml children={data.locationInfo} allowDangerousHtml />}
        </React.Fragment>
    },
    {
        classes:faEnvelope,
        title:"Postal Address",
        info:<React.Fragment>
              {/* Post Office Box GP 4107<br />
              Accra, Ghana */}
            {<ReactMarkdownWithHtml children={data.postalInfo} allowDangerousHtml />}
        </React.Fragment>
    },
    {
        classes:faEnvelope,
        title:"Email Us",
        info:<React.Fragment>
              {/* enquiries@bugudon.com<br />
                Togbe@bugudon.com<br />
                yehodamines@yahoo.com */}
            {<ReactMarkdownWithHtml children={data.emailInfo} allowDangerousHtml />}
        </React.Fragment>
    },
    {
        classes:faPhone,
        title:"Call Us",
        info:<React.Fragment>
            {<ReactMarkdownWithHtml children={data.phoneInfo} allowDangerousHtml />}
        </React.Fragment>
    }
]


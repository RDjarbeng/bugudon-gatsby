import React from 'react';
import Title from './Title';
import {useEffect, useState} from 'react'

export default function Intro(props) {
  console.log(props.content);
  const [intro, setIntro] = useState(props.content);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    setIntro(props.content)
  });
    return(
    <React.Fragment>    
      <Title text="GOLD POTENTIAL OF GHANA" />  
      <div className="container pt-2">
          <p className="text-justify pt-2 shadow pl-2 pr-2 pb-2" style={{ PlineHeight: 1.1 }}>
            {props.content}
        </p>
      </div>
    </React.Fragment>  
    );
}
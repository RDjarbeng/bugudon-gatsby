import React from 'react';
import Carousels from '../Carousel/Carousels';
import SectionTitle from '../Home/SectionTitle';
import Story from './Story';
import VisionAndMission from './VisionAndMission';
import Leadership from './Leadership';
import { image1, image2, image3, vision, mission, values, story } from '../../content/companyData.json'
export default function Company(){
    return(
      <React.Fragment>  
            <Carousels
                // source1 ="/img/excavators-1050501_1280.jpg"
                // source2 ="/img/company_1.png"
                // source3 = "/img/paddle-wheel-1051962_1280smaller.png"
                source1={image1}
                source2={image2}
                source3={image3}
            />
            <div className="pt-3"> 
               <SectionTitle title="OUR STORY"/>
            </div>
            <Story story={story}/>
            <VisionAndMission vision ={vision} mission={mission} values={values} />
            <Leadership />
            
        </React.Fragment>
    )
}
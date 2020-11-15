import React from 'react';
import Carousels from '../Carousel/Carousels';
import SectionTitle from '../Home/SectionTitle';
import Intro from './Intro';
import Title from './Title';
import CompleteImgDes from './CompleteImgDes';
import data from '../../content/projectData.json'

export default function Projects() {
    return(
      <main id="main">  
        <Carousels 
          source1 = {data.image1}
          source2={data.image2}
          source3={data.image3}
          />
        <div className="pt-2">
          <SectionTitle title="OUR PROJECTS"/>
        </div>  
          <Intro content={data.intro} />
        
        <Title text="BUGUDON LIMITED ASSOCIATED PROJECTS" />
        <CompleteImgDes
          image1={data.projectImg1}
          topic1={data.projectTopic1}
          project1={data.projectDescription1}
          image2={data.projectImg2}
          topic2={data.projectTopic2}
          project2={data.projectDescription2}
          image3={data.projectImg3}
          topic3={data.projectTopic3}
          project3={data.projectDescription3}
        />
        
        
      </main>   



    )
}
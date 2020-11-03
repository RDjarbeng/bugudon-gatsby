import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCards from './ProjectCards';
// import { graphql, useStaticQuery } from 'gatsby'



export default function ProjectSection() {
  // const data = useStaticQuery(graphql`
  //     query{
  //   markdownRemark(fileAbsolutePath: {regex: "/project1.md/i"}) {
  //     html
  //   }
  // }
  // `)
  
    return(
        <section id="projects">
          <div className="container project-con">  
            <SectionTitle 
                title="PROJECTS" 
                subtitle="Bugudon Limited has significant interest in the project below and is working to bring them to the exploitation stage."
            />
            <ProjectCards />
          </div>
        </section>
    );
}
import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCards from './ProjectCards';
import { graphql, useStaticQuery } from 'gatsby'



export default function ProjectSection() {
  const data = useStaticQuery(graphql`
      query{
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/HomeProjects/i"}}, sort: {fields: frontmatter___title}) {
    edges {
      node {
         frontmatter {
          title
          readMoreText
        }
        html
      }
    }
  }
  }
  `)
  const projects = data.allMarkdownRemark.edges;
    return(
        <section id="projects">
          <div className="container project-con">  
            <SectionTitle 
                title="PROJECTS" 
                subtitle="Bugudon Limited has significant interest in the project below and is working to bring them to the exploitation stage."
            />
            <ProjectCards content ={projects} />
          </div>
        </section>
    );
}
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import Project from './Project';


const projects = [
    {
        id:1,
        title:"LOCAL",
        description:"LOCAL is a small business directory app allowing users to find and support small businesses near them",
        github_link:"https://github.com/olvbrntly/LOCAL"
    },
    {
        id:2,
        title:"Paint",
        description:"Etch- a -sketch app designed to resemble microsoft Paint",
        github_link:"https://github.com/olvbrntly/LOCAL"
    }
]

function ProjectsCarousel() {

 
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };


  return (
    <>
    <h2>Projects</h2>
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="carousel" >
      {
        projects.map(project =>(
          <Carousel.Item key={project.id}>
            <Project 
                  title={project.title}
                  description={project.description}
                  github_link={project.github_link}
                  />
          </Carousel.Item>
        ))
      }
  </Carousel>
  </>
  );
}

export default ProjectsCarousel;
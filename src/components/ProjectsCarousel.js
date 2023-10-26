import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import Project from './Project';
import LOCAL from '../images/LOCAL.png'
import PONGO from '../images/PONGO.png'
import PAINT from '../images/PAINT.png'
import LIBRARY from '../images/LIBRARY.png'
import RESUME from '../images/RESUME.png'


const projects = [
    {
        id:1,
        title:"LOCAL",
        description:"LOCAL is a small business directory app allowing users to find and support small businesses near them",
        img_url:LOCAL,
        github_link:"https://github.com/olvbrntly/LOCAL"
    },
    {
        id:2,
        title:"Resume Generator",
        description:"Resume Builder App that updates in real time as user inputs their information",
        img_url:RESUME,
        github_link:"https://github.com/olvbrntly/resume-generator"
    },
    {
        id:3,
        title:"Pongo & Perdita",
        description:"A fictional pet shop inspired by 101 Dalmatians. Built with React.",
        img_url:PONGO,
        github_link:"https://github.com/olvbrntly/shopping-cart"
    },
    {
        id:4,
        title:"Little Library",
        description:"A simple library app built with vanilla JavaScript",
        img_url:LIBRARY,
        github_link:"https://github.com/olvbrntly/Library"
    },
    {
        id:5,
        title:"Paint",
        description:"Vanilla JavaScript Etch-a-Sketch app. Design inspired by Microsofts' Paint",
        img_url:PAINT,
        github_link:"https://github.com/olvbrntly/PAINT"
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
                  img_url={project.img_url}
                  />
          </Carousel.Item>
        ))
      }
  </Carousel>
  </>
  );
}

export default ProjectsCarousel;
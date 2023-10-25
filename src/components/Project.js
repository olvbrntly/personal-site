import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../index.css';

function Project ({title, description, github_link, img_url}) {
  return (
    <Card style={{ width: '700px', height:'300px', margin:'auto'}} className='projectCard'>
      <Card.Img variant="top" src={img_url} style={{height:'300px'}}/>
      <Card.Body className='project-description'>
        <Card.Title className='projectCard-title'><i>{title} </i></Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <Button variant="primary" className='project-button'><a href={github_link} target="_blank" rel="noreferrer noopener" > View on Github: <FontAwesomeIcon icon={faGithub}/></a></Button>
      </Card.Body>
    
    </Card>
  );
}

export default Project ;
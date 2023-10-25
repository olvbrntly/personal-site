import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../index.css';

function Project ({title, description, github_link, id}) {
  return (
    <Card style={{ width: '700px', height:'350px', margin:'auto'}} className='projectCard'>
      <Card.Img variant="top" src="holder.js/100px180" style={{border:'1px solid red'}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <Button variant="primary"><a href={github_link} target="_blank" rel="noreferrer noopener" ><FontAwesomeIcon icon={faGithub}/></a></Button>
      </Card.Body>
    
    </Card>
  );
}

export default Project ;
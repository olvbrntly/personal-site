import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project ({title, description, github_link, id}) {
  return (
    <Card style={{ width: '300px', height:'350px', margin:'auto'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
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
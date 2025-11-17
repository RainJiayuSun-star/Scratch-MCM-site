import Header from '../components/Header';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Gallery.css';

// Sample Scratch projects - replace with actual project IDs/URLs
const scratchProjects = [
  {
    id: 1,
    title: 'My First Project',
    projectId: '123456789',
    author: 'Student 1',
    thumbnail: 'https://cdn2.scratch.mit.edu/get_image/project/123456789_480x360.png'
  },
  {
    id: 2,
    title: 'Dancing Cat',
    projectId: '987654321',
    author: 'Student 2',
    thumbnail: 'https://cdn2.scratch.mit.edu/get_image/project/987654321_480x360.png'
  },
  {
    id: 3,
    title: 'Interactive Story',
    projectId: '456789123',
    author: 'Student 3',
    thumbnail: 'https://cdn2.scratch.mit.edu/get_image/project/456789123_480x360.png'
  },
];

function Gallery() {
  return (
    <div className="gallery-page">
      <Header />
      <Container className="gallery-content py-5">
        <Row>
          <Col>
            <h1 className="text-center mb-3">Student Projects Gallery</h1>
            <p className="text-center text-muted gallery-intro mb-5">
              Check out amazing projects created by our Scratch Club members!
            </p>
          </Col>
        </Row>
        {scratchProjects.length > 0 ? (
          <Row className="g-4">
            {scratchProjects.map((project) => (
              <Col key={project.id} xs={12} md={6} lg={4}>
                <Card className="h-100 project-card shadow-sm">
                  <div className="project-embed">
                    <iframe
                      src={`https://scratch.mit.edu/projects/${project.projectId}/embed`}
                      allowTransparency="true"
                      width="485"
                      height="402"
                      frameBorder="0"
                      scrolling="no"
                      allowFullScreen
                      title={project.title}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="text-muted project-author mb-3">
                      by {project.author}
                    </Card.Text>
                    <a
                      href={`https://scratch.mit.edu/projects/${project.projectId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View on Scratch →
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Row>
            <Col>
              <div className="no-projects text-center">
                <p>No projects to display yet. Check back soon!</p>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default Gallery;


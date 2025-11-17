import Header from '../components/Header';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css';

// Helper function to convert Google Slides URL to preview URL
const getGoogleSlidesPreviewUrl = (url) => {
  // Extract presentation ID from URL
  const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
  if (match && match[1]) {
    return `https://docs.google.com/presentation/d/${match[1]}/preview`;
  }
  // If extraction fails, try to replace /edit with /preview
  return url.replace('/edit?usp=sharing', '/preview').replace('/edit', '/preview');
};

// Sample data - in a real app, this would come from an API or database
const clubSessions = [
  {
    id: 1,
    date: 'Week 1: 2025-09-21',
    topic: 'Introduction to Scratch',
    description: 'Getting started with Scratch programming environment. We will learn what is computer science, how it impact the world, how Scratch is related to computer science, and how to create a simple Scratch project.',
    resources: [
      {
        name: 'Getting Started Slides',
        url: 'https://docs.google.com/presentation/d/1oHz5tkbkZyBfqYIZQjakW_no8psJBRfXFVN-DV9i_pM/edit?usp=sharing',
        type: 'google-slides',
        embedUrl: 'https://docs.google.com/presentation/d/1oHz5tkbkZyBfqYIZQjakW_no8psJBRfXFVN-DV9i_pM/preview'
      }
    ]
  },
  {
    id: 2,
    date: 'Week 2: 2025-10-05',
    topic: 'Algorithm and Loops',
    description: 'Learn how to make sprites move and interact. We will learn about algorithm and loops, and how to use them to create a simple Scratch project.',
    resources: [
      {
        name: 'Algorithm and Loops Slides',
        url: 'https://docs.google.com/presentation/d/1kCadQ0shTw-zwyhHFJYXP065PF7Yr10kFIxkGYguyPo/edit?usp=sharing',
        type: 'google-slides',
        embedUrl: 'https://docs.google.com/presentation/d/1kCadQ0shTw-zwyhHFJYXP065PF7Yr10kFIxkGYguyPo/preview'
      }
    ]
  },
  {
    id: 3,
    date: 'Week 3: 2025-10-12',
    topic: 'Variables and Conditionals',
    description: 'Learn what is variable and conditional, and how to use them to create a simple Scratch project.',
    resources: [
      {
        name: 'Variables and Conditionals Slides',
        url: 'https://docs.google.com/presentation/d/1Y6lD0JBHxZuvSfLJoFjC0mvO0s9rIFy8pgydzfcHiBw/edit?usp=sharing',
        type: 'google-slides'
      }
    ]
  },
  {
    id: 4,
    date: 'Week 4: 2025-10-19',
    topic: 'Debug It!',
    description: "We learn about the importance of debugging, several debugging techniques, and practice debugging a simple Scratch project with peers.",
    resources: [
      {
        name: 'Debug It! Slides',
        url: 'https://docs.google.com/presentation/d/18zv1nOpKjyE8-iGP9Qprpg0pGxMIOkIksJk4OloEUaE/edit?usp=sharing',
        type: 'google-slides',
      }
    ]
  },
  {
    id: 5,
    date: 'Week 5: 2025-10-26',
    topic: 'Game Projects',
    description: "This club meeting reviews all the concepts we covered in previous weeks. We demonstrate some example projects, and start to work on our own game projects.",
    resources: [
      {
        name: 'Game Projects Slides',
        url: 'https://docs.google.com/presentation/d/1fui1LHJqvAr3kWIoa5bjhXGndg7F04F21P2xm1TV4jI/edit?usp=sharing',
        type: 'google-slides'
      }
    ]
  },
  {
    id: 6,
    date: 'Week 6: 2025-11-02',
    topic: 'Game Projects Continued',
    description: "We continue to work on our game projects. We will review the concepts of game projects, and start to work on our own game projects.",
    resources: [
      {
        name: "Game Projects Continued Slides",
        url: 'https://docs.google.com/presentation/d/1g1vdbAYnSdhRNSOBLe6A5cGBzI9u9f80nSQoZhqfp1w/edit?usp=sharing',
        type: 'google-slides'
      }
    ]
  },
  {
    id: 7,
    date: 'Week 7: 2025-11-09',
    topic: 'Extensions and Individual Projects',
    description: "We learn about where extensions are located and how are they used. We will have some time planned to explore different extensions. For the second half of the club meeting, we will brainstorm ideas for our individual projects, and start to work on it.",
    resources: [
      {
        name: "Extensions and Individual Projects Slides",
        url: 'https://docs.google.com/presentation/d/1wtZHY2eou6kdyvBUVZHbrx4hRcQKG5cwss1ULnX-rEA/edit?usp=sharing',
        type: 'google-slides'
      }
    ]
  },
  {
    id: 8,
    date: 'Week 8: 2025-11-16',
    topic: 'Indenpendnent Projects Continue',
    description: "Continue to work on our individual projects.",
    resources: [
      {
        name: "Independent Projects Continue Slides",
        url: 'https://docs.google.com/presentation/d/1LwanJA4VWsi_5D1JCbXe9l9NymICLZkVUMkH9BQRNSQ/edit?usp=sharing',
        type: 'google-slides'
      }
    ]
  },
  {
    id: 9,
    date: 'Week 9: 2025-11-23',
    topic: 'Project Presentations - Next and Last Club Meeting',
    description: "We plan to have kids present their individual projects to the club. This is the last club meeting. We aim to have kids present their current progress, show what they think of,a demonstration of how their project works, and provide some feedback.",
    resources: [
      {
        name: "Project Presentations Slides",
      }
    ]
  }
];

function Home() {
  return (
    <div className="home-page">
      <Header />
      <Container className="home-content py-5">
        <Row>
          <Col>
            <h1 className="text-center mb-3">Welcome to MCM Scratch Club!</h1>
            <p className="text-center text-muted home-intro mb-5">
              Navigate through our club sessions and resources below.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {clubSessions.map((session) => (
            <Col key={session.id} xs={12} md={6} lg={4}>
              <Card className="h-100 session-card shadow-sm">
                <Card.Header className="custom-card-header">
                  <div className="card-date text-muted small mb-2">{session.date}</div>
                  <Card.Title className="card-topic mb-0">{session.topic}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>{session.description}</Card.Text>
                  {session.resources && session.resources.length > 0 && (
                    <div className="card-resources mt-3">
                      <strong>Resources:</strong>
                      {session.resources.map((resource, index) => {
                        // Auto-generate embedUrl if not provided
                        const embedUrl = resource.embedUrl || (resource.type === 'google-slides' ? getGoogleSlidesPreviewUrl(resource.url) : null);
                        
                        return (
                        <div key={index} className="mt-3">
                          {resource.type === 'google-slides' && embedUrl ? (
                            <div className="google-slides-preview mb-3">
                              <iframe
                                src={embedUrl}
                                width="100%"
                                height="300"
                                frameBorder="0"
                                allowFullScreen
                                title={resource.name}
                                className="google-slides-iframe"
                              />
                              <a 
                                href={resource.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="resource-link d-block mt-2 text-center"
                              >
                                Open {resource.name} in new tab →
                              </a>
                            </div>
                          ) : (
                            <ul className="mt-2 mb-0">
                              <li>
                                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                                  {resource.name}
                                </a>
                              </li>
                            </ul>
                          )}
                        </div>
                        );
                      })}
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;


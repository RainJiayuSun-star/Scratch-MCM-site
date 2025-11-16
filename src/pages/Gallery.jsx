import Header from '../components/Header';
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
      <main className="gallery-content">
        <h1>Student Projects Gallery</h1>
        <p className="gallery-intro">
          Check out amazing projects created by our Scratch Club members!
        </p>
        <div className="projects-container">
          {scratchProjects.map((project) => (
            <div key={project.id} className="project-card">
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
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-author">by {project.author}</p>
                <a
                  href={`https://scratch.mit.edu/projects/${project.projectId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on Scratch →
                </a>
              </div>
            </div>
          ))}
        </div>
        {scratchProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects to display yet. Check back soon!</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Gallery;


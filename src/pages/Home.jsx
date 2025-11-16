import Header from '../components/Header';
import './Home.css';

// Sample data - in a real app, this would come from an API or database
const clubSessions = [
  {
    id: 1,
    date: '2024-09-01',
    topic: 'Introduction to Scratch',
    description: 'Getting started with Scratch programming environment',
    resources: []
  },
  {
    id: 2,
    date: '2024-09-08',
    topic: 'Moving Sprites',
    description: 'Learn how to make sprites move and interact',
    resources: []
  },
  {
    id: 3,
    date: '2024-09-15',
    topic: 'Loops and Repetition',
    description: 'Using repeat blocks to create patterns',
    resources: []
  },
];

function Home() {
  return (
    <div className="home-page">
      <Header />
      <main className="home-content">
        <h1>Welcome to MCM Scratch Club!</h1>
        <p className="home-intro">
          Navigate through our club sessions and resources below.
        </p>
        <div className="cards-container">
          {clubSessions.map((session) => (
            <div key={session.id} className="session-card">
              <div className="card-header">
                <div className="card-date">{session.date}</div>
                <h2 className="card-topic">{session.topic}</h2>
              </div>
              <div className="card-body">
                <p>{session.description}</p>
                {session.resources && session.resources.length > 0 && (
                  <div className="card-resources">
                    <strong>Resources:</strong>
                    <ul>
                      {session.resources.map((resource, index) => (
                        <li key={index}>
                          <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            {resource.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;


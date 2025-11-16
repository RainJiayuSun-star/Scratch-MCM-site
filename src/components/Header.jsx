import { Link } from 'react-router-dom';
import scratchCatImage from '../assets/Scratchcat-hquality.png';
import './Header.css';

function Header() {
  return (
    <header className="header-ribbon">
      <div className="header-content">
        <div className="header-left">
          <a 
            href="https://scratch.mit.edu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="scratch-cat-link"
          >
            <img
              src={scratchCatImage}
              alt="Scratch Cat"
              className="scratch-cat"
            />
          </a>
          <Link to="/" className="site-title">
            MCM - Scratch Club
          </Link>
        </div>
        <nav className="header-nav">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/gallery" className="nav-button">Gallery</Link>
          <Link to="/about" className="nav-button">About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;


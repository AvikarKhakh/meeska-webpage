import './About.css';
import { Link } from 'react-router-dom';
import meeskaLogo from './assets/meeska-logo.png';

function About() {
  return (
    <div className="about-page">

      {/* Top Navigation for About Page */}
      <header className="about-nav">
        <Link to="/">
          <img 
            src={meeskaLogo} 
            alt="Meeska Logo" 
            className="about-logo"
          />
        </Link>
      </header>

      <h1 className="about-title">The Story of Meeska</h1>

      <p className="about-description">
        Meeska was created with one simple goal — to make a dairy snack that is
        wholesome, clean, and ridiculously tasty. Our farmer’s cheese blends real
        ingredients with bold flavors to give you something that feels nostalgic,
        comforting, and genuinely good for you.
      </p>

      <h2 className="about-subtitle">Our Flavors</h2>

      <div className="about-flavor-grid">

        <div className="about-flavor-card">
          <div className="about-flavor-img placeholder-img">Image Here</div>
          <h3>Sweet Strawberry</h3>
        </div>

        <div className="about-flavor-card">
          <div className="about-flavor-img placeholder-img">Image Here</div>
          <h3>Wild Blueberry</h3>
        </div>

        <div className="about-flavor-card">
          <div className="about-flavor-img placeholder-img">Image Here</div>
          <h3>Chocolate</h3>
        </div>

        <div className="about-flavor-card">
          <div className="about-flavor-img placeholder-img">Image Here</div>
          <h3>Original</h3>
        </div>

      </div>
    </div>
  );
}

export default About;

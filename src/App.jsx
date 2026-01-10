import { useState, useEffect } from 'react';
import './App.css';
import meeskaLogo from './assets/meeska-logo.png';
import { Routes, Route, Link } from 'react-router-dom';
import About from './About.jsx';

function HomePage() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [email, setEmail] = useState('');

  // Show popup only on first visit (per browser)
  useEffect(() => {
    const hasSeen = localStorage.getItem('meeska_signup_seen');
    if (!hasSeen) {
      setShowSignupModal(true);
    }
  }, []);

  const handleCloseModal = () => {
    setShowSignupModal(false);
    localStorage.setItem('meeska_signup_seen', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to real backend / email service
    console.log('User email:', email);

    localStorage.setItem('meeska_signup_seen', 'true');
    setShowSignupModal(false);
    setEmail('');
  };

  return (
    <div className="page">
      {/* Nav */}
      <header className="hero-nav">
        <div className="hero-nav-left">
          <img src={meeskaLogo} alt="Meeska logo" className="hero-logo" />
        </div>

        <nav className="hero-nav-right">
          <button className="hero-cta">Get Meeska</button>
          <a href="#events">Events</a>
          <Link to="/about">About Us</Link>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero-main">
          <div className="hero-heading">
            <span className="hero-word-meeska">MEESKA</span>

            <div className="hero-sub">
              The dairy snack you didn’t know you were missing.
            </div>

            <div className="hero-sub-2">
              High-protein. Simple ingredients. Ridiculously good.
            </div>
          </div>

          <div className="hero-product">
            <div className="hero-product-glow">
              <div className="hero-product-placeholder">
                Product image here
              </div>
            </div>
          </div>
        </section>

        {/* LEARN ABOUT THE CHEESE SECTION */}
        <section id="learn" className="learn-section">
          <div className="learn-icon">
            <div className="learn-bowl" />
          </div>

          <h2 className="learn-heading">
            <span className="learn-heading-top">LEARN ABOUT</span>
            <span className="learn-heading-bottom">THE CHEESE.</span>
          </h2>

          <div className="learn-cheese-placeholder">
            Cheese image & arrows will go here.
          </div>
        </section>

        {/* US VS. THEM SECTION */}
        <section className="comparison-section">
          <h2 className="comparison-title">US VS. THEM</h2>

          <div className="comparison-table">
            {/* Header row */}
            <div className="comparison-row comparison-row-header">
              <div className="comparison-cell comparison-label" />
              <div className="comparison-cell">
                Conventional
                <br />
                Greek Yogurt
              </div>
              <div className="comparison-cell">Protein Bars</div>
              <div className="comparison-cell">
                Typical
                <br />
                Probiotics
              </div>
              <div className="comparison-cell">Meeska</div>
            </div>

            {/* Rows with labels only */}
            <div className="comparison-row">
              <div className="comparison-cell comparison-label">Protein</div>
              <div className="comparison-cell" />
              <div className="comparison-cell" />
              <div className="comparison-cell" />
              <div className="comparison-cell" />
            </div>

            <div className="comparison-row">
              <div className="comparison-cell comparison-label">Probiotic</div>
              <div className="comparison-cell" />
              <div className="comparison-cell" />
              <div className="comparison-cell" />
              <div className="comparison-cell" />
            </div>

            <div className="comparison-row">
              <div className="comparison-cell comparison-label">
                Zero Added Sugar
              </div>
              <div className="comparison-cell" />
              <div className="comparison-cell" />
              <div className="comparison-cell" />
              <div className="comparison-cell" />
            </div>

            <div className="comparison-row">
              <div className="comparison-cell comparison-label">Unprocessed</div>
              <div className="comparison-cell" />
              <div className="comparison-cell" />
              <div className="comparison-cell" />
              <div className="comparison-cell" />
            </div>

            <div className="comparison-row">
              <div className="comparison-cell comparison-label">
                Tastes Amazing!
              </div>
              <div className="comparison-cell" />
              <div className="comparison-cell" />
              <div className="comparison-cell" />
              <div className="comparison-cell" />
            </div>
          </div>
        </section>
        {/* FOOTER SECTION */}
        <section className="footer-section">
          <div className="footer-content">

            <h3 className="footer-title">Get Updates</h3>

            <form className="footer-form">
              <input
                type="email"
                placeholder="Email"
                className="footer-input"
              />
              <button className="footer-submit">→</button>
            </form>

          </div>

          <div className="footer-bottom">
            © 2025, Meeska · Privacy policy
          </div>
        </section>
      </main>

      {/* EMAIL SIGNUP MODAL */}
      {showSignupModal && (
        <div className="signup-overlay">
          <div className="signup-modal">
            <button
              className="signup-close"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              ×
            </button>

            <h2 className="signup-title">Sign up for updates</h2>
            <p className="signup-text">
              Be the first to hear about new Meeska flavors, events, and where to
              find us.
            </p>

            <form onSubmit={handleSubmit} className="signup-form">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="signup-input"
              />
              <button type="submit" className="signup-button">
                Sign me up
              </button>
            </form>

            <button className="signup-skip" onClick={handleCloseModal}>
              No thanks
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;

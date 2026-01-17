import React, { useState } from "react"; // imports React library - needed since we using JSX(HTML-like syntax in TS)
import "./UIChallenge.css";

// UIChallenge is a React component, hence React.Functional Component declaration
const UIChallenge: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSignUpClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      alert(
        `Thank you ${name}! You've successfully signed up for our monthly subscription at $29/month. A confirmation has been sent to ${email}.`,
      );
      setEmail("");
      setName("");
      setShowForm(false);
      setSubmitted(true);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <>
      <main className="price-grid">
        <section className="intro">
          <h1>Join our community</h1>
          <p className="highlight">30-day, hassle-free money back guarantee</p>
          <p className="description">
            Gain acces to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </section>

        <section className="subscription">
          <h2>Monthly Subscription</h2>
          <p className="price">
            {/* to specialize the style for the price */}
            <span className="p1">$29</span>{" "}
            <span className="p2">per month</span>
          </p>
          <p className="note">Full access for less than $1 a day</p>

          <button className="signup" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </section>

        {showForm && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h2>Subscribe to Monthly Plan</h2>
                <button
                  className="close-btn"
                  onClick={handleCancel}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit} className="signup-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <p className="modal-price">
                    <strong>Price:</strong> $29/month
                  </p>
                  <div className="form-buttons">
                    <button type="submit" className="submit-btn">
                      Subscribe
                    </button>
                    <button
                      type="button"
                      className="cancel-btn"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        <section className="why-us">
          <h2>Why Us</h2>
          {/* creates a list of the benefits */}
          <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises Access to our</li>
            <li>GitHub repos Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>
          Bootcamp 2023 by <a href="https://mlab.co.za/">Codetribe</a>.
          Developed by{" "}
          <a href="https://github.com/Ashley-Blu/3.10-my-portfolio">
            Matsekoleng Ashley
          </a>
          .
        </p>
      </footer>
    </>
  );
};

// ecports the UIChallenge component so that it can be imported into App.tsx
export default UIChallenge;

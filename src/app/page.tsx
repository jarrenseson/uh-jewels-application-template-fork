import React from 'react';

const Home = () => (
  <main>
    <div id="background">
      <div className="content-container">
        <div className="text-group">
          <h1 className="main-title">THE KONA COLLECTION</h1>
          <h2 className="subtitle">SERIES 01</h2>
        </div>
        <a
          href="/OurProductsPage"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#fff',
            textDecoration: 'none',
            border: '2px solid white', // White outline
            borderRadius: '0px', // Square corners (90-degree angles)
            backgroundColor: 'transparent', // Transparent background
            textAlign: 'center',
            letterSpacing: '1px', // Slight spacing between letters
            transition: 'background-color 0.3s ease', // Smooth background transition
            marginTop: '20px', // Add some space between the text and the button
          }}
        >
          Shop Jewels
        </a>
      </div>
    </div>
  </main>
);

export default Home;

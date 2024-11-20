/** The Home page. */
const Home = () => (
  <main>
    <div id="background">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center', // Center everything horizontally
          alignItems: 'center', // Center everything vertically
          flexDirection: 'column', // Stack items vertically
          height: '100vh', // Full viewport height
          textAlign: 'center', // Center the text inside the div
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '48px', // Make THE KONA COLLECTION larger
              margin: '0',
              fontWeight: 'bold',
              color: '#fff',
              letterSpacing: '2px', // Slight letter spacing
            }}
          >
            THE KONA COLLECTION
          </h1>
          <h2
            style={{
              fontSize: '32px', // Slightly smaller than h1
              margin: '8px 0 0', // Add some space above SERIES 01
              fontWeight: 'normal',
              color: '#fff',
              letterSpacing: '1px', // Add some letter spacing
            }}
          >
            SERIES 01
          </h2>
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

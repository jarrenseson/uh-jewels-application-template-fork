import { Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 footercolor">
    <Container>
      <Col className="text-center">
        Created by Katelyn Sung, Waltz Axl Tuzon, and Jarren Seson
      </Col>
      <p>2024 UH Jewels</p>
    </Container>
  </footer>
);

export default Footer;

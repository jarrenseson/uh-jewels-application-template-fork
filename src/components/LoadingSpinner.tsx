import { Container, Row, Spinner } from 'react-bootstrap';

const LoadingSpinner = () => (
  // eslint-disable-next-line max-len
  <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', textAlign: 'center' }}>
    <Row>
      <Spinner animation="border" variant="primary" role="status" />
      <p className="ms-3" style={{ fontSize: '1.2rem', color: '#6c757d' }}>Loading, please wait...</p>
    </Row>
  </Container>
);

export default LoadingSpinner;

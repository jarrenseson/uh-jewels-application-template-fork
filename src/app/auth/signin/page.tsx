'use client';

import { signIn } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

/** The sign in page. */
const SignIn = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    const result = await signIn('credentials', {
      callbackUrl: '/',
      email,
      password,
    });

    if (result?.error) {
      console.error('Sign in failed: ', result.error);
    }
  };

  return (
    <main>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <Card className="shadow-sm rounded">
              <Card.Body>
                <h2 className="text-center mb-4">Sign In</h2>
                <Form method="post" onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter your email" required />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Enter your password" required />
                  </Form.Group>
                  <Button type="submit" className="mt-4 w-100" variant="primary">
                    Sign In
                  </Button>
                </Form>
              </Card.Body>
              <Card.Footer className="text-center">
                Don&apos;t have an account?
                {' '}
                <a href="/auth/signup" className="fw-bold text-primary">
                  Sign up
                </a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SignIn;

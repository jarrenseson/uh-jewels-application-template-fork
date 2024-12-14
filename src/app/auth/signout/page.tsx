'use client';

import { signOut } from 'next-auth/react';
import { Button, Col, Row } from 'react-bootstrap';

/** After the user clicks the "SignOut" link in the NavBar, log them out and display this page. */
const SignOut = () => (
  <Col id="signout-page" className="text-center py-5">
    <h2 className="mb-4">Do you want to sign out?</h2>
    <Row className="justify-content-center">
      <Col xs={3}>
        <Button variant="danger" onClick={() => signOut({ callbackUrl: '/', redirect: true })} className="w-100 mb-2">
          Sign Out
        </Button>
      </Col>
      <Col xs={3}>
        <Button variant="secondary" href="/" className="w-100 mb-2">
          Cancel
        </Button>
      </Col>
    </Row>
  </Col>
);

export default SignOut;

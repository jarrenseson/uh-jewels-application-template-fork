'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import {
  // Button,
  // Col,
  Container,
  // Form,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  // Row,
} from 'react-bootstrap';
import {
  BoxArrowRight,
  Cart,
  Instagram,
  Lock,
  PersonFill,
  PersonPlusFill,
} from 'react-bootstrap-icons';

const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;
  const pathName = usePathname();

  return (
    <Navbar
      className="footercolor navbar-color navbar-size"
      data-bs-theme="light"
      expand="lg"
    >
      <Container>
        <Navbar.Brand className="custom-center navbar-logo" href="/">
          <Image src="Logo.jpg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start nav-link-size">
            {currentUser && (
              <>
                <a
                  className="navlink-margin-left nav-link-size social-media-link"
                  href="https://www.instagram.com/universityjewels?igsh=MWZzMW4yeTNwaGZ5ZQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
                <Nav.Link
                  id="add-stuff-nav"
                  href="/productspage"
                  active={pathName === '/productspage'}
                >
                  Shop Jewels
                </Nav.Link>
              </>
            )}
            {role === 'ADMIN' && (

              <Nav.Link
                id="admin-stuff-nav"
                href="/admin"
                active={pathName === '/admin'}
              >
                List New Products
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {session ? (
              <>
                <NavDropdown id="login-dropdown" title={currentUser}>
                  <NavDropdown.Item
                    id="login-dropdown-sign-out"
                    href="/api/auth/signout"
                  >
                    <BoxArrowRight />
                    Sign Out
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    id="login-dropdown-change-password"
                    href="/auth/change-password"
                  >
                    <Lock />
                    Change Password
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  className="navlink-margin-left nav-link-size m-0 mx-3 px-0"
                  href="/cart"
                  active={pathName === '/cart'}
                >
                  <Cart />
                </Nav.Link>
              </>
            ) : (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" href="/auth/signin">
                  <PersonFill />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" href="/auth/signup">
                  <PersonPlusFill />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ color: "white" }}>
              React-Project
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/" style={{ color: "white" }}>
                  <i class="fas fa-home"></i> Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Checkout" style={{ color: "white" }}>
                  <i class="fas fa-user"></i> User
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

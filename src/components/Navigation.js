import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';

export default class Navigation extends Component {
  state = {
      bg: "transparent"
    };

    listenScrollEvent = e => {
      if (window.scrollY > 50) {
        this.setState({ bg: "dark" });
      } else {
        this.setState({ bg: "transparent" });
      }
    };

    componentDidMount() {
      window.addEventListener("scroll", this.listenScrollEvent);
    }
    render() {
      return (
        <div>
        <Navbar expand="md" bg={this.state.bg} variant="dark" fixed="top">
          <Navbar.Brand href="#">JEFFREY KWOK</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <li className="nav-item">
          <Link
          href="#about"
          to="about"
          activeClass="active"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >
          ABOUT
          </Link>
          </li>
          <li className="nav-item">
          <Link
          href="#work"
          to="work"
          activeClass="active"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >
          WORK
          </Link>
          </li>
          <li className="nav-item">
          <Link
          href="#contact"
          to="contact"
          activeClass="active"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >
          CONTACT
          </Link>
          </li>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
      )
    }
}

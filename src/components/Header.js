import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';

export default class Header extends Component {

  render() {
    const divStyle = {
      backgroundImage: 'url(./images/header.jpg)',
      backgroundSize: 'cover',
      width: '100%',
      height: '100vh',
      display: 'flex',
    }

    const verticalCenter = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }



    return (
      <div>
        <div style={divStyle}>
          <Container className="text-md-right mobile-overlay" style={verticalCenter}>
            <Row>
              <Col md={{ span: 12, offset: 6}}>
                <h1>Hi, I'm <br className="d-md-none d-xl-none"/> Jeffrey Kwok</h1>
                <p>UI/UX Designer & Web Developer</p>
                <Link href="#about" to="about" spy={true} smooth={true} offset={-70} duration={500}><Button variant="primary">About Me</Button></Link> <Link href="#work" to="work" spy={true} smooth={true} offset={-70} duration={500}><Button variant="outline-light" >My Work</Button></Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <Jumbotron className="justify-content-xs-center footer mt-5" fluid>
          <Container className="text-center">
            <Row>
              <Col>
                <h2>CONTACT ME</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <a href="tel:6262445551" target="_blank" rel="noreferrer" className="no-style"><FontAwesomeIcon icon={faPhone} /></a> &nbsp;
                <a href="mailto:jeffreyckwok@gmail.com" target="_blank" rel="noreferrer" className="no-style"><FontAwesomeIcon icon={faEnvelope} /></a> &nbsp;
                <a href="https://github.com/jeffreyckwok/" target="_blank" rel="noreferrer" className="no-style"><FontAwesomeIcon icon={faGithub} /></a> &nbsp;
                <a href="https://linkedin.com/in/jeffreykwok/" target="_blank" rel="noreferrer" className="no-style"><FontAwesomeIcon icon={faLinkedin} /></a>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>© 2020 Jeffrey Kwok</p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

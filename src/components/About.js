import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <div id="about">
        <Jumbotron fluid>
          <Container>
              <h2 className="text-center">ABOUT ME</h2>
              <p>I am a UI/UX Designer and Web Developer based in Los Angeles, CA. As a business focused developer, my specialty is in marketing webpages and eCommerce. I have over 3 years of experience working in the marketing teams of large companies like Realtor.com and DealerSocket and working individually with freelance clients.</p>
              <p>My goal is to create web experiences that are user friendly and optimize business results.</p>
              <p>Currently, I am working with freelance clients to create and manage their eCommerce or professional website, but I am also open to a full-time position. If you would like to work with me, please contact me!</p>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

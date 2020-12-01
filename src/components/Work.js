import React, { Component } from 'react';
import { Container, Row, Col, TabContainer, Nav, Tab } from 'react-bootstrap';
import PortfolioLink from './PortfolioLink';
import PortfolioGallery from './PortfolioGallery';
import SimpleReactLightbox from 'simple-react-lightbox';
import portfolio from './../data/portfolio';
import projects from './../data/projects';

export default class Work extends Component {
  render() {
    return(
      <div>
        <Container>
          <h2 className="text-center blue" id='work'>MY WORK</h2>
          <TabContainer defaultActiveKey="all">
            <Row>
              <Col>
                <Nav>
                  <Nav.Link eventKey="all">ALL</Nav.Link> <Nav.Link eventKey="ecommerce">ECOMMERCE</Nav.Link> <Nav.Link eventKey="wordpress">WORDPRESS</Nav.Link> <Nav.Link eventKey="projects">PROJECTS</Nav.Link>
                </Nav>
              </Col>
            </Row>
            <Row>
              <Col>
                <Tab.Content>
                  <Tab.Pane eventKey="all">
                    <Container>
                      <Row>
                      {portfolio.map((item, index) => {
                        return (
                        <Col xs={12} md={6} key={item.name}>
                          <PortfolioLink name={item.name} img={item.img} technology={item.technology} link={item.link}/>
                        </Col>
                        )
                    })}
                      </Row>
                      <Row>
                      {projects.map((item, index) => {
                        return (
                        <SimpleReactLightbox key={item.name}>
                        <Col xs={12} md={6}>
                          <PortfolioGallery name={item.name} img={item.img} technology={item.technology} gallery={item.gallery}/>
                        </Col>
                        </SimpleReactLightbox>
                        )
                    })}
                      </Row>
                    </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="ecommerce">
                  <Container>
                    <Row>
                      {portfolio.filter(item => item.type === 'ecommerce').map((item, index) => {
                      return (
                      <Col xs={12} md={12} key={item.name}>
                        <PortfolioLink name={item.name} img={item.img} technology={item.technology} link={item.link}/>
                      </Col>
                      )
                  })}
                    </Row>
                  </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="wordpress">
                  <Container>
                    <Row>
                      {portfolio.filter(item => item.type === 'wordpress').map((item, index) => {
                      return (
                      <Col xs={12} md={12} key={item.name}>
                        <PortfolioLink name={item.name} img={item.img} technology={item.technology} link={item.link}/>
                      </Col>
                      )
                  })}
                    </Row>
                  </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="projects">
                  <Container>
                  <Row>
                  {projects.map((item, index) => {
                    return (
                    <SimpleReactLightbox key={item.name}>
                    <Col xs={12} md={6}>
                      <PortfolioGallery name={item.name} img={item.img} technology={item.technology} gallery={item.gallery}/>
                    </Col>
                    </SimpleReactLightbox>
                    )
                })}
                  </Row>
                  </Container>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </TabContainer>
        </Container>
      </div>
    )
  }
}

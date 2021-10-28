import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './Header'
import Searchbox from './Searchbox'
import Sidebar from './Sidebar'
import Grid from './Grid'
import Footer from './Footer'


function Homepage() {
  return (
   
    <div style={{ backgroundColor: "lightgrey" }}>

      <Container fluid>
        <Row> <div className="col-3"> <Sidebar /> </div> <div className="col-9">
          <Row>
          <Col style={{ backgroundColor: "lightyellow" }}> <Header /></Col>
          </Row> <hr />

          <Row>
            <Col style={{ backgroundColor: "skyblue" }}><Searchbox /></Col>
          </Row> <hr />
          <Row>
            <Col style={{ backgroundColor: "white" }}><Grid /> </Col>
          </Row> <hr />
          <Row>
            <Col style={{ backgroundColor: "lightyellow" }}><Footer /> </Col>
           </Row> </div>
          </Row>
     </Container>
    </div>


  )
}

export default Homepage

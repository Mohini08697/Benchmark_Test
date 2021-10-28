

import React from 'react'
import { Form, Row, Col, Dropdown, InputGroup, Navbar, NavbarBrand, Container, Button, CloseButton } from 'react-bootstrap';

function Searchbox() {
  return (
    <div>
       <Navbar style={{backgroundColor:"wheat"}}>
          <Container>
            <h3> Manage Franchisee</h3>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            
            </Navbar.Collapse>
          </Container>
        </Navbar> <hr/>

      <Form>
        <Row style={{ marginTop: '50px' }}>
          <Col>
            <lable> First Name </lable>
            <Form.Control
              placeholder="First name"/>
          </Col>
          <Col>
            <lable> Last Name </lable>
            <Form.Control
              placeholder="Last name" />
          </Col>
          <Col>
            <lable> Franchisee# </lable>
            <Form.Control
              placeholder="Franchisee#"/>
          </Col>
          <Col>
            <lable>Company </lable>
            <Form.Control
              placeholder=" Company"/>
          </Col>

        </Row>
        <Row style={{ marginTop: '40px' }}>
          <Col>
            <lable> Any Email </lable>
            <Form.Control
              placeholder=" Any Email"/>
          </Col>

          <Col>
            <lable> Any phone </lable>
            <Form.Control
              placeholder="Any phone"/>
          </Col>
          <Col>
            <lable> State </lable>
            <Form.Control
              placeholder="State"/>
          </Col>
          <Col>
            <lable> City </lable>
            <Form.Control
              placeholder="City"/>
          </Col>
        </Row>

        <Row style={{ marginTop: '40px' }}>
          <Col>
          <lable> Status</lable>
            <Dropdown as={InputGroup} style={{ width: "200px" }}>

              <Form.Control
                placeholder="Status"/>

              <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Inactive</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col>
            <Button variant="primary">Search</Button> &nbsp;
            <Button variant="secondary">Clear</Button>

          </Col>

        </Row>


      </Form>

    </div>
  )
}

export default Searchbox

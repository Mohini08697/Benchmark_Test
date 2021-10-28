import React from "react"
import {Navbar,NavbarBrand,Container,Button,CloseButton}from "react-bootstrap"


export default function Header(){

    return(
        <>
            <div>
            <Navbar>
  <Container>
  <CloseButton varient="primary"/>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
       <h4>Help</h4>
      </Navbar.Text>
      &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
      <Navbar.Text>
       <h4>Create Proposal</h4>
      </Navbar.Text>
        &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
      <Navbar.Text>
       <h4>Proposals</h4>
      </Navbar.Text>
      &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
      <Navbar.Text>
       <h4>Templates</h4>
      </Navbar.Text>
      &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
      <Button variant="outline-dark">Logout</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>


                </div>
        </>
    )
}
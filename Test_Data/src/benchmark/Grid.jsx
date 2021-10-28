import React from "react"
import { Table, Button ,Navbar, NavbarBrand, Container,  CloseButton} from "react-bootstrap"

export default function Grid() {

  return (
    <>
      <Navbar style={{backgroundColor:"wheat"}}>
          <Container>
            <h3> Franchisee</h3>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Button>Export </Button> &nbsp; <Button>Add new Franchisee</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar> <hr/>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>#</th>
            <th>Name</th>
            <th>Company</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>State</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>123</td>
            <td>Otto</td>
            <td>ABC</td>
            <td>@abc</td>
            <td>35445</td>
            <td>XYZ</td>
            <td>present</td>
            <td><Button>Edit </Button> <Button>Delete</Button></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>123</td>
            <td>Otto</td>
            <td>ABC</td>
            <td>@abc</td>
            <td>35445</td>
            <td>XYZ</td>
            <td>present</td>
            <td> </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>123</td>
            <td>Otto</td>
            <td>ABC</td>
            <td>@abc</td>
            <td>35445</td>
            <td>XYZ</td>
            <td>present</td>
            <td> </td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>123</td>
            <td>Otto</td>
            <td>ABC</td>
            <td>@abc</td>
            <td>35445</td>
            <td>XYZ</td>
            <td>present</td>
            <td> </td>
          </tr>


        </tbody>
      </Table>
    </>
  )
}
import React from "react"
import { Navbar, NavbarBrand, Container, Button } from "react-bootstrap"

export default function Footer() {
  return (
    <>
      <div >
        <Navbar>
          <Container>
            <label>Show</label> &nbsp;
            <input type="number" style={{ width: "70px" }} />&nbsp; &nbsp;
            <h5>(1-of 210)</h5>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <nav aria-label="Page navigation example" >
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div style={{ margin: "auto", width: "450px" }}><h6>Copyright 2021-22 - U.S. Lawns. All Rights Reserved</h6></div>


      </div>
    </>
  )
}
import React from "react";
import {Nav} from "react-bootstrap";
import { BrowserRouter as Router} from "react-router-dom";
import './NavBar.css'
  
const NavBar = () => (
<Router>
    <Nav className="col-md-12 bg-light flex-column sidebar"
            activeKey="/home">
        <Nav className = "sidebar-heading">Dis-cretion</Nav>
        <Nav.Item>
            <Nav.Link href="/">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/change">Latest Changes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/request">Make Requests </Nav.Link>
        </Nav.Item>

    </Nav>
  </Router>
);
export default NavBar;
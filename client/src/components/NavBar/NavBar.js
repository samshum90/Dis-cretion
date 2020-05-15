import React from "react";
import {Nav, Container, Col, Row} from "react-bootstrap";
import DashboardContainer from '../../containers/DashboardContainer.js';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './NavBar.css'

const routes = [
    {
      path: "/",
      exact: true,
      main: () => <DashboardContainer />
    },
    {
      path: "/change",
      main: () => <h2>Latest Changes</h2>
    },
    {
      path: "/request",
      main: () => <h2>Make a Request</h2>
    }
  ];
  
const NavBar = () => (
    <Container fluid>
        <Router>
            <Row>
                <Col xs={2} id="sidebar-wrapper"> 
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
                </Col> 
                <Col xs={10} id="mainContainer">
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.main />}
                            />
                        ))}
                    </Switch>
                </Col>
            </Row>
        </Router>
</Container>
);
export default NavBar;
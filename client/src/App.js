import React from 'react';
import DashboardContainer from './containers/DashboardContainer';
import NavBar from './components/NavBar/NavBar'
import {Container, Row, Col } from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
          <Container fluid className="App">
             <Row>
                <Col xs={3} id="sidebar-wrapper">   
                    <NavBar />
                </Col> 
                <Col xs={9}>
                  <DashboardContainer />
                </Col>
            </Row>
        </Container>  
    </div>
  );
}

export default App;

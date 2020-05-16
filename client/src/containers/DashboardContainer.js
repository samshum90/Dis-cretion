import React from 'react';
import Bot from '../components/Bot/Bot.js';
import {Container, Row, Col } from "react-bootstrap";
import RequestItem from "../components/Request/RequestItem.js"
import Request from '../helpers/requests';
import './dashboardContainer.css';

class DashboardContainer extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        requests: [],
        selectedRequest: null,
      };
    }

    componentDidMount() {
        const url = 'http://localhost:3000/api/requests';
        const request = new Request();
        request.get(url)
        .then((data) => {
          this.setState({requests: data})
        });
      }

    render(){
        return(
        <Container fluid id="dashboardContainer">
          <Row>
            <h1>Dashboard</h1>
          </Row>
            <Row>
                <Col sm={9} className="requestContainer" id="requestContainer">
                  {this.state.requests.map(request => (
                    <RequestItem key={request._id} {...request} />
                    ))}
                </Col>
                <Col sm={3} id= "botContainer">
                    <Bot />
                </Col>
            </Row>
        </Container>
        )
    };
}

export default DashboardContainer;
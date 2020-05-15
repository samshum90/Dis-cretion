import React from 'react';
import Banner from '../components/Banner/Banner.js'
import BotContainer from './BotContainer.js'
import {Container, Row, Col } from "react-bootstrap";
import RequestItem from "../components/Request/RequestItem.js"
import Request from '../helpers/requests';

class DashboardContainer extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        requests: []
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
        <Container fluid>
            <Row>
                <Banner />
            </Row>
            <Row>
                <Col xs={6}>
                  {this.state.requests.map(request => (
                    <RequestItem request={request.id} {...request} />
                    ))}
                </Col>
                <Col xs={6}>
                    <BotContainer />
                </Col>
            </Row>
        </Container>
        )
    };
}

export default DashboardContainer;
import React from 'react';
import {Container, Row} from "react-bootstrap";
import Request from '../helpers/requests';
import RequestDetail from '../components/Request/RequestDetail';
import RequestList from '../components/Request/RequestList';
import './dashboardContainer.css';

class DashboardContainer extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        requests: [],
        currentRequest: null
      };
      this.handleRequestSelected = this.handleRequestSelected.bind(this);
    }

    componentDidMount() {
        const url = 'http://localhost:3000/api/requests';
        const request = new Request();
        request.get(url)
        .then((data) => {
          this.setState({requests: data})
        });
      }

      handleRequestSelected(index) {
        const selectedRequest = this.state.requests[index];
        this.setState({currentRequest: selectedRequest})
      }

    render(){
        return(
        <Container fluid id="dashboardContainer">
          <Row>
            <h1>Dashboard</h1>
          </Row>
            <Row>
              <RequestList requests={this.state.requests}/>
            </Row>
            <Row>
              <RequestDetail request={this.state.currentRequest}/>
            </Row>
        </Container>
        )
    };
}

export default DashboardContainer;
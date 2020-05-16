import React from 'react';
import { Col } from "react-bootstrap";
import Bot from '../Bot/Bot.js';
import RequestItem from "./RequestItem.js"


function RequestList({requests}){
    const handleClick = function(event) {
        requests.onSelected(event.target.value);
      }
    
    return(
    <>
        <Col sm={9} className="requestContainer" id="requestContainer">
            {this.state.requests.map(request => (
            <RequestItem key={request._id} {...request} onRequestSelected={this.handleRequestSelected}/>
            ))}
        </Col>
        <Col sm={3} id= "botContainer">
        <Bot />
        </Col>
    </>
    )
};

export default RequestList;
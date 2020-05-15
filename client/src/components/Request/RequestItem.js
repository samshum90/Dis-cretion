import React from 'react';
import {Row} from "react-bootstrap";
import "./RequestItem.css"

function RequestItem({id, 
    typeOfRequests,
    summeryOfRequests,
    reasonOfRequest,
    outOfPolicy,
    furtherApproval,
    approval,
    yourRationale}) {
    return (
        <Row className="RequestItem" id="requestItem">
            <div>Type Of Requests: {typeOfRequests}</div>
            <div>Summery Of Requests: {summeryOfRequests}</div>
            <div>Reason Of Request: {reasonOfRequest}</div>
            <div>Out Of Policy: {outOfPolicy}</div>
            <div>Further Approval: {furtherApproval}</div>
            <div>Approval: {approval}</div>
            <div>Your Rationale:{yourRationale}</div>
        </Row>
    );
}
export default RequestItem;
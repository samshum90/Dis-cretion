import React from 'react';

const RequestDetail = (props) => {
  if (!props.Request) return null;
  return (
    <h3>{props.Request.typeOfRequests}</h3>
  );
}

export default RequestDetail;
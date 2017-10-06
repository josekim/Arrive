// @flow

import React from 'react';

const TabelDetails = (props: {
  view: boolean,
  ContactName: string,
  ContactEmail: string,
  ContactPhone: string,
  Capabilities: Array<string>,
  PricePerLoad: string
}) => {
  if (props.view) {
    return (
      <p>
        {' '}
        <span className="details">Name: {props.ContactName}</span>
        <span className="details">Email: {props.ContactEmail}</span>
        <span className="details">Phone: {props.ContactPhone}</span>
        <span className="details">Capabilities {props.Capabilities.join(', ')}</span>
        <span className="details">Price: {props.PricePerLoad}</span>
      </p>
    );
  }
  return <span />;
};

export default TabelDetails;

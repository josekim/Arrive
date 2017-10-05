// @flow
import React from 'react';

const TableLine = (props: { Id: number, Name: string, Location: Array<any> }) => (
  <li>
    <h1>
      {props.Id}
      {props.Name}
      {JSON.stringify(props.Location)}
    </h1>
  </li>
);

export default TableLine;

// @flow

import React from 'react';
import TableLine from './TableLine';

const Table = (props: { data: Array<any> }) => {
  if (props.data.length === 0) {
    return <h2> Please Search </h2>;
  } else if (props.data === 'No carriers found with provided city') {
    return <h2> No carriers found with provided city</h2>;
  }
  return <ul> {props.data.map(element => <TableLine key={element.Id} {...element} />)}</ul>;
};

export default Table;

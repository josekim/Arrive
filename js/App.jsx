// @flow

import React from 'react';
import Header from './Header';
import TableContainer from './TableContainer';

const title = 'Arrive Interview';
const subtext = "Joseph Kim's Solution ";

const App = () => (
  <div>
    <Header title={title} subtext={subtext} />
    <TableContainer />
  </div>
);

export default App;

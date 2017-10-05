import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import SearchBar from './SearchBar';
import TableLine from './TableLine';

class TableContainer extends Component<State> {
  state = { data: [], prevTerm: '' };

  handleForceUpdate = () => {
    this.setState({ prevTerm: '' });
  };
  // eslint-disable-next-line
  callAPI = (term: string) => {
    const self = this;
    const prevTerm = this.state.prevTerm;
    if ((term.length < prevTerm.length && prevTerm.includes(term)) || term === '') {
      self.setState({ prevTerm: term });
    } else {
      console.log('Call API');
      axios
        .get(`http://arrive-interview-api.azurewebsites.net/api/carriers/${term}`)
        .then(response => {
          self.setState({ data: response.data, prevTerm: term });
        })
        .catch(error => {
          console.log(error); // eslint-disable-line
        });
    }
  };
  sanitizeStateData = () => {
    if (typeof this.state.data === 'string') {
      return [{ Id: this.state.data, error: this.state.data }];
    }
    return this.state.data;
  };

  render() {
    const delayAPICall = _.debounce(this.callAPI, 500);
    const data = this.sanitizeStateData();
    return (
      <div>
        <SearchBar onForceUpdate={this.handleForceUpdate} onSearchTermChange={delayAPICall} />
        <ul>{data.map(element => <TableLine key={element.Id} {...element} />)}</ul>
      </div>
    );
  }
}

export default TableContainer;

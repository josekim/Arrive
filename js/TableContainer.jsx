import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import SearchBar from './SearchBar';
import Table from './Table';

class TableContainer extends Component<State> {
  state = { data: [], prevTerm: '' };

  handleForceUpdate = () => {
    console.log('Force Update Issued - API call should Follow'); // eslint-disable-line
    this.setState({ prevTerm: '' });
  };
  // eslint-disable-next-line
  callAPI = (term: string) => {
    const self = this;
    const prevTerm = this.state.prevTerm;

    // If deleting or new term is empty, don't make API call
    if ((term.length < prevTerm.length && prevTerm.includes(term)) || term === '') {
      self.setState({ prevTerm: term });
    } else {
      console.log('Call API'); // eslint-disable-line
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

  render() {
    const delayAPICall = _.debounce(this.callAPI, 500);
    return (
      <div>
        <SearchBar onForceUpdate={this.handleForceUpdate} onSearchTermChange={delayAPICall} />
        <Table data={this.state.data} />
      </div>
    );
  }
}

export default TableContainer;

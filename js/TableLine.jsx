// @flow

import React, { Component } from 'react';
import axios from 'axios';
import TabelDetails from './TabelDetails';

type Props = {
  Id: Object,
  Name: string,
  Location: Array<any>
};
type State = {
  details: Object,
  view: boolean,
  madeAPICall: boolean
};

class TableLine extends Component<Props, State> {
  state = { details: {}, view: false, madeAPICall: false };

  handlesDetailView = () => {
    const self = this;
    if (!this.state.madeAPICall) {
      self.setState({ madeAPICall: true });
      console.log('Call API');
      axios
        .get(`http://arrive-interview-api.azurewebsites.net/api/carrierDetails/${this.props.Id}`) // eslint-disable-line
        .then(response => {
          self.setState({ details: response.data, view: true });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      const opposite = !this.state.view;
      this.setState({ view: opposite });
    }
  };
  render() {
    return (
      <li>
        <p>
          <input type="submit" value="details" onClick={this.handlesDetailView} />
          <strong>{`${this.props.Name}   `}</strong>
          {this.props.Locations.map(loc => <span className="row" key={`${this.props.Id}${loc.City}`}>{`${loc.City} ${loc.State}  `}</span>)}
        </p>
        <TabelDetails view={this.state.view} {...this.state.details} />
      </li>
    );
  }
}

export default TableLine;

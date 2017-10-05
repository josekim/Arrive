// @flow

import React from 'react';

type Props = { onSearchTermChange: Function, onForceUpdate: Function };
type State = { searchTerm: string };

class SearchBar extends React.Component<Props, State> {
  state = { searchTerm: '' };
  handleSearchChange = (event: { target: { value: string } }) => {
    this.setState({ searchTerm: event.target.value });
    this.props.onSearchTermChange(event.target.value); // eslint-disable-line
  };
  handleForceSubmit = (event: { preventDefault: Function }) => {
    event.preventDefault();
    this.props.onForceUpdate(); // eslint-disable-line
    this.props.onSearchTermChange(this.state.searchTerm); // eslint-disable-line
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleForceSubmit}>
          <input
            type="text"
            value={this.searchTerm} // eslint-disable-line
            onChange={this.handleSearchChange}
            placeholder="Search for a sender..."
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;

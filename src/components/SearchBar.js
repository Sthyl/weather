import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term : ""
    };
  }

  onSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render () {
    return (
      <div className="search-bar" style={styles.searchBar}>
        <form onSubmit={(e) => this.onSubmit(e)}>
            <input
              value={this.state.term}
              className="form-control"
              onChange={e => this.setState({term: e.target.value})} // make named function for here
              placeholder="Get the current forecast in your city"
            />
        </form>
      </div>
    );
  }
}

const styles = {
  searchBar: {

    textAlign: 'center'
  },
}
export default SearchBar;

import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from './SearchBar';
import ControlledTabs from './ControlledTabs';

class WeatherDisplay extends Component{

constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      city: null
    };
  }

 onSearchSubmit = city => {
    this.setState({
        submitted: true,
        city: city
      });
    }

/*
  Renders the search bar and tabs component. On form submit the submitted flag is set
  and the tabs component is rendered.
*/
  render(){
    const {submitted, city} = this.state;
    return(
      <Container style={styles.displayContainer}>
        <div style={styles.searchContainer}>
          <SearchBar onSubmit={this.onSearchSubmit}/>
        </div>
        <div style={styles.tabContainer}>
          {submitted && <ControlledTabs city={city}/>}
        </div>
      </Container>
    )
  };
}

const styles = {
  displayContainer: {
  marginTop: "25px",
  width: '500px',
  height: '320px',
  borderRadius: '25px',
  boxShadow: '0 20px 40px 0px rgba(0,0,0,0.3)',
  padding: '2rem',
  backgroundColor: '#e5feff'
  },
  searchContainer: {
    paddigTop: '15px',
  },
  tabContainer: {
    marginTop: 20,
    marginBottom: 5
  }
}

export default WeatherDisplay;

import React, { Component } from 'react';
import { Tabs, Tab, ProgressBar } from 'react-bootstrap';
import _ from "lodash";
import axios from 'axios';
import WeatherList from './WeatherList';
import { apis, parseWeatherResponse } from '../api/apis';

class ControlledTabs extends Component{
  constructor(props){
    super(props);
    this.state = {
      weatherConditions: {},
      error: ''
   }
  }

  componentDidMount(){
   this.openTab(Object.keys(apis)[0], this.props.city)
    }

  componentWillReceiveProps(nextProps){
     this.openTab(Object.keys(apis)[0], nextProps.city)
  }

/*
  Activated on tab render or tab click. Fetches data from selected api and parses the response.
  Responsible for toggling of the loading flag.
*/
  openTab(activeTab, city) {
    this.setState({
        weatherConditions: {},
        loading: true,
        error: ''
      })
    const api = apis[activeTab]
    axios.get(api.uri, {params: {...api.params, 'q':city}})
      .then(response => {
        var data = parseWeatherResponse(activeTab, response)
        this.setState({
          weatherConditions: data,
          loading: false,
          error: ''})})
      .catch(error => {
        this.setState({
          weatherConditions: {},
          error: `Error: ${error.response.data.message}`,
          loading: false,
        })
      });
    }

/*
  Maps over available apis and creates tabs to display the respective weather conditions.
  When loading flag is active a loading bar will be shown in place of weather conditions.
*/
  renderTabs(){
    const { error, weatherConditions, loading} = this.state;
    return _.map(Object.keys(apis), api => {
      if(error){
        return (
          <Tab key={api} eventKey={api} title={api}>
           <div>{this.state.error}</div>
          </Tab>
        )
      }else{
      return (
        <Tab key={api} eventKey={api} title={api}>
          {loading
            ? <div style={styles.progressStyle}><ProgressBar animated now={100} /></div>
            : <div style ={styles.weatherSyle}><WeatherList weatherConditions={weatherConditions}/> </div>
          }
        </Tab>
      );
    }
    });

  }

  render(){
    return(
      <Tabs
      onSelect={tab => { this.openTab( tab, this.props.city )}}>
        {this.renderTabs()}
      </Tabs>
    );
  }
}

const styles = {
  progressStyle: {
    marginTop: 5,
  },
  weatherSyle: {
    marginLeft: 20,
    marginTop: 5
  }
};

export default ControlledTabs;

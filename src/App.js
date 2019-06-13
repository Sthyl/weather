import React from 'react';
import WeatherDisplay from "./components/WeatherDisplay"
import Background from "./resources/images/sky.jpg"


class App extends React.Component{

  render(){
    return <div style={styles.bg}><WeatherDisplay /></div>;
  }
}

const styles = {
bg: {
  backgroundImage: `url(${Background})`,
  height: '100%',
  width: '100%',
  position: 'absolute',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
  }
}

export default App;

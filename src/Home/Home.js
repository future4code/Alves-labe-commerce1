import React from 'react';
import Slider from '../Home/Slider/Slider';
import Carrossel from './Carrossel/Carrossel';

class Home extends React.Component {

    render() {
      return (
        <div>
          <Slider />
          <Carrossel />
        </div>
      );
    }
  }
  
  export default Home;
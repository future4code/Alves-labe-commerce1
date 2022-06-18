import React from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Header from './Header/header';
import Slider from './Home/Slider/Slider';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Slider />
      </div>
    );
  }
}

export default App;

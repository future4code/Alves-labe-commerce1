import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: './img/astronauta.jpg',
  },

  {
    src: './img/nebula.jpg',
  },
  {
    src: './img/galaxy-stars.gif',
  }
];

const Slider = () => <UncontrolledCarousel items={items} />;

export default Slider;
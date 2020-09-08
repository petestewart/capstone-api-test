import React from 'react';

import Mapquest from '../components/Mapquest';
import Yelp from '../components/Yelp';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Yelp />
      <Mapquest />
    </div>
  );
}

export default App;

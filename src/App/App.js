import React, { useState, useEffect } from 'react';

import yelpData from '../helpers/data/yelpData';
import './App.css';

const App = () => {
  const [newBiz, setNewBiz] = useState({})

  const getNewRestaurant = () => {
    yelpData.getRestaurantInfo('boltons-spicy-chicken-and-fish-nashville')
    .then((res) => setNewBiz(res.data))
    .catch((err) => console.error(err));
  };

  useEffect(getNewRestaurant, []);

  return (
    <div className="App">
      <div>This is generated from a call to the Yelp API using the business' id (obtained from their Yelp url):</div>
      <h1>{newBiz.name}</h1>
      <img src={newBiz.image_url} alt=""/>
      <div>rating: {newBiz.rating}</div>
    </div>
  );
}

export default App;

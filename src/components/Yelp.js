import React, { useState } from 'react';

import yelpData from '../helpers/data/yelpData';

const Yelp = () => {
  const [newBiz, setNewBiz] = useState({})

  const [storeId, setStoreId] = useState('boltons-spicy-chicken-and-fish-nashville');

  const inputHandler = (e) => {
    setStoreId(e.target.value);
  };

  const getNewRestaurant = () => {
    yelpData.getRestaurantInfo(storeId)
    .then((res) => setNewBiz(res.data))
    .catch((err) => console.error(err));
  };


  return (
    <div className="Yelp">
      <div>This is generated from a call to the Yelp API using the business' id (obtained from their Yelp url):</div>
      <input
        type="text"
        value={storeId}
        style={{ width:"300px" }}
        onChange={inputHandler}
        />
          <br/>

      <button onClick={getNewRestaurant}>Submit</button>
      <h1>name: {newBiz.name}</h1>
      image: <img src={newBiz.image_url} alt=""/>
      <div>rating: {newBiz.rating}</div>
      <hr/>

    </div>
    
  );
}


export default Yelp;

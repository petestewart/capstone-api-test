import React, { useState } from 'react';

import mapquestData from '../helpers/data/mapquestData';

const Mapquest = () => {
  const [city, setCity] = useState({})
  const [address, setAddress] = useState('')

  const [coordinates, setCoordinates] = useState({latitude: 36.284714, longitude: -86.726675});
  const [coordinatesResults, setCoordinatesResults] = useState({latitude: 0, longitude: 0});

  const latInputHandler = (e) => {
    setCoordinates({ ...coordinates, latitude: e.target.value });
  };

  const longInputHandler = (e) => {
    setCoordinates({ ...coordinates, longitude: e.target.value });
  };

  const addressInputHandler = (e) => {
    setAddress(e.target.value);
  };

  const getCity = () => {
    mapquestData.getCity(coordinates)
      .then((res) => setCity({ name: res.data.results[0].locations[0].adminArea5 }))
      .catch((err) => console.error(err));
  };

  const getCoordinates = () => {
    mapquestData.getCoordinates(address)
      .then((res) => setCoordinatesResults({
        latitude: res.data.results[0].locations[0].latLng.lat,
        longitude: res.data.results[0].locations[0].latLng.lng,
       }))
      .catch((err) => console.error(err));
  };

  return (
    <div className="Mapquest">
      <div className="reverse-lookup"> 
        <div>This is generated from a call to the MapQuest API using coordinates:</div>
        <label htmlFor="latitude">latitude</label>
        <input
          type="text"
          id="latitude"
          value={coordinates.latitude}
          style={{ width:"300px" }}
          onChange={latInputHandler}
          />
          <br/>
        <label htmlFor="longitude">longitude</label>
        <input
          type="text"
          id="longitude"
          value={coordinates.longitude}
          style={{ width:"300px" }}
          onChange={longInputHandler}
          />
          <br/>

        <button onClick={getCity}>Submit</button>
        <h1>City: {city.name}</h1>
        <hr/>
      </div>
      <div className="forward-lookup"> 
        <div>This is generated from a call to the MapQuest API using an address:</div>
        <label htmlFor="address">address</label>
        <input
          type="text"
          id="address"
          value={address}
          style={{ width:"300px" }}
          onChange={addressInputHandler}
          />
          <br/>

        <button onClick={getCoordinates}>Submit</button>
        <h1>Coordinates: {coordinatesResults.latitude} , {coordinatesResults.longitude}</h1>
        <hr/>
      </div>
    </div>
    
  );
}

export default Mapquest;

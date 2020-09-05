import axios from 'axios';
import apiKeys from '../apiKeys.json'

const { baseURL, apiKey } = apiKeys.yelpConfig;

const yelpREST = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-type": "application/json",
  },
})

const getRestaurantInfo = (yelpId) => yelpREST(`/businesses/${yelpId}`);



export default { getRestaurantInfo };

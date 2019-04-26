import axios from 'axios'
const API_URL = 'http://localhost:8080/api/countries';

// READ
export function getCountries() {
  const response = axios.get(API_URL);
  console.log('getCountries', response);
  return {
    type: 'GET_COUNTRIES',
    payload: response
  }
}

// CREATE
export function createCountry(data) {
  const response = axios.post(API_URL, data);
  return {
    type: 'GET_COUNTRIES',
    payload: response
  }
}

// DELETE
export function deleteCountry(id) {
  const response = axios.delete(API_URL + '/' + id);
  return {
    type: 'GET_COUNTRIES',
    payload: response
  }
}

// UPDATE
export function updateCountry(id, data) {
  const response = axios.put(API_URL + '/' + id, data)
  return {
    type: 'GET_COUNTRIES',
    payload: response
  }
}

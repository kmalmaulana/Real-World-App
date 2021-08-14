import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

const express = require('express');
const app = express();

// Serve all the files in '/dist' directory
app.use(express.static('dist'));

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

export default {
  getEvents() {
    return apiClient.get('/events');
  },
  getEvent(id) {
    return apiClient.get('/events/' + id);
  }
};

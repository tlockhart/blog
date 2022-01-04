import axios from 'axios';

// creating a reusable axios request object, so we can then use the short hand notation, in the http requests
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});
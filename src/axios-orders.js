import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-1456f.firebaseio.com/'
});

export default instance;
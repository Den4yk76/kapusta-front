import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001/api/users'; //ToDO
axios.defaults.baseURL = 'https://kapusta-back-end.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

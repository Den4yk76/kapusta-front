import axios from 'axios';
// https://kapusta-back-end.herokuapp.com/

axios.defaults.baseURL = 'http://localhost:3001/api/users';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

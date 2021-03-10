import axios from './base';

const getAllData = () => axios.get('/get-data');

const verificate = data => axios.post('/verification', data);

const banUser = data => axios.post('/ban-acc', data);

const banDevice = data => axios.post('/ban-dev', data);

const cancel = data => axios.post('/cancel-verification', data);

export {
  getAllData,
  verificate,
  banDevice,
  banUser,
  cancel
};
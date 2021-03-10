import axios from 'axios';

const instance = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v1/verification-profile"
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response ? error.response.status : 408;
    if (status >= 500) {
      console.error(error.toString());
    }
    if (status === 401) {
      console.log("logout");
    }
    console.error(error.response);
  }
);


export default instance;
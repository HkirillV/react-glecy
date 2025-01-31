import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.DEV ? 'http://localhost:3001' : ''
})

export default axiosClient;
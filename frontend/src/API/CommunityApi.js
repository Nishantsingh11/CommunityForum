import axios from 'axios';
export default axios.create({
  baseURL: 'https://communityforum.onrender.com',
  withCredentials: true,
});

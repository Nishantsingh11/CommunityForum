import axios from 'axios';
export default axios.create({
  baseURL: 'https://communityforum.onrender.com/api/v1',
  withCredentials: true,
});

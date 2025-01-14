import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Ensure you include 'http://' or 'https://'
  timeout: 10000, // Optional timeout setting in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
// const portfolioApi = {

//     bookMarkedLessonList() {
//       return axiosInstance.get('/membership/member/portfolio/clipping/lesson');
//     }
// }
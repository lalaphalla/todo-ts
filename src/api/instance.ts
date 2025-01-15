import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://todo-ts-backend-x7zo.onrender.com/' // Replace with your actual Vercel URL
    : 'http://localhost:3000'; // Local development URL

const axiosInstance = axios.create({
  baseURL, // Ensure you include 'http://' or 'https://'
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

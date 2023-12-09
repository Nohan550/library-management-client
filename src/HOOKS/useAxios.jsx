import axios from "axios";

const instance = axios.create({
  // baseURL:"http://localhost:5500",
  baseURL:"https://library-management-server-six.vercel.app",
  withCredentials: true
});

const useAxios = () => {
  return instance;
};

export default useAxios;

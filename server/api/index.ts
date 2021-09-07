import axios from "axios";

const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
  method: "post",
  
});



export default instance;

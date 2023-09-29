import axios from "axios";

const httpModule = axios.create({
  baseURL: "http://localhost:5238/api/",  
  headers: {
    "Content-type": "application/json"
  }
});

export default httpModule;
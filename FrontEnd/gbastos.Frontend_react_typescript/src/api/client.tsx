import axios from "axios";

const httpModule = axios.create({
  baseURL: "http://localhost:5238/api/"
})

export default httpModule;
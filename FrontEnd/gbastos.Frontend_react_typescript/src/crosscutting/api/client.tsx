import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5238/api/"
})

/*
export default axios.create({
  baseURL: "http://localhost:5238/api/",
  headers: {
    "Content-type": "application/json"
  }
});
*/

export default client;
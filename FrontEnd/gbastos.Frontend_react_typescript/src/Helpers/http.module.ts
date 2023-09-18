import axios from 'axios';
import { baseUrl } from 'http://localhost:5238/api/GetCategories';

const HttpModule = axios.create({
    baseURL: baseUrl,
});

export default HttpModule;

import axios from 'axios';
import { baseUrl } from '../components/Constants/UrlConstants';

const HttpModule = axios.create({
    baseURL: baseUrl,
});

export default HttpModule;
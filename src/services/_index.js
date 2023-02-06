import Axios from 'axios'
import singleService from './Service';

// Axios Configuration
Axios.defaults.headers.common.Accept = 'application/json';

export default {
    singleService: new singleService(Axios,window.baseUrl)
}
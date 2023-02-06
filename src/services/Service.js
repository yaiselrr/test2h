class Service {
    axios;
    baseUrl;

    constructor(axios, apiUrl) {
        this.axios = axios;
        this.baseUrl = `${apiUrl}`;
    }

    nacionalidad(params) {
        let self = this;
        return self.axios.get(`${self.baseUrl}?name=${params}`);
    }
}

export default Service
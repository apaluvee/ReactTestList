import axios from 'axios';

const DATA_API_BASE_URL = "http://localhost:8080/user/data";

class DataService {

    getData(){
        return axios.get(DATA_API_BASE_URL);
    }

    createData(data){
        return axios.post(DATA_API_BASE_URL, data);
    }

    getDataById(dataId){
        return axios.get(DATA_API_BASE_URL + '/' + dataId);
    }

    updateData(data, dataId){
        return axios.put(DATA_API_BASE_URL + '/' + dataId, data);
    }

    deleteData(dataId){
        return axios.delete(DATA_API_BASE_URL + '/' + dataId);
    }
}

export default new DataService();
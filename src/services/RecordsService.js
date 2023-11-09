import axios from 'axios';

const RECORDS_API_BASE_URL = "http://localhost:8080/user/records";

class RecordsService {

    getRecords(){
        return axios.get(RECORDS_API_BASE_URL);
    }

    createRecord(record){
        return axios.post(RECORDS_API_BASE_URL, record);
    }

    getRecordById(recordId){
        return axios.get(RECORDS_API_BASE_URL + '/' + recordId);
    }

    updateRecord(record, recordId){
        return axios.put(RECORDS_API_BASE_URL + '/' + recordId, record);
    }

    deleteRecord(recordId){
        return axios.delete(RECORDS_API_BASE_URL + '/' + recordId);
    }
}

export default new RecordsService();

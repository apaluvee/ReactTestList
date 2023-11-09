import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecordsService from '../services/RecordsService';

function ListRecordsComponent() {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);

  const deleteRecord = (id) => {
    RecordsService.deleteRecord(id).then(() => {
      setRecords((prevRecords) => prevRecords.filter((record) => record.id !== id));
    });
  };

  const viewRecords = (id) => {
    navigate(`/view-record/${id}`);
  };

  const editRecords = (id) => {
    navigate(`/add-record/${id}`);
  };

  useEffect(() => {
    RecordsService.getRecords().then((res) => {
      setRecords(res.data);
    });
  }, []);

  const addRecords = () => {
    navigate('/add-record/_add');
  };

  return (
    <div>
      <h2>Records List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addRecords}>
          Add Records
        </button>
      </div>
      <br></br>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> ID </th>
              <th> Profile ID </th>
              <th> Activity Name </th>
              <th> Text </th>
              <th> Color </th>
              <th> Icon </th>
              <th> Max Value </th>
              <th> Increment Value </th>
              <th> Unit </th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td> {record.id} </td>
                <td> {record.profile.id} </td>
                <td> {record.activityName} </td>
                <td> {record.text} </td>
                <td> {record.color} </td>
                <td> {record.icon} </td>
                <td> {record.maxValue} </td>
                <td> {record.incrementValue} </td>
                <td> {record.unit} </td>
                <td>
                  <button onClick={() => editRecords(record.id)} className="btn btn-info">Update</button>
                  <button style={{ marginLeft: "10px" }} onClick={() => deleteRecord(record.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))};
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListRecordsComponent;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataService from '../services/DataService';

function ListDataComponent() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    DataService.getData()
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const addData = () => {
    navigate('/add-data/-add');
  }

  const editData = (id) => {
    navigate(`/add-data/${id}`);
  }

  const deleteData = (id) => {
    DataService.deleteData(id).then((res) => {
      setData(data.filter(data => data.id !== id));
    });
  };

  const viewData = (id) => {
    navigate(`/view-data/${id}`);
  };

  return (
    <div>
      <h2>Data List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addData}>
          Add Profile
        </button>
      </div>
      <br></br>
      <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Data</th>
              <th>Display Name</th>
              <th>Display Image</th>
              <th>Page</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(data => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.username}</td>
                <td>{data.data}</td>
                <td>{data.displayName}</td>
                <td>{data.displayImg}</td>
                <td>{data.page}</td>
                <td>
                  <button onClick={() => editData(data.id)} className="btn btn-info">
                    Update
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteData(data.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => viewData(data.id)}
                    className="btn btn-info"
                  >
                    Info
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListDataComponent;
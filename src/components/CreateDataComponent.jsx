import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DataService from '../services/DataService';

function CreateDataComponent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [displayImg, setDisplayImg] = useState("");
  const [page, setPage] = useState("");
  //const [jsonData, setJsonData] = useState("");
  const [jsonData, setJsonData] = useState({
    date: "2050-01-01",
    name: "test",
    goals: [],
    tasksDone: []
});

  useEffect(() => {
    if (id === "-add") {
      return;
    } else {
      DataService.getDataById(id).then((res) => {
        let data = res.data;
        setUsername(data.username);
        setDisplayName(data.displayName);
        setDisplayImg(data.displayImg);
        setPage(data.page);
        setJsonData(data.jsonData);
      });
    }
  }, [id]);

  const saveOrUpdateData = (e) => {
    e.preventDefault();
    if (id === "-add") {
      const newData = { username, displayName, displayImg, page, jsonData };
      DataService.createData(newData).then((res) => {
        navigate('/data');
      });
    } else {
      // Fetch the existing data data
      DataService.getDataById(id).then((res) => {
        const existingData = res.data;
  
        // Merge changes with existing data
        const updatedData = {
          id,
          username,
          displayName,
          displayImg,
          page,
          jsonData,
        };
  
        DataService.updateData(updatedData, id).then((res) => {
          navigate('/data');
        });
      });
    }
  };

  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const cancel = () => {
    navigate('/data');
  };

  const getTitle = () => {
    if (id === "-add") {
      return <h3 className="text-center">Add Data</h3>;
    } else {
      return <h3 className="text-center">Update Data</h3>;
    }
  };

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {getTitle()}
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Username: </label>
                  <input
                    placeholder="Username"
                    name="username"
                    className="form-control"
                    value={username}
                    onChange={changeUsernameHandler}
                  />
                </div>

                <div className="form-group">
                  <label> Display Name: </label>
                  <input
                    placeholder="Display Name"
                    name="displayName"
                    className="form-control"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label> Display Image: </label>
                  <input
                    placeholder="img.jpg"
                    name="displayImg"
                    className="form-control"
                    value={displayImg}
                    onChange={(e) => setDisplayImg(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label> Page: </label>
                  <input
                    placeholder="page"
                    name="page"
                    className="form-control"
                    value={page}
                    onChange={(e) => setPage(e.target.value)}
                  />
                </div>

                

                <div className="form-group">
                    <label> JSON Data: </label>
                    <textarea
                        placeholder="JSON Data"
                        name="jsonData"
                        className="form-control"
                        value={JSON.stringify(jsonData, null, 2)} 
                        onChange={(e) => setJsonData(JSON.parse(e.target.value))} 
                    />
                </div>

                <button className="btn btn-success" onClick={saveOrUpdateData}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateDataComponent;

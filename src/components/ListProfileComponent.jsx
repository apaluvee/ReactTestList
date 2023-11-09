import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileService from '../services/ProfileService';

function ListProfileComponent() {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    ProfileService.getProfiles()
      .then((res) => {
        setProfiles(res.data);
      });
  }, []);

  const addProfile = () => {
    navigate('/add-profile/-add');
  }

  const editProfile = (id) => {
    navigate(`/add-profile/${id}`);
  }

  const deleteProfile = (id) => {
    ProfileService.deleteProfile(id).then((res) => {
      setProfiles(profiles.filter(profile => profile.id !== id));
    });
  };

  const viewProfile = (id) => {
    navigate(`/view-profile/${id}`);
  };

  return (
    <div>
      <h2>Profiles List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addProfile}>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map(profile => (
              <tr key={profile.id}>
                <td>{profile.id}</td>
                <td>{profile.username}</td>
                <td>{profile.data}</td>
                <td>{profile.displayName}</td>
                <td>{profile.displayImg}</td>
                <td>
                  <button onClick={() => editProfile(profile.id)} className="btn btn-info">
                    Update
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteProfile(profile.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => viewProfile(profile.id)}
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

export default ListProfileComponent;

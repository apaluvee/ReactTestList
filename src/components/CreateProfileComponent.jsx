import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProfileService from '../services/ProfileService';

function CreateProfileComponent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [displayImg, setDisplayImg] = useState("");

  useEffect(() => {
    if (id === "-add") {
      return;
    } else {
      ProfileService.getProfileById(id).then((res) => {
        let profile = res.data;
        setUsername(profile.username);
        setDisplayName(profile.displayName);
        setDisplayImg(profile.displayImg);
      });
    }
  }, [id]);

  const saveOrUpdateProfile = (e) => {
    e.preventDefault();
    if (id === "-add") {
      const newProfile = { username, displayName, displayImg };
      ProfileService.createProfile(newProfile).then((res) => {
        navigate('/profiles');
      });
    } else {
      // Fetch the existing profile data
      ProfileService.getProfileById(id).then((res) => {
        const existingProfile = res.data;
  
        // Merge changes with existing data
        const updatedProfile = {
          id,
          username,
          displayName,
          displayImg,
        };
  
        ProfileService.updateProfile(updatedProfile, id).then((res) => {
          navigate('/profiles');
        });
      });
    }
  };

  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const cancel = () => {
    navigate('/profiles');
  };

  const getTitle = () => {
    if (id === "-add") {
      return <h3 className="text-center">Add Profile</h3>;
    } else {
      return <h3 className="text-center">Update Profile</h3>;
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

                <button className="btn btn-success" onClick={saveOrUpdateProfile}>
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

export default CreateProfileComponent;
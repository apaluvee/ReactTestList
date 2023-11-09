import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RecordsService from '../services/RecordsService';

function CreateRecordsComponent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [profileId, setProfileId] = useState('');
  const [activityName, setActivityName] = useState('');
  const [text, setText] = useState('');
  const [color, setColor] = useState('');
  const [icon, setIcon] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [incrementValue, setIncrementValue] = useState('');
  const [unit, setUnit] = useState('');

  useEffect(() => {
    if (id === '_add') {
      return;
    } else {
      RecordsService.getRecordById(id).then((res) => {
        const record = res.data;
        setProfileId(record.profile.id);
        setActivityName(record.activityName);
        setText(record.text);
        setColor(record.color);
        setIcon(record.icon);
        setMaxValue(record.maxValue);
        setIncrementValue(record.incrementValue);
        setUnit(record.unit);
      });
    }
  }, [id]);

  const saveOrUpdateRecord = (e) => {
    e.preventDefault();

    if (!profileId || isNaN(profileId)) {
      console.error('Invalid Profile ID');
      return;
    }

    const record = {
      activityName,
      text,
      color,
      icon,
      maxValue,
      incrementValue,
      unit,
      profile: {
        id: profileId,
      },
    };

    if (id === '_add') {
      RecordsService.createRecord(record).then(() => {
        navigate('/records');
      });
    } else {
      RecordsService.updateRecord(record, id).then(() => {
        navigate('/records');
      });
    }
  };

  const cancel = () => {
    navigate('/records');
  };

  const getTitle = () => {
    return id === '_add' ? <h3 className="text-center">Add Record</h3> : <h3 className="text-center">Update Record</h3>;
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
                  <label> Profile ID: </label>
                  <input
                    placeholder="Profile ID"
                    name="profileId"
                    className="form-control"
                    value={profileId}
                    onChange={(e) => setProfileId(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Activity Name: </label>
                  <input
                    placeholder="Activity Name"
                    name="activityName"
                    className="form-control"
                    value={activityName}
                    onChange={(e) => setActivityName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Text: </label>
                  <input
                    placeholder="Text"
                    name="text"
                    className="form-control"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label> Color: </label>
                  <input
                    placeholder="Color"
                    name="color"
                    className="form-control"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Icon: </label>
                  <input
                    placeholder="Icon"
                    name="icon"
                    className="form-control"
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Max Value: </label>
                  <input
                    placeholder="Max Value"
                    name="maxValue"
                    className="form-control"
                    value={maxValue}
                    onChange={(e) => setMaxValue(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label> Increment Value: </label>
                  <input
                    placeholder="Increment Value"
                    name="incrementValue"
                    className="form-control"
                    value={incrementValue}
                    onChange={(e) => setIncrementValue(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Unit: </label>
                  <input
                    placeholder="Unit"
                    name="unit"
                    className="form-control"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                  />
                </div>

                <button className="btn btn-success" onClick={saveOrUpdateRecord}>
                  Save
                </button>
                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>
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

export default CreateRecordsComponent;

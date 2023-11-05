import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileService from '../services/ProfileService';

function ViewProfileComponent() {
    const { id } = useParams();
    const [profile, setProfile] = useState({});

    useEffect(() => {
        ProfileService.getProfileById(id).then((res) => {
            setProfile(res.data);
        });
    }, [id]);

    return (
        <div>
            <br />
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">View Profile Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label>Profile Username:</label>
                        <div>{profile.username}</div>
                    </div>
                    <div className="row">
                        <label>Display Name:</label>
                        <div>{profile.displayName}</div>
                    </div>
                    <div className="row">
                        <label>Display Image:</label>
                        <div>{profile.displayImg}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewProfileComponent;

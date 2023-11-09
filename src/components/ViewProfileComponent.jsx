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
                <h3 className="text-center">Profile</h3>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className="text-center">Profile Username</th>
                                <th className="text-center">Display Name</th>
                                <th className="text-center">Display Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">{profile.username}</td>
                                <td className="text-center">{profile.displayName}</td>
                                <td className="text-center">{profile.displayImg}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Display Records */}
            <div className="card col-md-8 offset-md-2 mt-4">
                <h3 className="text-center">All Records</h3>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Activity Name</th>
                                <th>Text</th>
                                <th>Color</th>
                                <th>Icon</th>
                                <th>Max Value</th>
                                <th>Increment Value</th>
                                <th>Unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {profile.records && profile.records.map((record) => (
                                <tr key={record.id}>
                                    <td>{record.activityName}</td>
                                    <td>{record.text}</td>
                                    <td>{record.color}</td>
                                    <td>{record.icon}</td>
                                    <td>{record.maxValue}</td>
                                    <td>{record.incrementValue}</td>
                                    <td>{record.unit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ViewProfileComponent;

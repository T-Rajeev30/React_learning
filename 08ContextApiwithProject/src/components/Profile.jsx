import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return <div>Please log in to see your profile.</div>;
    }

    return (
        <div>
            <h1>Welcome, {user.username}!</h1>
            <p>Your token: {user.token}</p>
        </div>
    );
};

export default Profile;

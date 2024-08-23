import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        
        const loggedInUser = { username, token: 'abc123' };
        setUser(loggedInUser);
    };

    return (
        <div>
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
            {"           "}
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;

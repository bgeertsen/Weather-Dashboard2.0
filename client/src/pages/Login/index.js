import React from 'react';
import backgroundVid from '../../assets/pexels-arthouse-studio-8494852.mp4';
import './Login.css';

const Login = () => {
    return (
        <video autoPlay loop muted>
            <source src={backgroundVid} type="video/mp4"></source>
        </video>
    );
};

export default Login;

import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import backgroundVid from '../../assets/pexels-arthouse-studio-8494852.mp4';
import './Login.css';

const Login = () => {
    const [userState, setUserState] = useState(true);

    const handleNotAUser = async (event) => {
        event.preventDefault();
        if (userState) {
            setUserState(false);
        } else {
            setUserState(true);
        }
    };

    return (
        <>
            <video autoPlay loop muted>
                <source src={backgroundVid} type="video/mp4"></source>
            </video>
            <div className="login-form">
                <h1>Weather Dashboard</h1>
                {userState ? (
                    <Form>
                        <h2>Login</h2>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="username"
                                placeholder="Username"
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <p>
                            Not already a member? Click
                            <button
                                className="user-btn"
                                onClick={handleNotAUser}
                            >
                                here
                            </button>
                        </p>
                    </Form>
                ) : (
                    <Form>
                        <h2>Sign Up</h2>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="username"
                                placeholder="Username"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                        <p>
                            Already a member? Click
                            <button
                                className="user-btn"
                                onClick={handleNotAUser}
                            >
                                here
                            </button>
                        </p>
                    </Form>
                )}
            </div>
        </>
    );
};

export default Login;

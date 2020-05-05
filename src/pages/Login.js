import React from 'react';
import LoginForm from "../components/LoginForm";

function Login({LoginFunction}) {
    return(
        <div className="Wrapper">
            <h1> Login </h1>
            <div className="CreateWrapper">
                <LoginForm LoginFunction={LoginFunction} />
            </div>
        </div>
    );
}

export default Login;
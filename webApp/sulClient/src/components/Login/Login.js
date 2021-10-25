import React, { useState } from 'react';
import ProTypes from 'prop-types';
import "./Login.css";
import define from "../../define/define"
import Axios from "axios";


async function loginUser(credentials) {
    return Axios.post(define.REQURL + "/login", {
        credentials
    }).then()
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handlerSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token.data);
        window.location.replace("/");
    }
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form className="login-form" onSubmit={handlerSubmit}>
                <label>
                    <p>ID</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div className="login-button">
                    <button type="submit" className="button-login">Log In</button>
                    <button type="submit" className="button-regist">Regist</button>
                </div>
            </form>
        </div>
    );
}

Login.ProTypes = {
    setToken: ProTypes.func.isRequired
}
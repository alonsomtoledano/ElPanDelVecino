import React, { useState } from "react";
import { useMutation, gql, } from "@apollo/client";
import { useRecoilState } from "recoil";

import "./styles.css";
import { adminModeAtom } from "../recoil/atoms";

const LOGIN = gql`
    mutation login($userName: String!, $pwd: String!) {
        login(userName: $userName, pwd: $pwd) {
            _id
            userName
            token
        }
    }
`;

const Login = () => {
    const [, setAdminMode] = useRecoilState(adminModeAtom);

    let inputUserName;
    let inputPwd;

    const [error, setError] = useState(null);
    const [login, { data }] = useMutation(LOGIN, {
        onError(err) {
            setError(err.message);
        }
    })

    if (data) {
        localStorage.setItem("userid", data.login._id);
        localStorage.setItem("token", data.login.token);
    }

    return (
        <div className="Login">
            <form className="ModuleLogin"
                onSubmit = { e => {
                    e.preventDefault();
                    inputUserName = document.getElementById("inputUserName").value;
                    inputPwd = document.getElementById("inputPwd").value;
                    login({ variables: { userName: inputUserName, pwd: inputPwd }});
                }}
            >
                <div className="UserName">
                    <div className="Text">Nombre de Usuario</div>
                    <input required id="inputUserName" className="Input"/>
                </div>
                <div className="Pwd">
                    <div className="Text">Contraseña</div>
                    <input required id="inputPwd" type="password" className="Input"/>
                </div>

                {data ? <div className="Text">{data.login.userName} ha iniciado sesión</div> : null}
                {error ? <div>{error}</div> : null}

                <button className="Button" type="submit" onClick={() => setError(null)}>Iniciar sesión</button>

                <div className="Button" onClick={() => { setAdminMode(0); setError(null) }}>Atrás</div>

            </form>
        </div>
    )
}

export default Login;
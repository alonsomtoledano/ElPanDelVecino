import React from "react";
import { useMutation, gql, } from "@apollo/client";

import "./styles.css";

const SIGNIN = gql`
    mutation signin($userName: String!, $pwd: String!) {
        signin(userName: $userName, pwd: $pwd) {
            userName
        }
    }
`;

const Signin = () => {
    let inputUserName;
    let inputPwd;

    const [signin, { data }] = useMutation(SIGNIN);

    return (
        <div className="Signin">
            <form className="ModuleSignin"
                onSubmit={e => {
                    e.preventDefault();
                    inputUserName = document.getElementById("inputUserName").value;
                    inputPwd = document.getElementById("inputPwd").value;
                    signin({ variables: { userName: inputUserName, pwd: inputPwd }});
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

                <button className="Button" type="submit">Crear cuenta</button>

                <div className="Button">Atrás</div>
            </form>
        </div>
    )
}

export default Signin;
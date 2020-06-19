import React from "react";
import { useRecoilState } from "recoil";

import "./styles.css";
import { adminModeAtom } from "../recoil/atoms";
import Login from "./Login";
import Signin from "./Signin";

const Admin = () => {
    const [adminMode, setAdminMode] = useRecoilState(adminModeAtom);

    let content;

    if (adminMode === 0) {
        content =
        <div className="Admin">
            {!localStorage.getItem("token") ? <div className="Button" onClick={() => setAdminMode(1)}>Iniciar Sesión</div> : null}
            <div className="Button" onClick={() => setAdminMode(2)}>Crear Usuario</div>
            {localStorage.getItem("token") ? 
                <div>
                    <div className="Text">Recetas</div>
                    <div className="Button" onClick={() => setAdminMode(3)}>Añadir nueva</div>
                    <div className="Button" onClick={() => setAdminMode(4)}>Listado</div>

                    <div className="Text">Ingredientes</div>
                    <div className="Button" onClick={() => setAdminMode(5)}>Añadir nuevo</div>
                    <div className="Button" onClick={() => setAdminMode(6)}>Listado</div>

                    <div className="Button" onClick={() => { setAdminMode(0); localStorage.removeItem("token")}}>Cerrar Sesión</div>
                </div> : null}
        </div>
    } else if (adminMode === 1) {
        content = <Login />
    } else if (adminMode === 2) {
        content = <Signin />
    } else if (adminMode === 3) {

    } else if (adminMode === 4) {

    } else if (adminMode === 5) {

    } else if (adminMode === 6) {

    } 

    return (
        <div>
            {content}
        </div>
    )
}

export default Admin;
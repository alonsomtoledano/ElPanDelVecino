import React from "react";
import { useRecoilState } from "recoil";

import "./styles.css";
import { adminModeAtom } from "../recoil/atoms";
import Signin from "./Signin";

const Admin = () => {
    const [adminMode, setAdminMode] = useRecoilState(adminModeAtom);

    let content;

    if (adminMode === 0) {
        content =
        <div className="Admin">
            <div className="Button" onClick={() => setAdminMode(1)}>Iniciar Sesión</div>
            <div className="Button" onClick={() => setAdminMode(2)}>Crear Usuario</div>
        </div>
    } else if (adminMode === 1) {
        
    } else if (adminMode === 2) {
        content = <Signin />
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Admin;
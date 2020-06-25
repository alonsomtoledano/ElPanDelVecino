import React from "react";
import { useRecoilState } from "recoil";

import "./styles.css";
import { adminModeAtom } from "../recoil/atoms";

const Recipes = () => {
    const [, setAdminMode] = useRecoilState(adminModeAtom);

    return (
        <div className="Recipes">
            <div className="Text">Recetas</div>
            <div className="Button" onClick={() => setAdminMode(3)}>Añadir nueva</div>
            <div className="Button" onClick={() => setAdminMode(4)}>Listado</div>
        </div>
    )
}

export default Recipes;
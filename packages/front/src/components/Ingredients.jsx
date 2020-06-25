import React from "react";
import { useRecoilState } from "recoil";

import "./styles.css";
import { adminModeAtom } from "../recoil/atoms";

const Ingredients = () => {
    const [, setAdminMode] = useRecoilState(adminModeAtom);

    return (
        <div className="Ingredients">
            <div className="Text">Ingredientes</div>
            <div className="Button" onClick={() => setAdminMode(5)}>Añadir nuevo</div>
            <div className="Button" onClick={() => setAdminMode(6)}>Listado</div>
        </div>
    )
}

export default Ingredients;
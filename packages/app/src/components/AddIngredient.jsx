import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRecoilState } from "recoil";

import "./styles.css";
import { adminModeAtom } from "../recoil/atoms";
import { INGREDIENTS } from "./RemoveIngredient";

const ADD_INGREDIENT = gql`
    mutation addIngredient($userid: ID!, $token: String!, $name: String!) {
        addIngredient(userid: $userid, token: $token, name: $name) {
            name
        }
    }
`;

const AddIngredient = () => {
    const [, setAdminMode] = useRecoilState(adminModeAtom);
    const [error, setError] = useState(null);

    let inputName;

    const [addIngredient, { data }] = useMutation(ADD_INGREDIENT, {
        refetchQueries: [{ query: INGREDIENTS }],

        onError(err) {
            setError(err.message);
        }
    })

    return (
        <div className="AddIngredient">
            <form className="ModuleAddIngredient"
                onSubmit = { e => {
                    e.preventDefault();
                    inputName = document.getElementById("inputName").value;
                    addIngredient({ variables: { userid: localStorage.getItem("userid"), token: localStorage.getItem("token"), name: inputName }});
                    setError(null);
                }}
            >
                <div className="IngredientName">
                    <div className="Text">Nombre del ingrediente</div>
                    <input required id="inputName" className="Input"/>
                </div>

                {data ? <div className="Text">{data.addIngredient.name} añadido</div> : null}
                {error ? <div>{error}</div> : null}

                <button className="Button" type="submit">Añadir</button>

                <div className="Button" onClick={() => setAdminMode(0)}>Atrás</div>

            </form>
        </div>
    )
}

export default AddIngredient;
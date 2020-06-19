import React, { useState } from "react";
import { useMutation, gql, } from "@apollo/client";

import "./styles.css";

const REMOVE_INGREDIENT = gql`
    mutation removeIngredient($userid: ID!, $token: String!, $id: ID!) {
        removeIngredient(userid: $userid, token: $token, id: $id) {
            name
        }
    }
`;

const Ingredient = props => {
    const {name, ingredientid} = props;

    const [error, setError] = useState(null);
    const [removeIngredient, { data }] = useMutation(REMOVE_INGREDIENT, {
        onError(err) {
            setError(err.message);
        }
    })

    return (
        <div className="Ingredient">
            <form className="ModuleAddIngredient"
                onSubmit = { e => {
                    e.preventDefault();
                    removeIngredient({ variables: { userid: localStorage.getItem("userid"), token: localStorage.getItem("token"), id: ingredientid }});
                }}
            >
                <div className="Text">{name}</div>
                <button className="Button" type="submit" onClick={() => {setError(null); }}>Borrar</button>
                {error ? <div>{error}</div> : null}
            </form>
        </div>
    )
}

export default Ingredient;
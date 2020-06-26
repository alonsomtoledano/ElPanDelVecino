import React, { useState } from "react";
import { useMutation, gql, } from "@apollo/client";

import "./styles.css";
import { INGREDIENTS } from "./RemoveIngredient";

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

    const [removeIngredient] = useMutation(REMOVE_INGREDIENT, {
        refetchQueries: [{ query: INGREDIENTS }],

        onError(err) {
            setError(err.message);
        }
    })

    return (
        <form className="Ingredient"
            onSubmit = { e => {
                e.preventDefault();
                removeIngredient({ variables: { userid: localStorage.getItem("userid"), token: localStorage.getItem("token"), id: ingredientid }});
                setError(null);
            }}
        >
            {name}
            {error ? <div>{error}</div> : null}
            <button className="Button" type="submit">Borrar</button>
        </form>
    )
}

export default Ingredient;
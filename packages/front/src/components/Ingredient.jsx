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
    const {name, ingredientid, refetch} = props;

    const [error, setError] = useState(null);

    const [removeIngredient, { data }] = useMutation(REMOVE_INGREDIENT, {
        onError(err) {
            setError(err.message);
        }
    })

    return (
        <form className="Ingredient"
            onSubmit = { e => {
                e.preventDefault();
                removeIngredient({ variables: { userid: localStorage.getItem("userid"), token: localStorage.getItem("token"), id: ingredientid }});
                refetch();
            }}
        >
            {name}
            {error ? <div>{error}</div> : null}
            <button className="Button" type="submit">Borrar</button>
        </form>
    )
}

export default Ingredient;
import React, { useState } from "react";
import { useMutation, gql, } from "@apollo/client";
import { useRecoilState } from "recoil";

import "./styles.css";
import { updateIngredientsAtom } from "../recoil/atoms";

const REMOVE_INGREDIENT = gql`
    mutation removeIngredient($userid: ID!, $token: String!, $id: ID!) {
        removeIngredient(userid: $userid, token: $token, id: $id) {
            name
        }
    }
`;

const Ingredient = props => {
    const {name, ingredientid} = props;

    const [, setUpdateIngredients] = useRecoilState(updateIngredientsAtom);
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
                setUpdateIngredients(true);
            }}
        >
            {name}
            {error ? <div>{error}</div> : null}
            <button className="Button" type="submit">Borrar</button>
        </form>
    )
}

export default Ingredient;
import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useRecoilState } from "recoil";

import "./styles.css";
import { adminModeAtom } from "../recoil/atoms";
import Ingredient from "./Ingredient";

const INGREDIENTS = gql`
    query ingredients {
        ingredients {
            _id
            name
        }
    }
`;

const RemoveIngredient = () => {
    const [, setAdminMode] = useRecoilState(adminModeAtom);

    const [error, setError] = useState(null);
    const { loading, data } = useQuery(INGREDIENTS, {
        onError(err) {
            setError(err.message);
        }
    });

    if (loading) return <div>Cargando...</div>

    let ingredients;
    if (data) {
        ingredients = data.ingredients.map(obj => {
            return <Ingredient name={obj.name} ingredientid={obj._id} key={obj._id}/>
        })
    }

    return (
        <div className="RemoveIngredient">
            {ingredients}

            {error ? <div>{error}</div> : null}

            <div className="Button" onClick={() => {setAdminMode(0); setError(null)}}>Atrás</div>
        </div>
    )
}

export default RemoveIngredient;
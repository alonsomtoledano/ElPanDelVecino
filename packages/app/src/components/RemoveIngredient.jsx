import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useRecoilState } from "recoil";

import "./styles.css";
import { adminModeAtom } from "../recoil/atoms";
import Ingredient from "./Ingredient";

export const INGREDIENTS = gql`
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

    let listIngredients;
    if (data) {
        listIngredients = data.ingredients.map(obj => {
            return <Ingredient name={obj.name} ingredientid={obj._id} key={obj._id}/>
        })
    }

    return (
        <div className="RemoveIngredient">
            {listIngredients}
            {error ? <div>{error}</div> : null}
            <div className="Button" onClick={() => setAdminMode(0)}>Atrás</div>
        </div>
    )
}

export default RemoveIngredient;
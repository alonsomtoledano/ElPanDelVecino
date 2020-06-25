import React, { useState } from "react";
import { useQuery, gql, } from "@apollo/client";
import { useRecoilState } from "recoil";

import "./styles.css";
import { adminModeAtom, updateIngredientsAtom } from "../recoil/atoms";
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
    const [adminMode, setAdminMode] = useRecoilState(adminModeAtom);
    const [updateIngredients, setUpdateIngredients] = useRecoilState(updateIngredientsAtom);
    const [error, setError] = useState(null);

    const { loading, refetch, data } = useQuery(INGREDIENTS, {
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

    if (updateIngredients) {
        refetch();
        setUpdateIngredients(false);
    }

    return (
        <div className="RemoveIngredient">
            Yes
            {listIngredients}
            {error ? <div>{error}</div> : null}
            <div className="Button" onClick={() => setAdminMode(0)}>Atrás</div>
        </div>
    )
}

export default RemoveIngredient;
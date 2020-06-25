import React, { useState } from "react";
import { useQuery, gql, } from "@apollo/client";
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
    const [adminMode, setAdminMode] = useRecoilState(adminModeAtom);
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
            return <Ingredient name={obj.name} ingredientid={obj._id} refetch={refetch} key={obj._id}/>
        })
    }

    return (
        <div className="RemoveIngredient">
            <div className="Button" onClick={() => refetch()}>Refetch</div>
            {listIngredients}
            {error ? <div>{error}</div> : null}
            <div className="Button" onClick={() => setAdminMode(0)}>Atrás</div>
        </div>
    )
}

export default RemoveIngredient;
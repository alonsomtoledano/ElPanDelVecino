import React from "react";

import "./styles.css";

const IngredientRecipe = props => {
    const {name, ingredientid, recipeIngredients} = props;

    return (
        <div className="IngredientRecipe">
            <div className="Button" onClick={() => recipeIngredients.includes(ingredientid) ? recipeIngredients.pop(ingredientid) :
                recipeIngredients.push(ingredientid)}>{name}</div>
        </div>
    )
}

export default IngredientRecipe;
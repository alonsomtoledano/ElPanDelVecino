import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useRecoilState } from "recoil";

import "./styles.css";
import { adminModeAtom } from "../recoil/atoms";
import UploadFile from "./UploadFile";
import Step from "./Step";
// import { INGREDIENTS } from "./RemoveIngredient";

const ADD_RECIPE = gql`
    mutation addRecipe($userid: ID!, $token: String!, $title: String!, $description: String!, $steps: [StepInput!]!, $ingredients: [ID!]!, $mainImage: FileInput!) {
        addRecipe(userid: $userid, token: $token, title: $title, description: $description, steps: $steps, ingredients: $ingredients, mainImage: $mainImage) {
            title
        }
    }
`;

const AddRecipe = () => {

    let inputTitle;
    let inputDescription;
    let newStep;
    let newNumStep = 0;

    const [, setAdminMode] = useRecoilState(adminModeAtom);
    const [error, setError] = useState(null);
    const [steps, setSteps] = useState([<Step key={newNumStep}/>]);
    const [numStep, setNumStep] = useState(1);

    const [addRecipe, { data }] = useMutation(ADD_RECIPE, {
        // refetchQueries: [{ query: INGREDIENTS }],

        onError(err) {
            setError(err.message);
        }
    })

    useEffect(() => {}, [numStep])

    return (
        <div className="AddRecipe">
            <form className="ModuleAddIngredient"
                onSubmit = { e => {
                    e.preventDefault();
                    inputTitle = document.getElementById("inputTitle").value;
                    inputDescription = document.getElementById("inputDescription").value;
                    // addRecipe({ variables: { userid: localStorage.getItem("userid"), token: localStorage.getItem("token"),
                    //     title: inputTitle, description: inputDescription, steps: steps, ingredients: ingredients, mainImage: mainImage }});
                    setError(null);
                }}
            >
                <div>
                    <div className="Text">Imagen principal</div>
                    <UploadFile />
                </div>

                <div>
                    <div className="Text">Título</div>
                    <input required id="inputTitle" className="Input"/>
                </div>

                <div>
                    <div className="Text">Descripción</div>
                    <textarea required id="inputDescription" type="text" className="Input"/>
                </div>

                <div>
                    <div className="Text">Pasos</div>
                    <div className="Button" onClick={() => {
                        newNumStep = numStep;
                        newNumStep++;
                        setNumStep(newNumStep);

                        newStep = steps;
                        newStep.push(<Step key={newNumStep}/>)
                        setSteps(newStep);
                    }}>+</div>
                    {steps.map(step => {
                        return step;
                    })}
                </div>

                {data ? <div className="Text">{data.addIngredient.name} añadida</div> : null}
                {error ? <div>{error}</div> : null}

                <button className="Button" type="submit">Añadir</button>

                <div className="Button" onClick={() => setAdminMode(0)}>Atrás</div>

            </form>
        </div>
    )
}

export default AddRecipe;
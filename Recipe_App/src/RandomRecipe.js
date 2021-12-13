import { useEffect, useState } from "react";
import FavButton from "./FavButton";
import useFetch from "./useFetch"

const RandomRecipe = ({ randomMeal }) => {
    const index = 0;

    return (
        <div className="random-meal">
            <div className="random-meal-content">
                <span>Random Recipe</span>
                <img src={randomMeal.meals[0].strMealThumb}></img>
                <div className="title-btn">
                    <h4>{randomMeal.meals[0].strMeal}</h4>
                    <FavButton randomMeal={randomMeal} index={index} />
                </div>
            </div>
        </div>
     );
}
 
export default RandomRecipe;
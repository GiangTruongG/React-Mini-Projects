import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const SearchBar = ({}) => {
    const {mealTitle, setMealTitle} = useContext(UserContext);

    const inputMeal = document.getElementById('meals');

    return ( 
        <div className="search-bar">
            <input 
                type='text'
                id="meals"
            ></input>
            <button onClick={() => {setMealTitle(inputMeal.value)}}>Search</button>
        </div>
     );
}
 
export default SearchBar;
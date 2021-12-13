import useFetch from "./useFetch";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import FavButton from "./FavButton";

const SearchMeal = () => {
    const {mealTitle, setMealTitle} = useContext(UserContext);

    const {data: meals} = useFetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + mealTitle);


    return ( 
        <div className="random-meal">
            <h2>{mealTitle} Recipe</h2>
           {meals && meals.meals.map((meal, index) => (
               <div className="random-meal-content" key={meal.idMeal}>
               <img src={meals.meals[index].strMealThumb}></img>
               <div className="title-btn">
                   <h4>{meals.meals[index].strMeal}</h4>
                   <FavButton randomMeal={meals} index={index}/>
               </div>
           </div>
           ))}
        </div>
     );
}
 
export default SearchMeal;
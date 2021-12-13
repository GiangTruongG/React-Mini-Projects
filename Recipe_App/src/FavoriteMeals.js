import { useEffect } from "react";
import useFetch from "./useFetch";

const FavoriteMeals = () => {
    const {data: favMeals} = useFetch('http://localhost:5000/favMeal');

    const handleDelete = (id) => {

        console.log(id);
        fetch('http://localhost:5000/favMeal/' + id, {
            method: 'DELETE'
        }).then(() => {
            window.location.reload();
        })
    }

    return (
        <div className="fav-meals">
            <h3>Favorite Meals</h3>
            <div className="list-fav-meals">
                {favMeals && favMeals.map(meal => (
                    <div className="fav-meal" key={meal.id}>
                        <img src={meal.mealImg}></img>
                        <p>{meal.mealTitle}</p>
                        <button className="clear" onClick={() => handleDelete(meal.id)}>X</button>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default FavoriteMeals;
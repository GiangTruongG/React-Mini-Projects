import { useState } from "react";

const FavButton = ({ randomMeal, index }) => {
    const [mealTitle, setMealTitle] = useState(randomMeal.meals[index].strMeal);
    const [mealImg, setMealImg] = useState(randomMeal.meals[index].strMealThumb);
    const [mealId, setMealId] = useState(randomMeal.meals[index].idMeal);

    return (   
        <button onClick={() => {
            const meal = {mealTitle, mealImg, mealId};

            console.log(meal);
            fetch('http://localhost:5000/favMeal', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(meal)
            }).then((data) => {
                console.log(data);
                window.location.reload();
            })
        }}>Add Fav</button>
     );
}
 
export default FavButton;
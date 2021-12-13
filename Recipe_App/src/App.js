import React from "react";
import FavoriteMeals from "./FavoriteMeals";
import RandomRecipe from "./RandomRecipe";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchMeal from "./SearchMeal";
import { UserContext } from "./UserContext";

export const mealSearch = React.createContext(null);

function App() {
  const {data: randomMeal} = useFetch('https://www.themealdb.com/api/json/v1/1/random.php');

  const [mealTitle, setMealTitle] = useState('');

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{mealTitle, setMealTitle}}>
          <SearchBar />
          <FavoriteMeals />
          <Switch>
            <Route path='/'>
              {randomMeal && <RandomRecipe randomMeal={randomMeal} />}
            </Route>
            <Route path='/meals'>
              <SearchMeal />
            </Route>
          </Switch>
          <SearchMeal />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;

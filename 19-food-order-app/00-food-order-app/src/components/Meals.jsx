import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
import { API_ENDPOINTS } from "../constants";

const requestConfig = {};

export default function Meals() {
  // const [loadedMeals, setLoadedMeals] = useState([]);
  const {
    isLoading,
    data: loadedMeals,
    error,
  } = useHttp(API_ENDPOINTS.meals, requestConfig, []);

  // useEffect(() => {
  //   async function fetchMeals() {
  //     try {
  //       const response = await fetch("http://localhost:3000/meals");
  //       if (!response.ok) {
  //         // error state
  //       }
  //       const meals = await response.json();
  //       setLoadedMeals(meals);
  //     } catch (error) {
  //       /* empty */
  //     }
  //   }
  //   fetchMeals();
  // }, []);

  if (isLoading) {
    return <p className="center">Fetching meals....</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  // if (!loadedMeals) {
  //   return <p>No meals found...</p>;
  // }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

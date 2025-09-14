import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRestaurants } from "../Actions/restaurantAction";
import "../Components/CSS/Count.css";

const CountRestaurant = () => {
  const dispatch = useDispatch();

  const { count, pureVegRestaurantsCount, showVegOnly, loading, error } =
    useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch, showVegOnly]);

  return (
    <div>
      {loading ? (
        <p>Loading Restaurant Count...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p className="NumOfRestro">
          {showVegOnly ? pureVegRestaurantsCount : count}&nbsp;
          <span className="Restro">
            {showVegOnly
              ? pureVegRestaurantsCount === 1
                ? "Restaurant"
                : "Restaurants"
              : count === 1
              ? "Restaurant"
              : "Restaurants"}
          </span>
          <hr />
        </p>
      )}
    </div>
  );
};

export default CountRestaurant;
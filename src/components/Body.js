import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANTS } from "../utils/mockData";
import clsx from "clsx";

const Body = () => {
  const [restaurants, setRestaurants] = useState(RESTAURANTS);
  const [showTopRatedRestaurants, setTopRatedRestaurants] = useState(false);

  console.log(
    "DEBUG restaurants: ",
    showTopRatedRestaurants,
    restaurants.length
  );
  const handleTopRatedRestaurants = (e) => {
    console.log("DEBUG top rated restaurants");
    setTopRatedRestaurants((prev) => !prev);
    if (showTopRatedRestaurants) {
      setRestaurants(
        RESTAURANTS.filter((restaurant) => restaurant.info.avgRating >= 4)
      );
    } else {
      setRestaurants(RESTAURANTS);
    }
  };

  return (
    <div className="mt-[100px]">
      <div className="p-4">
        <button
          onClick={handleTopRatedRestaurants}
          className={clsx(
            "rounded p-1 px-3 border border-gray-300 shadow-s font-medium text-slate-700 cursor-pointer",
            {
              "text-white border-indigo-600 bg-[#4f39f6]":
                showTopRatedRestaurants,
            }
          )}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,250px)] auto-rows-autop justify-evenly gap-7 p-4">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantDetails={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;

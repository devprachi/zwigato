import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showTopRatedRestaurants, setTopRatedRestaurants] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const handleTopRatedRestaurants = (e) => {
    setTopRatedRestaurants((prev) => !prev);
    if (showTopRatedRestaurants) {
      setFilteredRestaurants(
        restaurantsList.filter((restaurant) => restaurant.info.avgRating >= 4)
      );
    } else {
      setFilteredRestaurants(restaurantsList);
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    const restaurantData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantsList(restaurantData);
    setFilteredRestaurants(restaurantData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getCards = () => {
    if (isLoading) {
      return <Shimmer />;
    }
    return (
      <div className="grid grid-cols-[repeat(auto-fit,250px)] auto-rows-autop justify-evenly gap-7 p-4">
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantDetails={restaurant.info}
          />
        ))}
      </div>
    );
  };

  const onSearchRestaurantChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onSearchRestaurant = (e) => {
    const filteredRestaurants = restaurantsList.filter((restaurant) =>
      restaurant?.info?.name
        .toLowerCase()
        .includes(searchInput.toLocaleLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  return (
    <div className="mt-[100px]">
      <div className="p-4 flex justify-center items-center gap-1">
        <input
          type="text"
          className="border border-[#f0eceb] shadow-xl rounded-[20px] p-2 "
          placeholder="Search restaurant"
          value={searchInput}
          onChange={onSearchRestaurantChange}
        />
        <button
          onClick={onSearchRestaurant}
          className="cursor-pointer shadow-xl rounded-[20px] border-[#f0eceb] hover:bg-[#f0eceb] mr-4"
        >
          <MagnifyingGlassIcon className="w-10 h-10 p-2" />
        </button>
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
      {getCards()}
    </div>
  );
};

export default Body;

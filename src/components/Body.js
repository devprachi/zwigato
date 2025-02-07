import RestaurantCard from "./RestaurantCard";
import { RESTAURANTS } from "../utils/mockData";

const Body = () => {
  return (
    <div className="">
      <div>Search</div>
      <div className="grid grid-cols-[repeat(auto-fit,250px)] auto-rows-autop justify-evenly gap-7 p-4 mt-[95px]">
        {RESTAURANTS.map((restaurant) => (
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

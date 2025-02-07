import { IMAGE_CDN } from "../utils/constants";

const RestaurantCard = ({ restaurantDetails }) => {
  const {
    name,
    costForTwo,
    avgRating,
    cuisines,
    cloudinaryImageId,
    sla: { deliveryTime },
  } = restaurantDetails;
  const imgUrl = `${IMAGE_CDN}${cloudinaryImageId}`;
  return (
    <div className="flex flex-col h-[370px] shadow-2xl rounded-xl">
      <img
        src={imgUrl}
        className="h-[200px] aspect-[1] object-cover rounded-t-xl"
      />
      <div className="p-2.5 flex flex-col grow justify-between">
        <div className="text-2xl font-semibold leading-8">{name}</div>
        <div className="text-[0.8rem]">{cuisines.join(" | ")}</div>
        <div className="flex justify-between px-0 py-[5px]">
          <div className="text-base font-normal">{avgRating}</div>
          <div className="text-base font-normal">{deliveryTime} mins</div>
          <div className="text-base font-normal">{costForTwo}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

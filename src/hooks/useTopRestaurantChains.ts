import { useQuery } from "@tanstack/react-query";
import getRestautrantItems from "../services/swiggy.restaurant.api";

export const useTopRestaurantChains = () => {
  return useQuery({
    queryKey: ["top-restaurant-chains"],
    queryFn: getRestautrantItems,
    select: (data) => {
      const cards = data?.data?.cards ?? [];

      const widget = cards[1];

      const title = widget?.card?.card?.header?.title;

      const restaurantData =
        widget?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      return { title, restaurantData };
    },
  });
};

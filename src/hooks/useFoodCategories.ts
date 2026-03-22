import { useQuery } from "@tanstack/react-query";
import getRestautrantItems from "../services/swiggy.restaurant.api";

export const useFoodCategory = () => {
  return useQuery({
    queryKey: ["food-categories"],
    queryFn: getRestautrantItems,
    select: (data) => {
      const cards = data?.data?.cards ?? [];

      const gridWidget = cards.find(
        (c: any) =>
          c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget" &&
          c?.card?.card?.gridElements?.infoWithStyle?.info,
      );

      return gridWidget?.card?.card?.gridElements?.infoWithStyle?.info ?? [];
    },
  });
};

import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuItemCard from "./MenuItemCard";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="resmenu-container">
      <h2 className="res-name">{name}</h2>
      <h2 style={{ color: "#616161", fontSize: "16px", marginBottom: "52px" }}>
        {costForTwoMessage}
      </h2>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card?.card?.title}
          data={category.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index===showIndex?null:index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

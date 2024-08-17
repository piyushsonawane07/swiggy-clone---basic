import { Star, Tag } from "lucide-react";
import React from "react";
import { ITEM_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItemCard = ({ itemCards }) => {

  const dispatch = useDispatch();
  
  const truncateName = (name) => {
    if (name.length > 150) {
      return name.substring(0, 150) + "...";
    }
    return name;
  };

  const handleAddItem = (item) => {
    //dispatch and action
    dispatch(addItem(item));
  }

  return (
    <div className="menu-item-container">
      {itemCards.map((item) => (
        <>
          <div key={item?.card?.info?.id} className="item-info-container">
            <div className="item-info">
              <div>
                <span>{item?.card?.info?.name}</span> <br />
                <span>
                  {" "}
                  &#8377;{" "}
                  {item?.card?.info?.defaultPrice / 100 ||
                    item?.card?.info?.price / 100}
                </span>{" "}
                <Tag strokeWidth={0} fill="green" size={12} />{" "}
                <span
                  style={{
                    fontSize: "12px",
                    color: "#616161",
                    fontWeight: "600",
                  }}
                >
                  {item.card?.info?.offerTags
                    ? item.card?.info?.offerTags[0]?.title
                    : ""}{" "}
                  {item.card?.info?.offerTags
                    ? item.card?.info?.offerTags[0]?.subTitle
                    : ""}
                </span>
                <br />
                <span style={{ fontSize: "12px" }}>
                  {item.card?.info?.ratings?.aggregatedRating.rating ? (
                    <Star strokeWidth={0} fill="green" size={12} />
                  ) : (
                    ""
                  )}
                  {item.card?.info?.ratings?.aggregatedRating.rating}{" "}
                  {item.card?.info?.ratings?.aggregatedRating.rating
                    ? `(${item.card?.info?.ratings?.aggregatedRating.ratingCountV2})`
                    : ""}
                </span>{" "}
                <br />
                <span style={{ color: "#616161", fontSize: "14px" }}>
                  {item?.card?.info?.description && truncateName(item?.card?.info?.description)}
                </span>
              </div>
              <div></div>
              <div></div>
            </div>
            <div className="item-img-container">
              <img
                className="item-img"
                src={ITEM_IMG_URL + item?.card?.info?.imageId}
                alt=""
              />
              <button onClick={() => handleAddItem(item?.card?.info)} className="add-button">ADD</button>
            </div>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};

export default MenuItemCard;

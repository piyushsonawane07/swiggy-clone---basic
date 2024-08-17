import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredRes, setFilteredRes] = useState([]);
  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // const buttonClick = () => {
  //   const filteredList = listOfRestaurants.filter(
  //     (res) => res.info.avgRating > 4.3
  //   );
  //   setListOfRestaurants(filteredList);
  // };

  const search = () => {
    const lowerCaseSearchText = searchText.toLowerCase();

    let filteredList = listOfRestaurants.filter((res) => 
      res.info.name.toLowerCase().includes(lowerCaseSearchText)
    );

    setFilteredRes(filteredList);
  }

  if(onlineStatus === false) return <div style={{textAlign: 'center', marginTop: '5%'}}><h1>Looks like you are offline🥲. Please check your connection!</h1></div>
  

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* <button
          className="filter-btn"
          onClick={() => {
            buttonClick();
          }}
        >
          Top Rated Restaurants
        </button> */}
        <div className="container">
          <div className="content">
            <h2 className="heading">Find Restaurants</h2>
            <div className="search-wrapper">
              <input
                value={searchText}
                onChange={(e)=>{
                  setSearchText(e.target.value.trim())
                  if(e.target.value==='') setFilteredRes(listOfRestaurants);
                  else search(e.target.value.trim())
                  
                  }}
                type="search"
                placeholder="Search for restaurants, cuisines, or dishes"
                className="search-input"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    search();
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {filteredRes.length!==0?<h3 className="text-gray-600 font-bold" style={{marginLeft: "32px"}}>Top restaurant chains in Pune</h3>:''}
      <div className="res-container">
        {filteredRes.length===0 ? <div style={{marginLeft: '43%'}}><h3>No Restaurant Found !</h3></div> : filteredRes.map((res) => (
          <Link style={{textDecoration: 'none'}} key={res.info.id} to={'/restaurants/'+res.info.id}>
            {res.info.promoted? <RestaurantCardPromoted resData={res}/> : <RestaurantCard resData={res}/>}
            {/* <RestaurantCard   resData={res} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

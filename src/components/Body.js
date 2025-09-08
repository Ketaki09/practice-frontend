import RestrauntCard from "./RestuarantCard";
import { useEffect, useState } from "react";
import "../index.css"
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  // const [filteredRestuarant, setFilteredRestuarant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  },[]);   

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log("json", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log("listOfRestaurants", listOfRestaurants);
    // setFilteredRestuarant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return  listOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className="body"> 

    {/* <div className="filter">  
          <div className="search">
        <input type="text" className="search" placeholder="Search" value={searchText} onChange={(e)=>{setSearchText(e.target.value); console.log(searchText)}}/>
        <button className="search-btn"  onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            // setFilteredRestuarant(filteredList);              
        }}>Search</button>
    </div>
        <button className="filter-btn" onClick={() => {
            const filteredList = listOfRestaurants.filter(
                (res) =>  res.info.avgRatingString > 4.5
            );
            console.log("filteredList", filteredList);
            // setFilteredRestuarant(filteredList);
        }} onMouseOver={() => {console.log("mouse")}}>Top Rated button</button>
         </div> */}
    <div className="res-container">     
        {listOfRestaurants.map((restaurant) => {
        return <Link key={restaurant.info.id} to={"/restuarants/" + restaurant.info.id}><RestrauntCard  resData={restaurant}/></Link> ;
      })}
    </div>
    </div>)
}

export default Body;
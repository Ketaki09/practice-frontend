import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestrauntMenu = () => {

    const [restuarantMenu, setRestuarantMenu] = useState(null);
    const [resMenu, setResMenu] = useState(null);
    const resId = useParams().resId;
    console.log("resId", resId);
    useEffect(() => {
        fetchMenu();
    },[]);
    const fetchMenu = async() => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log("json", json?.data?.cards[2]?.card?.card?.info);
        setRestuarantMenu(json?.data?.cards[2]?.card?.card?.info);
        setResMenu(json?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards);

    }
    
    const {name, cuisines,cloudinaryImageId, costForTwoMessage} = restuarantMenu || {};
    return restuarantMenu === null ? <Shimmer/> : (
        <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(',')}</h3>
        <h3>{costForTwoMessage} for 2</h3>
        <ul>
        {resMenu.map((item) => {
                return <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>
            })}
        </ul>
        
        </div>
    )
}

export default RestrauntMenu;   
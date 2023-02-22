import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "./useRestaurant";
const RestaurantMenu = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    
    const { id } = useParams();
    const restaurantInfo = useRestaurant(id);

    //Early return when restaurantInfo is null
    if(!restaurantInfo)
    return <Shimmer />;

    return (
        <div className="restaurant-menu" >
            <div>
                <h2>{restaurantInfo.name}</h2>
                <img src={`${IMG_CDN_URL}/${restaurantInfo.cloudinaryImageId}`}/>
                <h3>{restaurantInfo.avgRating}</h3>
                <h3>{restaurantInfo.city}</h3>
                <h3>{restaurantInfo.costForTwoMsg}</h3>
            </div>
            <div>
                <ul>

                    {
                        // console.log(Object.values(restaurantInfo?.menu?.items))
                        Object.values(restaurantInfo?.menu?.items).map(item => {
                            // console.log(item)
                            return(
                                <li key={item?.id} > {item?.name}</li>
                                )
                            })
                    }

                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;
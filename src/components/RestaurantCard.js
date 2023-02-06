import { FaStar } from "react-icons/fa";
import {  IMG_CDN_URL } from '../config'

const RestaurantCard=({cloudinaryImageId , name , cuisines , avgRating , slaString , costForTwoString, id})=>(
    <div className="card-container">
        <img className="card-image" alt={name} src={`${IMG_CDN_URL}/${cloudinaryImageId}`} />
        <h3  >{name}</h3>
        <p>{cuisines.slice(0,3).join(', ')}</p>
        <div>
            <p className="rating"> <FaStar size="0.8em"/> {avgRating} </p>
            <p>{slaString}</p>
            <p>{costForTwoString}</p>
        </div>
    </div>
)

export default RestaurantCard;
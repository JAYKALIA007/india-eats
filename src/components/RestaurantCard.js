import { FaStar } from "react-icons/fa";

const RestaurantCard=({imgUrl , name , cuisine , rating , time , price})=>(
    <div className="card-container">
        <img className="card-image" alt={name} src={imgUrl} />
        <h3  >{name}</h3>
        <p>{cuisine}</p>
        <div>
            <p className="rating"> <FaStar size="0.8em"/> {rating} </p>
            <p>{time}</p>
            <p>{price}</p>
        </div>
    </div>
)

export default RestaurantCard;
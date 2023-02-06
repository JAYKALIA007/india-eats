import RestaurantCard from "./RestaurantCard";
// import SearchBar from './SearchBar'
import { restaurantInfo } from '../config'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react'

const filterData = (searchText , restaurants ) =>{
    // console.log(searchText)
    // console.log(restaurants)
    if(searchText === '')
        return restaurantInfo
    const filteredData = restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchText.toLowerCase()));
    return filteredData
}

const Body = () =>{
    const [ searchText , setSearchText ] = useState('')
    const [restaurants, setRestaurants] = useState(restaurantInfo);
    return(
    <>
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search"  
                style={{ 'padding' : '5px' , 'width' : '20%' , 'borderRadius' : '5px' , 'border' : '1px solid grey'}}
                value={searchText}
                onChange={(e)=>{setSearchText(e.target.value)}}
            />
            <FaSearch className="search-icon" onClick={()=>{
                setRestaurants(filterData( searchText , restaurants ))
            }}/>
            {/* {searchText} */}
        </div>
        <div className="body-container" >
            {/* {console.log(restaurantList)} */}
            {restaurants.map(restaurant =>(
                <RestaurantCard {...restaurant} key={restaurant.id}/>
                ))}
        </div>
    </>
)}

export default Body;
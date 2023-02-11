import RestaurantCard from "./RestaurantCard";
// import SearchBar from './SearchBar'
// import { restaurantInfo } from '../config'
import { FaSearch } from "react-icons/fa";
import { useState , useEffect } from 'react'
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const filterData = (searchText , allRestaurants) =>{
    // console.log(searchText)
    // console.log(restaurants)
    if(searchText === '')
        return allRestaurants
    const filteredData = allRestaurants.filter((restaurant) => restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase()));
    return filteredData
}

const Body = () =>{
    const [ searchText , setSearchText ] = useState('')
    const [ filteredRestaurants, setFilteredRestaurants ] = useState([]);
    const [ allRestaurants , setAllRestaurants ] = useState([])


    useEffect(()=>{fetchRestaurantData()} , [])

    async function fetchRestaurantData(){
        const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING')
        const json = await res.json()
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    //early return
    if(!allRestaurants)return null

    return (allRestaurants.length === 0) ? <Shimmer/> : (filteredRestaurants.length === 0 ) ? <h1>No Restaurant Found</h1>:(
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
                setFilteredRestaurants(filterData( searchText , allRestaurants ))
            }}/>
            {/* {searchText} */}
        </div>
        <div className="body-container" >
            {filteredRestaurants.map(restaurant =>(
                // console.log(restaurant.data)
                <Link to= {`restaurant/${restaurant.data.id}`}>
                    <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                </Link>
                ))}
        </div>
    </>
)}

export default Body;
import { useState , useEffect } from 'react'
const useRestaurant = (resId) => {
    const [ restaurantInfo , setRestaurantInfo ] = useState(null);

    useEffect(() => {
        fetchRestaurantInfo()
    },[])

    async function fetchRestaurantInfo() {
        const res = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId=${resId}`);
        const jsonData  = await res.json();
        // console.log(jsonData?.data);
        setRestaurantInfo(jsonData?.data);
    }
    return restaurantInfo;
}

export default useRestaurant;
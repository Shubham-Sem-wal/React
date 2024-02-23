import Card , {WithIsOpen}from "./Cards";
import resList from "../utills/mockData";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";

const Body = () => {


    const [restaurantList , setRestaurantList] = useState([]);
    const [filteredRestaurants , setFilteredRestaurants] = useState([]);

    console.log("this one" , filteredRestaurants);
    
    const TopRatedRestaurants = () => {
        const filterTopRatedRestaurants = restaurantList.filter( (res) => res.info.avgRating >= 4.5 );
        setFilteredRestaurants(filterTopRatedRestaurants);
    }

    const [searchText , setSearchText] = useState("")
    const searchRestaurants = () => {
        const filteredRestuarantsInSearch = restaurantList.filter( (res) => 
            res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurants(filteredRestuarantsInSearch);     
    }

    const CardWithOpenLabel = WithIsOpen(Card);


    useEffect( () =>{

        fetchData();

    } , [] )

    const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);

    setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>looks like you are offline ...</h1>
    }

    return (

        <div className="body">
            <div className=" border-black flex " >
                <div className=" m-2 p-3">
                    <input type="text" className="bg-slate-50 " placeholder="samosa" value={searchText} onChange={ (e) => {
                        setSearchText(e.target.value)
                    } } />
                    <button className="px-4 py-2 bg-green-400 m-4 rounded-lg" onClick={searchRestaurants}>Search</button>
                </div>

                <div className=" m-2 p-4 flex items-center">
                <button className="px-4 py-2 bg-blue-300 m-4 rounded-lg" onClick={TopRatedRestaurants} >Top Rated Restaurants</button>
                </div>
        
            </div>

            <div className="flex flex-wrap">
                {filteredRestaurants.map(restaurant => 
                    <Link style={{ textDecoration: 'none', color:"black"}}
                    key={restaurant.info.id}
                    to={"/restaurants/" + restaurant.info.id }> 

                    {
                        restaurant.info.isOpen ? 
                        (<CardWithOpenLabel resData = {restaurant}/>) :  //higher order component
                        (<Card  resData = {restaurant}/>)
                    }
                    
                    <Card  resData = {restaurant}/> 
                    </Link>
                 
                 )}
            </div>

        </div>
        
    )
}

export default Body;
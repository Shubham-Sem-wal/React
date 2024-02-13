import Card from "./Cards";
import resList from "../utills/mockData";
import { useState } from "react";
// import resList from "../utills/mockData";

const Body = () => {

    const [restaurantList , setRestaurantList] = useState(resList);

    const filteredRes = () => {
        const filteredData = restaurantList.filter( (res) => res.info.avgRating >= 4.5 );
        setRestaurantList(filteredData);
    }


    return (
        <div className="body">
            <button className="btn-class" onClick={filteredRes} >Top Rated Restaurants</button>

            <div className="res-container">

                {
                    restaurantList.map(restaurant => 
                    <Card key={restaurant.info.id} resData = {restaurant}/>)
                }
                
            </div>

        </div>
    )
}

export default Body;
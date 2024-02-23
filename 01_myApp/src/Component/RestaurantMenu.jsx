import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utills/useRestaurantMenu.jsx";

const RestaurantMenu = () => {

    // const [resInfo , setResInfo] = useState("null");

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    // console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards);
    // console.log(itemCards);
    // resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name
    // resInfo?.cards[0]?.card?.card?.info?.name
    // resInfo?.cards[0]?.card?.card?.info?.cuisines.join(",")
    // resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage

    const catagories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)  => c.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        
    );

    console.log("shubham",catagories);
    
    return (
        <>
        <section className="menu-card-section">
            <div className="">

            <h1>{resInfo?.data?.cards[2]?.card?.card?.info?.name}</h1>
            <h4>{resInfo?.data?.cards[2]?.card?.card?.info?.cuisines.join(",")}</h4>
            <h3>{resInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
            <br />
            <h2>Menu</h2>
            <ul>
                    {resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.
                    REGULAR?.cards[2]?.card?.card?.itemCards.map((item) =>( 
                <li key={item.card.info.id}>
                    {item.card.info.name} - {"Rs."}
                    {item.card.info.price/100  || item.card.info.defaultPrice/100}
                </li> 
            ) ) }
            </ul>
            </div>
        </section>
        </>
    );
}

export default RestaurantMenu;
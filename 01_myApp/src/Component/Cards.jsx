import {IMG_CDN_LINK} from "../utills/constants"


const Card = (props) => {

    const {resData} = props;
            
    return (
        <div className="res-card">
            <img className="food-img"
                 src={IMG_CDN_LINK + resData.info.cloudinaryImageId} alt="res-img" />
    
            <h4>{resData.info.name}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.areaName}</h4>
            <h4>{resData.info.costForTwo}</h4>
        

        </div>
    )
}


export default Card;
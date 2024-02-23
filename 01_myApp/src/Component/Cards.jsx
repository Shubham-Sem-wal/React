import {IMG_CDN_LINK} from "../utills/constants"


const Card = (props) => {

    const {resData} = props;
            
    return (
        <div className="m-4 p-2 w-[250px] border bg-slate-100 rounded-lg hover:bg-slate-200">
            
            <img className="rounded"
                 src={IMG_CDN_LINK + resData.info.cloudinaryImageId} alt="res-img" />
    
            <h4 className="font-bold py-4 text-lg">{resData.info.name}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.areaName}</h4>
            <h4>{resData.info.costForTwo}</h4>
        

        </div>
    )
}

// higher order component---------
 export const WithIsOpen = (Card) => {
    return (props) => {
        return (
            <div>
                <label className="absolute , bg-red-600 , text-white m-2 px-2 rounded-lg">Open</label>
                <Card {...props}/>
            </div>
        );

    };
};


export default Card;
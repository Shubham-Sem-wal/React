const Card = (props) => {

    const {resData} = props;
            
    return (
        <div className="res-card">
            <img className="food-img"
                 src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ 
                        resData.info.cloudinaryImageId}
                 alt="" />
    
            <h4>{resData.info.name}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.areaName}</h4>
            <h4>{resData.info.costForTwo}</h4>
        

        </div>
    )
}


export default Card;
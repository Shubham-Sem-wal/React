import { useState } from "react";

const User = (props) => {

    const [Count] = useState(0);
    const [Count1] = useState(1);

 

    return (
        <div className="user-card">
            <h1 style={{color : "red"}}>Count 0 is : {Count}</h1>
            <h1 style={{color : "red"}}>Count  1 is : {Count1}</h1>
            <h2>This is functional component:</h2>
            <h2>{props.Name}</h2>
            <h3>{props.Location}</h3>
            <h3></h3>
        </div>
    );
}

export default User;
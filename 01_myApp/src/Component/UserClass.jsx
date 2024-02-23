import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name : "default",
                location : "default",
            }
        }

        console.log("constructor is called");
    }

    async componentDidMount(){

        const userInfo = await fetch("https://api.github.com/users/hiteshchoudhary");
        const json = await userInfo.json();

        this.setState({
            userInfo : json,
        });

        console.log(json);

    }

    render(){

       const {name , location , avatar_url } = this.state.userInfo;

        console.log("render is called");

        return( 
            <div className="user-card">
                
                <h2>This is class based component:</h2>
                <img src={avatar_url}alt="hello" />
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                
            </div>
            )
    }
}

export default UserClass;
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo:{
                name:'Dummy',
                avatar_url:"Dummy url"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/amankrsingh2001');
        const response = await data.json()
        this.setState({
            userInfo:response,
        })
    }
    
    render(){


        const {name,avatar_url} = this.state.userInfo

        return (
            <div className="user-card">
                <div className="avatar">
                    <img src={avatar_url}/>
                </div>
               <h3>{name}</h3> 
                </div>
        )
    }
}

export default UserClass;
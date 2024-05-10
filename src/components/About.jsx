import React, { useContext } from 'react'
import UserClass from './UserClass'
import UserContext from '../utils/Context'
const About = ()=>{
    const data = useContext(UserContext);
    const {loggedInUser} = data;

    return (<div className='about'>
        <p>{loggedInUser}</p>
        <UserClass/> 
    </div>)
}

export default About
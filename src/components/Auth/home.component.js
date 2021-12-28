// This component is the landing page for the application

import React from "react";
import { useSelector } from "react-redux";


export const Home = () => {
    const user  = useSelector(state => state.user.user)
    
    return ( 
     <div>
         { user && user.username ? <h2>Welcome {user.username}</h2> : <h2>You are not logged in </h2>}
     </div>
    )

}
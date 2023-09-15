import React from "react"
import { CDN_URL } from "../utils/constants"


const RestaurentCard=(props)=>{
    const {resData} =props
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime}= resData?.data 
   
        return (
            <div className='res-card' style={{backgroundColor : "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
           
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h3>{avgRating}</h3>
            <h3>{costForTwo/100} For Two</h3>
            <h4>{deliveryTime} minutes</h4>
            </div>
        )
    
}

export default RestaurentCard
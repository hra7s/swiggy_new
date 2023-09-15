import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constants';

const RestaurantMenu = () => {
    const [resInfo, setResInfo]= useState(null);
//  const params= useParams();
//  console.log(params)
    const {resId} =useParams();
    console.log(resId)

    useEffect(()=>{
fetchMenu();
    },[])

    // if (resInfo.length===0){
    //     return <Shimmer />
    // }

    const fetchMenu=async()=>{
      console.log(MENU_URL+resId)
        const data= await fetch( MENU_URL+resId);
        
        const json = await data.json();
        console.log(json)
        setResInfo(json)

    }

    if (resInfo===null) return <Shimmer/>;

  const { name,cuisines,costForTwo} =resInfo?.data.cards[0]?.card?.card?.info

   const {itemCards}= resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; 
 console.log(itemCards)
  return  (resInfo===null)?<Shimmer/>:(
    <div className='menu'>
           
           <h1>{name}</h1>
           <h2>{cuisines.join(",")}</h2>
           <h2>{"cost for two : "}{costForTwo/100}</h2>
           
           
            <ul>
                {itemCards.map((each)=><li key={each.card.info.id} >{each.card.info.name}-{" Rs "}
                {(each.card.info.price)/100}</li>)}
            </ul>
    </div>
  )
}

export default RestaurantMenu
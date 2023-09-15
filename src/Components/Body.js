import React from "react"
import { useState,useEffect } from "react";
// import resList from "../utils/mockData"
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import RestaurentCard from "./RestaurantCard"


const Body =() =>{
    

 


    const [listOfRestaurant,setListOfRestaurant]=useState([]);
    const [filteredRestaurant, setFilteredRestaurant]=useState([]);
    const [searchText,setSearchText]=useState("");

    useEffect(()=> {
        fetchData();
        // fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=17.385044&lng=78.486671")
        // .then((response)=>{
        //    return response.json()
        //     // console.log(response.data)
        // })
        // .then ((data)=>{
        //     console.log(data)
        //    const finalData = data.data.success.cards?.filter(card => card?.gridWidget?.gridElements?.infoWithStyle?.hasOwnProperty('restaurants'))
        //     let restaurant = []
    
        //     finalData?.forEach(ele => {
        //         restaurant = [...restaurant, ...ele?.gridWidget?.gridElements?.infoWithStyle.restaurants]})
        //     setListOfRestaurant(restaurant)
        //     console.log(restaurant)
        // })
       
       
    }, []) 

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const data_one = await data.json();
        
        // console.log(data_one?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setListOfRestaurant(data_one.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(data_one.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    // conditonal rendering 

    // if (listOfRestaurant.length ===0){
    //     return <Shimmer/>;

    // }
   // 

    // 
    // 
    return (listOfRestaurant?.length===0)? (<Shimmer/>) : (
        <div className='body'>
            <div className='filter'>
                  <div className="search">
            <input type="text" 
            className="search-box"
            value={searchText}
            onChange={(e)=>{
                console.log(e.target.value)
                    setSearchText(e.target.value)
                }}
             /> 
            <button onClick={
                ()=>{const filteredRestaurant=listOfRestaurant.filter((res)=>res.info.name.toUpperCase().includes(searchText.toUpperCase()))
                 //setListOfRestaurant(filteredRestaurant)
              setFilteredRestaurant(filteredRestaurant)
                 console.log(filteredRestaurant)} }>Search</button>
            </div>
            
            <button className="filter-btn"
                onClick={()=>{
                    console.log("clicked")
                    //filter logic need to write here
                    let filteredList=filteredRestaurant.filter(resData=> resData?.info?.avgRating>=4)
                    // setListOfRestaurant(filteredList);
                    setFilteredRestaurant(filteredList)
                 console.log(filteredList)
                    }}>
                Top Rated Restaurant
            </button>
            </div>
            <div className='res-container'>
           
            {/* when ever you are looping you need to pass a key  */}
            {
                filteredRestaurant.map((restaurant) => (
                  <Link to={"./restaurants/" +restaurant?.info?.id}> <RestaurentCard key={restaurant?.info?.id} resData={restaurant} /></Link> 
                ))
            }
             
               
         
            </div>
        </div>
    )
}

export default Body
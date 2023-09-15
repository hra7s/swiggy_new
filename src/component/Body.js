import React from "react"
import { useState,useEffect } from "react";
// import resList from "../utils/mockData"
import RestaurentCard from "./RestaurantCard"



const Body =() =>{
    
    const [listOfRestaurant,setListOfRestaurant]=useState([
    {
        data: {    
            id : "334475",
            name: "paradise",
            cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
            cuisines : ["Burgers","Biryani", "American", "Snacks"],
            costForTwo: 40000,
            deliveryTime : 36,
            avgRating : "3.8"
        }
    },
    {
        data: {    
            id : "334476",
            name: "Eat panchavat",
            cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
            cuisines : ["Burgers","Biryani", "American", "Snacks"],
            costForTwo: 40000,
            deliveryTime : 20,
            avgRating : "4.3"
        }
    },
    {
        data: {    
            id : "334477",
            name: "Dominos",
            cloudinaryImageId: "uughlfbnykdtvefbmhdm",
            cuisines : ["Burgers","Biryani", "American", "Snacks"],
            costForTwo: 40000,
            deliveryTime : 40,
            avgRating : "4.4"
        }
    },
    {
        data: {    
            id : "334478",
            name: "kritunga",
            cloudinaryImageId: "uughlfbnykdtvefbmhdm",
            cuisines : ["Burgers","Biryani", "American", "Snacks"],
            costForTwo: 40000,
            deliveryTime : 40,
            avgRating : "3.9"
        }
    },
    {
        data: {    
            id : "334479",
            name: "Suprabhat",
            cloudinaryImageId: "uughlfbnykdtvefbmhdm",
            cuisines : ["Burgers","Biryani", "American", "Snacks"],
            costForTwo: 40000,
            deliveryTime : 40,
            avgRating : "3.5"
        }
    }]);

 useEffect(()=>{
    fetchData();
   
 }, []);

 const fetchData= async()=>{
const data= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=17.385044&lng=78.486671");

const json = await data.json();
console.log(json);
 }
    return (
        <div className='body'>
            <div className='search'>
                <button className="filter-btn" 
                onClick={()=>{
                    let filteredList=listOfRestaurant.filter(resData=> resData.data.avgRating>4)
                    setListOfRestaurant(filteredList)
                    }}>
                Top Rated Restaurant

                </button>
            </div>
            <div className='res-container'>
           
            {
                listOfRestaurant.map((restaurant) => (
                    <RestaurentCard key={restaurant.data.id} resData={restaurant} />
                ))
            }
            </div>
        </div>
    )
}


export default Body










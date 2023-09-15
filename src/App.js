import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About';
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import './index.css'
import Contact from './Components/Contact';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';

const App= ()=>{
    return (
        <div className="app">
        <Header />
        <Outlet />
=======
import Header from './component/Header';
import Body from './component/Body';
import './index.css'

const AppLayout= ()=>{
    return (
        <div className="app">
        <Header />
        <Body /> 
>>>>>>> a143bba696526e7356328c2f83e5556f88cebac4
        </div>
    )
}


<<<<<<< HEAD

 const appRouter= createBrowserRouter([
   {
        path:'/',
        element : <App />,
        children:[
            {
                path:'/',
                element : <Body/>
            },
            {
                path:'/about',
                element : <About/>
            },
            {
                path:'/contact',
                element : <Contact/>
            },
            {
                path:"/restaurants/:resId",
                element :<RestaurantMenu/>
            }
        ],
        errorElement : <Error />
    },
    

])




 export default App

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
=======
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
>>>>>>> a143bba696526e7356328c2f83e5556f88cebac4

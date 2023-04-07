import React, { useContext, useEffect } from 'react'
import { Toaster } from 'react-hot-toast';
import { useNavigate,useLocation,matchRoutes  } from 'react-router-dom';
import JourneyContext from '../context/JourneyContext';
import RedBusNavbar from './Navbar';
import Search from './Search';

const Journey=({Component})=> {
  const navigate=useNavigate();
  const location = useLocation()
  console.log("look here",location);
  const {from,to}=useContext(JourneyContext);
  useEffect(
    ()=>
    {
        
        if(!localStorage.getItem("token"))
            navigate("/login");
        else if(!from||!to)
        {
            navigate("/");
        }
    },[]
  )
  return (
    <div>
         <Toaster />
      <RedBusNavbar />
      {location.pathname === "/book-ticket" ? null : <Search />}
        <Component />
    </div>
  );
}

export default Journey;
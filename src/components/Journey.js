import React, { useContext, useEffect, useState } from 'react'
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
  const [redirect, setRedirect] = useState(true);
  useEffect(
    ()=>
    {
        
        if(!localStorage.getItem("token")) {
          console.log('redirecting to login');
          navigate("/login");

        }
        else if(!from||!to)
        {
            setRedirect(false);
            // navigate("/");
        }
    },[]
  )
  return (
      !redirect &&
      <div>
          <Toaster />
          <RedBusNavbar />
            {location.pathname === "/book-ticket" || location.pathname === "/book-seats"  ? null : <Search />}
          <Component />
        {/* {location.pathname === "/book-seats" ? null : <Search />} */}
    </div>
  );
}

export default Journey;
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import RouteTextContext from "./RouteTextContext";

const RouteTextState = (props) => {
  const [currentPage, setCurrentPage] = useState("");

  // console.log(window.location.pathname)
  // console.log(currentPage)
 
  // const changeText=()=>{
    // if (window.location.pathname === "/") {
    //     setCurrentPage("Dashboard");
    //     console.log(currentPage)
    //   } else if (window.location.pathname === "/contacts") {
    //     setCurrentPage("Contacts")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/messages") {
    //     setCurrentPage("Message")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/calls") {
    //     setCurrentPage("Calls")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/messages") {
    //     setCurrentPage("Message")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/messages") {
    //     setCurrentPage("Message")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/messages") {
    //     setCurrentPage("Message")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/messages") {
    //     setCurrentPage("Message")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/messages") {
    //     setCurrentPage("Message")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/messages") {
    //     setCurrentPage("Message")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/messages") {
    //     setCurrentPage("Message")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/messages") {
    //     setCurrentPage("Message")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/messages") {
    //     setCurrentPage("Message")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/messages") {
    //     setCurrentPage("Message")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/messages") {
    //     setCurrentPage("Message")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/messages") {
    //     setCurrentPage("Message")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/messages") {
    //     setCurrentPage("Message")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/messages") {
    //     setCurrentPage("Message")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/messages") {
    //     setCurrentPage("Message")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/messages") {
    //     setCurrentPage("Message")
    //     console.log(currentPage)
    //   }else if (window.location.pathname === "/messages") {
    //     setCurrentPage("Message")
    //     console.log(currentPage)
    //   }
  // }
  // useEffect(()=>{
  //   changeText()
  // },[currentPage,setCurrentPage])

  const setPage = () => {
    if(window.location.pathname==="/"){
      // console.log("Yes")
      setCurrentPage("Dashboard")
    }else if(window.location.pathname==="/messages"){
      // console.log("No")
      setCurrentPage("Messages")
    }
    else if(window.location.pathname==="/contacts"){
      setCurrentPage("Contacts")
    }else if(window.location.pathname==="/calls"){
      setCurrentPage("Calls")
    }else if(window.location.pathname==="/events"){
      setCurrentPage("Events")
    }else if(window.location.pathname==="/photo"){
      setCurrentPage("Photos")
    }else if(window.location.pathname==="/video"){
      setCurrentPage("Videos")
    }else if(window.location.pathname==="/wifi-networks"){
      setCurrentPage("Wi-Fi Networks")
    }else if(window.location.pathname==="/keyword-tracking"){
      setCurrentPage("Keyword Tracking")
    }else if(window.location.pathname==="/keylogger"){
      setCurrentPage("Keylogger")
    }else if(window.location.pathname==="/installed-apps"){
      setCurrentPage("Installed Applications")
    }else if(window.location.pathname==="/gps-locations"){
      setCurrentPage("GPS Locations")
    }else if(window.location.pathname==="/geo-fencing"){
      setCurrentPage("GEO Fencing")
    }
    // console.log(currentPage);
  };

  useEffect(() => {
    setPage();
  }, [currentPage,window.location.pathname]);


  return (
    <RouteTextContext.Provider value={{ currentPage, setCurrentPage,setPage }}>
      {props.children}
    </RouteTextContext.Provider>
  );
};

export default RouteTextState;

import { Box, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Calls from "../Components/Calls";
import Contacts from "../Components/Contacts";
import Events from "../Components/Events";
import Gps from "../Components/Gps";
import Dashboard from "../Components/Home/Dashboard";
import InstalledApps from "../Components/InstalledApps";
import Keylogger from "../Components/Keylogger";
import KeywordTracking from "../Components/KeywordTracking";
import Login from "../Components/Login/Login";
import Message from "../Components/Message";
import Photo from "../Components/Photo";
import Sidebar from "../Components/Sidebar/Sidebar";
import Signup from "../Components/Signup/Signup";
import Video from "../Components/Video";
import Wifi from "../Components/Wifi";
import SizeContext from "../Context/SizeContext";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  const { width } = useContext(SizeContext);
  // const id = useParams()
  // console.log(id)
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            {width < 1280 ? (
              <Dashboard />
            ) : (
              <Flex>
                <Box
                  position={"sticky"}
                  width={"20%"}
                  h={"100vh"}
                  bg={"#29313c"}
                >
                  <Sidebar />
                </Box>
                <Box width={"80%"} h={"100vh"}>
                  <Dashboard />
                </Box>
              </Flex>
            )}
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/contacts"
        element={
          <PrivateRoute>
            {width < 1280 ? (
              <Contacts />
            ) : (
              <Flex>
                <Box
                  position={"sticky"}
                  width={"20%"}
                  h={"100vh"}
                  bg={"#29313c"}
                >
                  <Sidebar />
                </Box>
                <Box width={"80%"} h={"100vh"}>
                  <Contacts />
                </Box>
              </Flex>
            )}
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/messages"
        element={
          <PrivateRoute>
            {width < 1280 ? (
              <Message />
            ) : (
              <Flex>
                <Box
                  position={"sticky"}
                  width={"20%"}
                  h={"100vh"}
                  bg={"#29313c"}
                >
                  <Sidebar />
                </Box>
                <Box width={"80%"} h={"100vh"}>
                  <Message />
                </Box>
              </Flex>
            )}
          </PrivateRoute>
        }
      ></Route>
<Route
        path="/calls"
        element={
          <PrivateRoute>
            {width < 1280 ? (
              <Calls />
            ) : (
              <Flex>
                <Box
                  position={"sticky"}
                  width={"20%"}
                  h={"100vh"}
                  bg={"#29313c"}
                >
                  <Sidebar />
                </Box>
                <Box width={"80%"} h={"100vh"}>
                  <Calls />
                </Box>
              </Flex>
            )}
          </PrivateRoute>
        }
      ></Route>      
      <Route
        path="/events"
        element={
          <PrivateRoute>
            {width < 1280 ? (
              <Events />
            ) : (
              <Flex>
                <Box
                  position={"sticky"}
                  width={"20%"}
                  h={"100vh"}
                  bg={"#29313c"}
                >
                  <Sidebar />
                </Box>
                <Box width={"80%"} h={"100vh"}>
                  <Events />
                </Box>
              </Flex>
            )}
          </PrivateRoute>
        }
      ></Route> 
      <Route
        path="/photo"
        element={
          <PrivateRoute>
            {width < 1280 ? (
              <Photo />
            ) : (
              <Flex>
                <Box
                  position={"sticky"}
                  width={"20%"}
                  h={"100vh"}
                  bg={"#29313c"}
                >
                  <Sidebar />
                </Box>
                <Box width={"80%"} h={"100vh"}>
                  <Photo />
                </Box>
              </Flex>
            )}
          </PrivateRoute>
        }
      ></Route>  
      <Route
        path="/video"
        element={
          <PrivateRoute>
            {width < 1280 ? (
              <Video />
            ) : (
              <Flex>
                <Box
                  position={"sticky"}
                  width={"20%"}
                  h={"100vh"}
                  bg={"#29313c"}
                >
                  <Sidebar />
                </Box>
                <Box width={"80%"} h={"100vh"}>
                  <Video />
                </Box>
              </Flex>
            )}
          </PrivateRoute>
        }
      ></Route>  
      <Route
        path="/wifi-networks"
        element={
          <PrivateRoute>
            {width < 1280 ? (
              <Wifi />
            ) : (
              <Flex>
                <Box
                  position={"sticky"}
                  width={"20%"}
                  h={"100vh"}
                  bg={"#29313c"}
                >
                  <Sidebar />
                </Box>
                <Box width={"80%"} h={"100vh"}>
                  <Wifi />
                </Box>
              </Flex>
            )}
          </PrivateRoute>
        }
      ></Route>  
      <Route
        path="/gps-locations"
        element={
          <PrivateRoute>
            {width < 1280 ? (
              <Gps />
            ) : (
              <Flex>
                <Box
                  position={"sticky"}
                  width={"20%"}
                  h={"100vh"}
                  bg={"#29313c"}
                >
                  <Sidebar />
                </Box>
                <Box width={"80%"} h={"100vh"}>
                  <Gps />
                </Box>
              </Flex>
            )}
          </PrivateRoute>
        }
      ></Route>  
      <Route
        path="/keylogger"
        element={
          <PrivateRoute>
            {width < 1280 ? (
              <Keylogger />
            ) : (
              <Flex>
                <Box
                  position={"sticky"}
                  width={"20%"}
                  h={"100vh"}
                  bg={"#29313c"}
                >
                  <Sidebar />
                </Box>
                <Box width={"80%"} h={"100vh"}>
                  <Keylogger />
                </Box>
              </Flex>
            )}
          </PrivateRoute>
        }
      ></Route>  
      <Route
        path="/installed-apps"
        element={
          <PrivateRoute>
            {width < 1280 ? (
              <InstalledApps />
            ) : (
              <Flex>
                <Box
                  position={"sticky"}
                  width={"20%"}
                  h={"100vh"}
                  bg={"#29313c"}
                >
                  <Sidebar />
                </Box>
                <Box width={"80%"} h={"100vh"}>
                  <InstalledApps />
                </Box>
              </Flex>
            )}
          </PrivateRoute>
        }
      ></Route>  
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;

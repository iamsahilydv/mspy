import { Box, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Home/Dashboard";
import Login from "../Components/Login/Login";
import Sidebar from "../Components/Sidebar/Sidebar";
import Signup from "../Components/Signup/Signup";
import SizeContext from "../Context/SizeContext";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  const { width } = useContext(SizeContext);
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
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;

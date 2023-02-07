import "./App.css";
import Dashboard from "./Components/Home/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { Box, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import LoginContext from "./Context/LoginContext";
import AllRoutes from "./AllRoutes/AllRoutes";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const { loginStatus } = useContext(LoginContext);
  return (
    <div className="App">
      {/* <Routes>
        <Route index element={<Login />} />
        <Route path="home" element={<Dashboard />} />
        <Route path="signup" element={<Signup />} />
      </Routes> */}
      {/* <Flex>
        <Box position={"sticky"} width={"20%"} h={"100vh"} bg={"#29313c"}><Sidebar/></Box>
        <Box width={"80%"} h={"100vh"}  bg={"white"}><Dashboard /></Box>
      </Flex> */}
      {console.log(loginStatus)}
      {loginStatus === false ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      ) : (
        <Flex>
          <Box position={"sticky"} width={"20%"} h={"100vh"} bg={"#29313c"}>
            <Sidebar />
          </Box>
          <Box width={"80%"} h={"100vh"}>
            {/* <Routes>
              <Route index element={<Dashboard />} />
            </Routes> */}
            <AllRoutes />
          </Box>
        </Flex>
        // <Sidebar />
        // <Routes>
        //   <Route index element={<Dashboard />} />
        // </Routes>
      )}
    </div>
  );
}

export default App;

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import LoginState from "";
import style from "./Header.module.css";
const Login=false
const Header = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");
  // const { setLoginStatus } = useContext(LoginState);
  const navigate = useNavigate();
  return (
    <Flex
      position={"relative"}
      // border={"1px solid red"}
      justifyContent={"space-between"}
      bg={""}
      boxShadow={
        "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;"
      }
      style={{ width: "100%", height: "3.5rem" }}
    >
      <Box
        ml={"10px"}
        fontSize={"22px"}
        color={"gray.500"}
        alignSelf={"center"}
        w={"30%"}
        bg={"transparent"}
      >
        <Text>{currentPage}</Text>
      </Box>
      <Box
        position={"absolute"}
        margin={"auto"}
        zIndex={"0"}
        left={"0"}
        right={"0"}
        alignSelf={"center"}
        className={style.header}
        border={"1px solid #2ecc71"}
        h={"50%"}
        w={"30%"}
      ></Box>
      <Box
        alignSelf={"center"}
        zIndex={"10"}
        //   alignItems={"center"}
        //   border={"1px solid cyan"}
        h={"70%"}
        w={"30%"}
        textTransform={"uppercase"}
        fontSize={"20px"}
        lineHeight={"35px"}
        textAlign={"center"}
        bg={"#2ecc71"}
        color={"white"}
        cursor={"pointer"}
      >
        I want discount
      </Box>
      <Box
        color={"black"}
        bg={"transparent"}
        mr={"10px"}
        alignSelf={"center"}
        w={"30%"}
        textAlign={"right"}
        // border={"1px solid red"}
      >
        <Button
          bg={"red"}
          color={"white"}
          onClick={() => {
            localStorage.setItem("Login",JSON.stringify(Login))
            alert("Logout Successfuly!")
            navigate("/");
            window.location.reload()
          }}
        >
          Logout
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;

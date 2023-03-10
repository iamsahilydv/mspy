import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import RouteTextContext from "../../Context/RouteTextContext";
import style from "./Sidebar.module.css";

const SidebarSubContent = ({ icon, name, path }) => {
  const navigate = useNavigate();
  const {currentPage,setPage}= useContext(RouteTextContext)

  useEffect(()=>{
    setPage()
  },[window.location.href])
  return (
    <Box
      fontSize={"18px"}
      height={"3.125rem"}
      bg={"#29313c"}
      // border={"1px solid red"}
      // margin={"auto"}
      p={"2"}
    >
      <Flex
      className={style.flex}
    //   border={"1px solid red"}
        // justifyContent={"space-between"}
        cursor={"pointer"}
        onClick={() => {
          // setPage()
          // console.log("clicked")
          navigate(path);
        }}
      >
        <Box
          //   border={"1px solid cyan"}
          w={"20%"}
        >
          <Text fontSize={"27px"} textAlign={"center"} className={style.icon}>
            {icon}
          </Text>
        </Box>
        <Box w={"80%"}>
          {" "}
          <Text
            //  border={"1px solid green"}
            bg={"#29313c"}
          >
            {name}
          </Text>
        </Box>
        {/* <Text>{logo}</Text> */}
      </Flex>
    </Box>
  );
};

export default SidebarSubContent;

import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Header.module.css";
const Drawer1 = ({ icon, name, path }) => {
  const navigate = useNavigate();
  return (
    <Box
      fontSize={"18px"}
      height={"3.125rem"}
      //   bg={"#29313c"}
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
          navigate(path);
        }}
      >
        <Box 
        // border={"1px solid cyan"} 
        // w={{ base: "15%", md: "10%", lg: "5%" }}
        >
          <Text
            noOfLines={1}
            fontSize={"27px"}
            color={"green.400"}
            textAlign={"center"}
            className={style.icon}
          >
            {icon}
          </Text>
        </Box>
        <Box w={"80%"}>
          <Text
            noOfLines={1}
            ml={"20px"}
            // border={"1px solid green"}
            w={"fit-content"}
            // bg={"#29313c"}
          >
            {name}
          </Text>
        </Box>
        {/* <Text>{logo}</Text> */}
      </Flex>
    </Box>
  );
};

export default Drawer1;

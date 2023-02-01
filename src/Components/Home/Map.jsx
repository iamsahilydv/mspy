import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
const mapData = [
  {
    id: 1,
    location: "316 N Washington St, Watertown, WI, 54801",
    date: "Apr 9, 2020",
    time: "6:59 PM",
  },
  {
    id: 2,
    location: "316 N Washington St, Watertown, WI, 54801",
    date: "Apr 9, 2020",
    time: "6:59 PM",
  },
  {
    id: 3,
    location: "316 N Washington St, Watertown, WI, 54801",
    date: "Apr 9, 2020",
    time: "6:59 PM",
  },
  {
    id: 4,
    location: "316 N Washington St, Watertown, WI, 54801",
    date: "Apr 9, 2020",
    time: "6:59 PM",
  },
  {
    id: 5,
    location: "316 N Washington St, Watertown, WI, 54801",
    date: "Apr 9, 2020",
    time: "6:59 PM",
  },
];

const Map = () => {
  return (
    <Stack
      height={{ base: "auto", lg: "650px" }}
      width={"98%"}
      margin={"auto"}
      boxSizing={"border-box"}
      // border={"1px solid cyan"}
      pl={"20px"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      position={"relative"}
    >
      <Text fontSize={"28px"} mb={"5px"}>
        Last Locations
      </Text>
      <Flex
        style={{ width: "100%", margin: "auto" }}
        h={{base:"auto",lg:"600px"}}
        // border={"1px solid cyan"}
        direction={{ base: "column", lg: "row" }}
        gap={"20px"}
        // mb={"50px"}
      >
        <Box
          width={{ base: "98%", lg: "78%" }}
          h={{ base: "400px", lg: "95%" }}
          border={"1px solid red"}
          textAlign={"center"}
        >
          Space for Map
        </Box>
        <Box mb={{ base: "35px", lg: "auto" }}>
          {mapData &&
            mapData.map((el) => (
              <Box key={el.id} mb={"30px"}>
                <Text fontSize={"18px"}>{el.location}</Text>
                <Text color={"gray.500"}>
                  {el.date} {el.time}
                </Text>
              </Box>
            ))}
        </Box>
      </Flex>
      <Text
        textTransform={"uppercase"}
        position={"absolute"}
        fontSize={"18px"}
        fontWeight={"bold"}
        right={"50px"}
        bottom={"20px"}
        color={"cyan.600"}
      >
        All Locations
      </Text>
    </Stack>
  );
};

export default Map;

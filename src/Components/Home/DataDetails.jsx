import { Box, Flex, Progress, Text } from "@chakra-ui/react";
import React from "react";
import style from "./Dashboard.module.css";


const dataMessage = [
  {
    id: 1,
    name: "Matty",
    times: 16,
    mobile: 9090909090,
  },
  {
    id: 2,
    name: "Dad",
    times: 9,
    mobile: 8080809090,
  },
  {
    id: 3,
    name: "Mom",
    times: 4,
    mobile: 2020203030,
  },
];
const dataCallingContacts = [
    {
      id: 1,
      name: "Teresa",
      times: 5,
      mobile: 9999999999,
    },
    {
      id: 2,
      name: "Lisa",
      times: 2,
      mobile: 8076790987,
    },
    {
      id: 3,
      name: "Jessica",
      times: 4,
      mobile: 2455648887,
    },
  ];
  const dataViewedWebsite = [
    {
      id: 1,
      Topic: "The Free Encyclopedia",
      times: 4,
      url: "https://wikipedia.org/",
    },
    {
      id: 2,
      Topic: "Music for Everyone",
      times: 7,
      url: "https://www.spotify.com/",
    },
    {
      id: 3,
      Topic: "Gmail | Inbox",
      times: 2,
      url: "https://mail.google.com/",
    },
  ];

const DataDetails = () => {
    const navigate =()=>{
      alert("going to next page...");
    }
  return (
    <Flex style={{width:"100%", justifyContent:"space-around"}}>
      <Box
        // border={"1px solid red"}
        padding={"15px"}
        w={"32%"}
        position={"relative"}
        boxSizing={"border-box"}
        h={"420px"}
        className={style.BoxInner}
      >
        <Text className={style.HeadingDetail}>Most Messaging Contacts</Text>

        {dataMessage &&
          dataMessage.map((el) => (
            <Box p={"20px"} pb={"0"} position={"relative"} key={el.id}>
              <Flex
                
                
                justifyContent={"space-between"}
              >
                <Box width={"50%"} >
                  <Text fontSize={"18px"}  >{el.mobile}</Text>
                  <Text color={"gray.500"} mb={"10px"} >{el.name}</Text>
                </Box>
                <Box color={"gray.500"}>{el.times} times</Box>
              </Flex>
              <Progress colorScheme={"cyan"} value={el.times} max={16} />
            </Box>
          ))}
          <Box  textTransform={"uppercase"} position={"absolute"} bottom={"30px"} right={"30px"} color={"cyan.600"} fontWeight={"bold"} fontSize={"18px"} onClick={()=>{navigate()}}>All Messages</Box>
      </Box>
      <Box
        // border={"1px solid red"}
        padding={"15px"}
        w={"32%"}
        position={"relative"}
        boxSizing={"border-box"}
        h={"420"}
        className={style.BoxInner}
      >
        <Text className={style.HeadingDetail}>Most Calling Contacts</Text>

        {dataCallingContacts &&
          dataCallingContacts.map((el) => (
            <Box p={"20px"} pb={"0"} position={"relative"} key={el.id}>
              <Flex
                
                
                justifyContent={"space-between"}
              >
                <Box width={"50%"} >
                  <Text fontSize={"18px"}  >{el.mobile}</Text>
                  <Text color={"gray.500"} mb={"10px"} >{el.name}</Text>
                </Box>
                <Box color={"gray.500"}>{el.times} times</Box>
              </Flex>
              <Progress colorScheme={"green"} value={el.times} max={5} />
            </Box>
          ))}
          <Box  textTransform={"uppercase"} position={"absolute"} bottom={"30px"} right={"30px"} color={"cyan.600"} fontWeight={"bold"} fontSize={"18px"} onClick={()=>{navigate()}}>All Calls</Box>
      </Box>
      <Box
        // border={"1px solid red"}
        padding={"15px"}
        w={"32%"}
        position={"relative"}
        boxSizing={"border-box"}
        h={"420px"}
        className={style.BoxInner}
      >
        <Text className={style.HeadingDetail}>Most Messaging Contacts</Text>

        {dataViewedWebsite &&
          dataViewedWebsite.map((el) => (
            <Box p={"20px"} pb={"0"} position={"relative"} key={el.id}>
              <Flex
                
                
                justifyContent={"space-between"}
              >
                <Box width={"50%"} >
                  <Text fontSize={"18px"}  >{el.Topic}</Text>
                  <Text color={"gray.500"} mb={"10px"} >{el.url}</Text>
                </Box>
                <Box color={"gray.500"}>{el.times} times</Box>
              </Flex>
              <Progress colorScheme={"pink"} value={el.times} max={7} />
            </Box>
          ))}
          <Box  textTransform={"uppercase"} position={"absolute"} bottom={"30px"} right={"30px"} color={"cyan.600"} fontWeight={"bold"} fontSize={"18px"} onClick={()=>{navigate()}}>All Websites</Box>
      </Box>
    </Flex>
  );
};

export default DataDetails;

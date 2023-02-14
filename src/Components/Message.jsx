import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import Header from "./Header/Header";
import style from "./Message.module.css";
const ContactsData = [
  {
    id: 1,
    name: "Matty",
    number: 3459209123,
    message: [
      {
        id: 1,
        message: "idk, maybe in an hour or so 1",
        time: 10.5,
        date: 6,
        month: "Apr",
        year: 2021,
        format: "AM",
        sender: "Self",
      },
      {
        id: 2,
        message: "idk, maybe in an hour or so 2",
        time: 10.5,
        date: 6,
        month: "Apr",
        year: 2021,
        format: "AM",
        sender: "Self",
      },
      {
        id: 3,
        message: "idk, maybe in an hour or so 3",
        time: 10.5,
        date: 6,
        month: "Apr",
        year: 2021,
        format: "AM",
        sender: "Other",
      },
      {
        id: 4,
        message: "idk, maybe in an hour or so 4",
        time: 10.5,
        date: 6,
        month: "Apr",
        year: 2021,
        format: "AM",
        sender: "Other",
      },
      {
        id: 5,
        message: "idk, maybe in an hour or so 5",
        time: 10.5,
        date: 6,
        month: "Apr",
        year: 2021,
        format: "AM",
        sender: "Other",
      },

      {
        id: 6,
        message: "idk, maybe in an hour or so 6",
        time: 10.5,
        date: 6,
        month: "Apr",
        year: "2021",
        sender: "Self",
      },
      {
        id: 7,
        message: "idk, maybe in an hour or so 7",
        time: 10.5,
        date: 6,
        month: "Apr",
        year: "2021",
        sender: "Self",
      },
      {
        id: 8,
        message: "idk, maybe in an hour or so  8",
        time: 10.5,
        date: 6,
        month: "Apr",
        year: "2021",
        sender: "Other",
      },
      {
        id: 9,
        message: "idk, maybe in an hour or so  9",
        time: 10.5,
        date: 6,
        month: "Apr",
        year: "2021",
        sender: "Self",
      },
      {
        id: 10,
        message: "idk, maybe in an hour or so  10",
        time: 10.5,
        date: 6,
        month: "Apr",
        year: "2021",
        sender: "Other",
      },
    ],
    image: "",
  },
  //   {
  //     id: 2,
  //     name: "",
  //     number: 3487422201,
  //     messageSelf: [
  //       {
  //         id: 1,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 2,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 3,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 4,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 5,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //     ],
  //     messageFront: [
  //       {
  //         id: 1,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 2,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 3,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 4,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 5,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //     ],
  //     image: "",
  //   },
  //   {
  //     id: 3,
  //     name: "D",
  //     number: 3444231987,
  //     messageSelf: [
  //       {
  //         id: 1,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 2,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 3,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 4,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 5,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //     ],
  //     messageFront: [
  //       {
  //         id: 1,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 2,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 3,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 4,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 5,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //     ],
  //     image: "",
  //   },
  //   {
  //     id: 4,
  //     name: "Amanda",
  //     number: 3467502842,
  //     messageSelf: [
  //       {
  //         id: 1,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 2,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 3,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 4,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 5,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //     ],
  //     messageFront: [
  //       {
  //         id: 1,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 2,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 3,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 4,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 5,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //     ],
  //     image: "",
  //   },
  //   {
  //     id: 5,
  //     name: "Uncle Sam",
  //     number: 3422001288,
  //     messageSelf: [
  //       {
  //         id: 1,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 2,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 3,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 4,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 5,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //     ],
  //     messageFront: [
  //       {
  //         id: 1,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 2,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 3,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 4,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 5,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //     ],
  //     image: "",
  //   },
  //   {
  //     id: 6,
  //     name: "Lisa",
  //     number: 3476549120,
  //     messageSelf: [
  //       {
  //         id: 1,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 2,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 3,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 4,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 5,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //     ],
  //     messageFront: [
  //       {
  //         id: 1,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 2,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 3,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 4,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //       {
  //         id: 5,
  //         message: "idk, maybe in an hour or so",
  //         time: 10.5,
  //         date: 6,
  //         month: "Apr",
  //         year: 2021,
  //         format: "AM",
  //       },
  //     ],
  //     image: "",
  //   },
  //   {
  //     id: 7,
  //     name: "Matty",
  //     number: 3434857946,
  //     email: "matty@email.com",
  //     image: "",
  //   },
  //   {
  //     id: 8,
  //     name: "Klaus",
  //     number: 3497685700,
  //     email: "klausinho@mail.com",
  //     image: "",
  //   },
  //   {
  //     id: 9,
  //     name: "Jessica",
  //     number: 3459209123,
  //     email: "jess20@yourmail.com",
  //     image: "",
  //   },
  //   {
  //     id: 10,
  //     name: "Jessica",
  //     number: 3459209123,
  //     email: "jess20@yourmail.com",
  //     image: "",
  //   },
  //   {
  //     id: 11,
  //     name: "Jessica",
  //     number: 3459209123,
  //     email: "jess20@yourmail.com",
  //     image: "",
  //   },
  //   {
  //     id: 12,
  //     name: "Jessica",
  //     number: 3459209123,
  //     email: "jess20@yourmail.com",
  //     image: "",
  //   },
  //   {
  //     id: 13,
  //     name: "Jessica",
  //     number: 3459209123,
  //     email: "jess20@yourmail.com",
  //     image: "",
  //   },
  //   {
  //     id: 14,
  //     name: "Jessica",
  //     number: 3459209123,
  //     email: "jess20@yourmail.com",
  //     image: "",
  //   },
  //   {
  //     id: 15,
  //     name: "Jessica",
  //     number: 3459209123,
  //     email: "jess20@yourmail.com",
  //     image: "",
  //   },
  //   {
  //     id: 16,
  //     name: "Jessica",
  //     number: 3459209123,
  //     email: "jess20@yourmail.com",
  //     image: "",
  //   },
];

const Message = () => {
  const [messagessData, setMessagesData] = useState(ContactsData);
  const [currentMessgae, setCurrentMessage] = useState(messagessData[0]);
  //   const [currentName,setCurrentName]= useState(currentContact.name)
  console.log(currentMessgae);
  const changeProfile = (el) => {
    // console.log(el)
    setCurrentMessage(el);
  };
  return (
    <Stack
    // border={"10px solid cyan"}
    >
      <section>
        <Header />
      </section>
      <Box></Box>
      {/* <Box>{ContactsData && ContactsData.map((el) => <SingleContact key={el.id} name={el.name} />)}</Box> */}
      <section>
        <Flex
          w={"98%"}
          mt={"10px"}
          //   border={"1px solid red"}
          height={"90vh"}
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          m={"auto"}
          //   gap={3}
        >
          <Box
            h={"100%"}
            ml={"10px"}
            border={"1px solid #eeedf0"}
            w={"25%"}
            overflowY={"scroll"}
            color={"black"}
            position={"relative"}
          >
            {messagessData &&
              messagessData.map((el) => (
                <Box
                  key={el.id}
                  boxSizing={"border-box"}
                  cursor={"pointer"}
                  //   border={"1px solid gray"}
                  borderBottom={"1px solid #eeedf0"}
                  h={"110px"}
                  noOfLines={1}
                  onClick={() => {
                    changeProfile(el);
                  }}
                >
                  {el.name === "" ? (
                    <Text
                      color={"gray.600"}
                      noOfLines={1}
                      fontSize={"18px"}
                      p={"15px"}
                      // border={"1px solid red"}
                      lineHeight={"20px"}
                      alignItems={"center"}
                    >
                      {el.number}
                    </Text>
                  ) : (
                    <Text
                      // border={"1px solid red"}
                      color={"gray.600"}
                      noOfLines={1}
                      fontSize={"18px"}
                      p={"15px"}
                      // border={"1px solid red"}
                      lineHeight={"18px"}
                      alignItems={"center"}
                    >
                      {el.name}
                    </Text>
                  )}
                  <Text noOfLines={1} ml={5}>
                    hi this is message
                  </Text>
                  <Text
                    noOfLines={1}
                    // ml={{ base: "20%", md: "25%", lg: "50%" }}
                    textAlign={"right"}
                    mr={5}
                    ml={"20%"}
                  >
                    {console.log(el)}
                    {el.message[0].month},{el.message[0].date},
                    {el.message[0].year} {el.message[0].time}{" "}
                    {el.message[0].format}
                  </Text>
                </Box>
              ))}
            <Box
              height={"10%"}
              w={"100%"}
              border={"1px solid #eeedf0"}
              position={"absolute"}
              bottom={"0"}
              bg={"#eeedf0"}
            ></Box>
          </Box>
          <Box
            //   border={"1px solid red"}
            w={"75%"}
            overflowY={"scroll"}
          >
            {/* <Box
              w={"20%"}
              fontSize={"150px"}
              m={"auto"}
              textAlign={"center"}
              alignItems={"center"}
              border={"1px solid cyan"}
            >
              <Box
                // border={"1px solid cyan"}
                width={"fit-content"}
                margin={"auto"}
                textAlign={"center"}
              >
                {currentContact.image == "" ? (
                  <IoMdPerson />
                ) : (
                  <Image src={currentContact.image} />
                )}
              </Box>
            </Box>
            <Box w={"70%"} m={"auto"} mt={"30px"} lineHeight={"30px"}>
              <Text
                noOfLines={1}
                textAlign={"center"}
                fontSize={"22px"}
                fontWeight={"bold"}
              >
                {currentContact.name}
              </Text>
              <Text noOfLines={1} mt={"20px"}>
                Numbers :
              </Text>
              <Text noOfLines={1} color={"gray.500"}>
                {currentContact.number}
              </Text>
              <Text noOfLines={1} mt={"20px"}>
                Email :
              </Text>
              <Text noOfLines={1} color={"gray.500"}>
                {currentContact.email}
              </Text>
            </Box> */}
            {/* {currentMessgae.message &&
              currentMessgae.message.map((el) => (
                <Box>
                  {el.sender === "Self" ? (
                    <Box
                      position={"relative"}
                      className={style.messageBoxSelf}
                      color={"white"}
                      bg={"#01b0fe"}
                      ml={"30%"}
                    //   border={"1px solid red"}
                      mb={4}
                      mr={5}
                      p={2}
                    >
                      <Text bg={"transparent"} mb={5}>
                        {el.message}
                      </Text>
                      <Text
                        bg={"transparent"}
                        textAlign={"right"}
                        mr={5}
                        noOfLines={1}
                      >
                        {el.month},{el.date},{el.year} {el.time} {el.format}
                      </Text>
                    </Box>
                  ) : (
                    <Box
                      position={"relative"}
                      className={style.messageBoxOther}
                      color={"black"}
                      bg={"#eeedf0"}
                      mr={"30%"}
                    //   border={"1px solid red"}
                      mb={4}
                      ml={5}
                      p={2}
                    >
                        <Text>{el.name}</Text>
                      <Text bg={"transparent"} mb={5}>
                        {el.message}
                      </Text>
                      <Text
                        bg={"transparent"}
                        textAlign={"right"}
                        mr={5}
                        noOfLines={1}
                      >
                        {el.month},{el.date},{el.year} {el.time} {el.format}
                      </Text>
                    </Box>
                  )}
                </Box>
              ))} */}
            {currentMessgae.message &&
              currentMessgae.message.map((el) => (
                <Box>
                  {el.sender === "Self" ? (
                    <Box
                      position={"relative"}
                      className={style.messageBoxSelf}
                      color={"white"}
                      bg={"#01b0fe"}
                      ml={"30%"}
                      //   border={"1px solid red"}
                      mb={4}
                      mr={5}
                      p={2}
                    >
                      <Text bg={"transparent"} mb={5}>
                        {el.message}
                      </Text>
                      <Text
                        bg={"transparent"}
                        textAlign={"right"}
                        mr={5}
                        noOfLines={1}
                      >
                        {el.month},{el.date},{el.year} {el.time} {el.format}
                      </Text>
                    </Box>
                  ) : (
                    <Flex>
                      <Box
                        position={"relative"}
                        className={style.messageBoxOther}
                        color={"black"}
                        bg={"#eeedf0"}
                        mr={"30%"}
                        //   border={"1px solid red"}
                        mb={4}
                        ml={5}
                        p={2}
                      >
                        <Text bg={"transparent"} fontWeight={"bold"} mb={2}>
                          {currentMessgae.name}
                        </Text>
                        <Text bg={"transparent"} mb={5}>
                          {el.message}
                        </Text>
                        <Text
                          bg={"transparent"}
                          textAlign={"right"}
                          mr={5}
                          noOfLines={1}
                        >
                          {el.month},{el.date},{el.year} {el.time} {el.format}
                        </Text>
                      </Box>
                    </Flex>
                  )}
                </Box>
              ))}
          </Box>
        </Flex>
      </section>
    </Stack>
  );
};

export default Message;

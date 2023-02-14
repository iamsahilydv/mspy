import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import Header from "./Header/Header";
import SingleContact from "./SingleContact";

const ContactsData = [
  {
    id: 1,
    name: "Jessica",
    number: 3459209123,
    email: "jess20@yourmail.com",
    image: "",
  },
  {
    id: 2,
    name: "Thomas Brown",
    number: 3487422201,
    email: "jess20@yourmail.com",
    image: "",
  },
  {
    id: 3,
    name: "D",
    number: 3444231987,
    email: "jess20@yourmail.com",
    image: "",
  },
  {
    id: 4,
    name: "Amanda",
    number: 3467502842,
    email: "jess20@yourmail.com",
    image: "",
  },
  {
    id: 5,
    name: "Uncle Sam",
    number: 3422001288,
    email: "SamWalt@gmail.com",
    image: "",
  },
  {
    id: 6,
    name: "Lisa",
    number: 3476549120,
    email: "superliza@hotmail.com",
    image: "",
  },
  {
    id: 7,
    name: "Matty",
    number: 3434857946,
    email: "matty@email.com",
    image: "",
  },
  {
    id: 8,
    name: "Klaus",
    number: 3497685700,
    email: "klausinho@mail.com",
    image: "",
  },
  {
    id: 9,
    name: "Jessica",
    number: 3459209123,
    email: "jess20@yourmail.com",
    image: "",
  },
  {
    id: 10,
    name: "Jessica",
    number: 3459209123,
    email: "jess20@yourmail.com",
    image: "",
  },
  {
    id: 11,
    name: "Jessica",
    number: 3459209123,
    email: "jess20@yourmail.com",
    image: "",
  },
  {
    id: 12,
    name: "Jessica",
    number: 3459209123,
    email: "jess20@yourmail.com",
    image: "",
  },
  {
    id: 13,
    name: "Jessica",
    number: 3459209123,
    email: "jess20@yourmail.com",
    image: "",
  },
  {
    id: 14,
    name: "Jessica",
    number: 3459209123,
    email: "jess20@yourmail.com",
    image: "",
  },
  {
    id: 15,
    name: "Jessica",
    number: 3459209123,
    email: "jess20@yourmail.com",
    image: "",
  },
  {
    id: 16,
    name: "Jessica",
    number: 3459209123,
    email: "jess20@yourmail.com",
    image: "",
  },
];

const Contacts = () => {
  const [contactsData, setContactsData] = useState(ContactsData);
  const [currentContact, setCurrentContact] = useState(contactsData[0]);
  //   const [currentName,setCurrentName]= useState(currentContact.name)
  console.log(currentContact);
  const changeProfile = (el) => {
    // console.log(el)
    setCurrentContact(el);
  };
  //   useEffect(() => {
  //     changeProfile();
  //   }, [currentContact]);
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
          m={"auto"}
        >
          <Box
            h={"100%"}
            ml={"10px"}
            // border={"1px solid red"}
            w={"25%"}
            overflowY={"scroll"}
          >
            {contactsData &&
              contactsData.map((el) => (
                <Box
                  key={el.id}
                  boxSizing={"border-box"}
                  cursor={"pointer"}
                  border={"1px solid gray"}
                  h={"60px"}
                  noOfLines={1}
                  onClick={() => {
                    changeProfile(el);
                  }}
                >
                  <Text
                    color={"gray.600"}
                    noOfLines={1}
                    fontSize={"18px"}
                    p={"15px"}
                    // border={"1px solid red"}
                    lineHeight={"100%"}
                    alignItems={"center"}
                  >
                    {el.name}
                  </Text>
                </Box>
              ))}
          </Box>
          <Box border={"1px solid red"} w={"75%"}>
            <Box
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
                <Text noOfLines={1} textAlign={"center"} fontSize={"22px"} fontWeight={"bold"}>{currentContact.name}</Text>
                <Text noOfLines={1} mt={"20px"}>Numbers :</Text>
                <Text noOfLines={1} color={"gray.500"}>{currentContact.number}</Text>
                <Text noOfLines={1} mt={"20px"}>Email :</Text>
                <Text noOfLines={1} color={"gray.500"}>{currentContact.email}</Text>
            </Box>
          </Box>
        </Flex>
      </section>
    </Stack>
  );
};

export default Contacts;

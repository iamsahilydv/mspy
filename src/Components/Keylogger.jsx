import {
  Box,
  Select,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Header from "./Header/Header";

const data = [
  {
    id: 1,
    app: "Instagram",
    text: "Hi, How are you?",
    month: "Apr",
    year: "2021",
    date: "21",
    hour: "6",
    minutes: "19",
    format: "PM",
  },
  {
    id: 2,
    app: "Instagram",
    text: "Hi, How are you?",
    month: "Apr",
    year: "2021",
    date: "21",
    hour: "6",
    minutes: "19",
    format: "PM",
  },
  {
    id: 3,
    app: "Instagram",
    text: "Hi, How are you?",
    month: "Apr",
    year: "2021",
    date: "21",
    hour: "6",
    minutes: "19",
    format: "PM",
  },
  {
    id: 4,
    app: "Instagram",
    text: "Hi, How are you?",
    month: "Apr",
    year: "2021",
    date: "21",
    hour: "6",
    minutes: "19",
    format: "PM",
  },
  {
    id: 5,
    app: "Instagram",
    text: "Hi, How are you?",
    month: "Apr",
    year: "2021",
    date: "21",
    hour: "6",
    minutes: "19",
    format: "PM",
  },
  {
    id: 6,
    app: "Instagram",
    text: "Hi, How are you?",
    month: "Apr",
    year: "2021",
    date: "21",
    hour: "6",
    minutes: "19",
    format: "PM",
  },
  {
    id: 7,
    app: "Instagram",
    text: "Hi, How are you?",
    month: "Apr",
    year: "2021",
    date: "21",
    hour: "6",
    minutes: "19",
    format: "PM",
  },
];

const Keylogger = () => {
  const [keyloggerData, setKeyloggerData] = useState(data);
  return (
    <Stack>
      <section>
        <Header />
      </section>
      <section style={{ padding: "10px" }}>
        <Box
          // border={"1px solid red"}
          h={"85vh"}
        >
          <Box
            mt={2}
            h={16}
            p={2}
            w={44}
            //   border={"1px solid red"}
            bg={"#e0e0e0"}
          >
            <Text bg={"transparent"}>App Name</Text>
            <select
              // w={"100%"}
              style={{
                width: "100%",
                height: "60%",
                backgroundColor: "transparent",
              }}
              disabled
              //   bg={"gray.300"}
              // focusBorderColor={"red"}
              // iconSize={20}
              // iconColor={"red"}
              //   style={{ WebkitAppearance: "none" }}
              //   border={""}
              // p={1}
              //   h={10}
            >
              <option value="all">All</option>
            </select>
          </Box>
          <Box
            // border={"1px solid cyan"}
            mt={5}
            h={"85%"}
            overflowY={"auto"}
            boxShadow={
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
            }
            position={"relative"}
          >
            <TableContainer
            //   border={"1px solid blue"}
              position={"relative"}
              overflowY={"scroll"}
            >
              <Table
                colorScheme={"gray"}
                // border={"1px solid red"}
                // position={"relative"}
                // position={"relative"}
              >
                <Thead
                  position={"sticky"}
                  top={"0"}
                  fontWeight={"bold"}
                  bg={"#fafafa"}
                  h={"70px"}
                  // position={"sticky"} top={"0"}
                >
                  <Tr bg={"#fafafa"} position={"sticky"} top={"0"}>
                    <Th
                      position={"static"}
                      top={"0"}
                      bg={"transparent"}
                      fontSize={"16px"}
                    >
                      App
                    </Th>
                    <Th
                      position={"static"}
                      top={"0"}
                      bg={"transparent"}
                      fontSize={"16px"}
                    >
                      Text
                    </Th>
                    {/* <Th fontSize={"16px"}></Th> */}
                    {/* <Th fontSize={"16px"}>Latitude</Th> */}
                    <Th
                      position={"static"}
                      top={"0"}
                      bg={"transparent"}
                      fontSize={"16px"}
                      alignSelf={"end"}
                      //   border={"1px solid red"}
                      textAlign={"right"}
                    >
                      Created at
                    </Th>
                  </Tr>
                </Thead>
                <Tbody
                  fontSize={"14px"}
                //   border={"1px solid red"}
                  overflowY={"scroll"}
                >
                  {keyloggerData &&
                    keyloggerData.map((el) => (
                      <Tr key={el.id}>
                        {/* {console.log(el.status)} */}
                        <Td>{el.app}</Td>
                        <Td>{el.text}</Td>
                        <Td textAlign={"right"}>
                          {el.month} {el.date}, {el.year} {el.hour}:{el.minutes}{" "}
                          {el.format}
                        </Td>
                        {/* <Td>{el.latitude}</Td>
                        <Td textAlign={"right"}>{el.longitude}</Td> */}
                      </Tr>
                    ))}
                  {/* <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr> */}
                </Tbody>
                {/* <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot> */}
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </section>
    </Stack>
  );
};

export default Keylogger;

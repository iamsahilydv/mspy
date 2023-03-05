import { CalendarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
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
import React, { useState } from "react";
import Calender from "./Calender";
import Header from "./Header/Header";

const EventsData = [
  {
    id: 1,
    title: "Matty's birthday",
    description: "Order a present for Matty",
    location: "316 N Washington St, Watertown, WI, 54801",
    dateStart: 21,
    monthStart: "Mar",
    yearStart: 2021,
    hourStart: 7,
    minutesStart: "38",
    formatStart: "AM",
    dateEnd: 22,
    monthEnd: "Mar",
    yearEnd: 2021,
    hourEnd: 9,
    minutesEnd: "00",
    formatEnd: "AM",
  },
  {
    id: 2,
    title: "Matty's birthday",
    description: "Order a present for Matty",
    location: "316 N Washington St, Watertown, WI, 54801",
    dateStart: 21,
    monthStart: "Mar",
    yearStart: 2021,
    hourStart: 7,
    minutesStart: "38",
    formatStart: "AM",
    dateEnd: 22,
    monthEnd: "Mar",
    yearEnd: 2021,
    hourEnd: 9,
    minutesEnd: "00",
    formatEnd: "AM",
  },
  {
    id: 3,
    title: "Matty's birthday",
    description: "Order a present for Matty",
    location: "316 N Washington St, Watertown, WI, 54801",
    dateStart: 21,
    monthStart: "Mar",
    yearStart: 2021,
    hourStart: 7,
    minutesStart: "38",
    formatStart: "AM",
    dateEnd: 22,
    monthEnd: "Mar",
    yearEnd: 2021,
    hourEnd: 9,
    minutesEnd: "00",
    formatEnd: "AM",
  },
  {
    id: 4,
    title: "Matty's birthday",
    description: "Order a present for Matty",
    location: "316 N Washington St, Watertown, WI, 54801",
    dateStart: 21,
    monthStart: "Mar",
    yearStart: 2021,
    hourStart: 7,
    minutesStart: "38",
    formatStart: "AM",
    dateEnd: 22,
    monthEnd: "Mar",
    yearEnd: 2021,
    hourEnd: 9,
    minutesEnd: "00",
    formatEnd: "AM",
  },
  {
    id: 5,
    title: "Matty's birthday",
    description: "Order a present for Matty",
    location: "316 N Washington St, Watertown, WI, 54801",
    dateStart: 21,
    monthStart: "Mar",
    yearStart: 2021,
    hourStart: 7,
    minutesStart: "38",
    formatStart: "AM",
    dateEnd: 22,
    monthEnd: "Mar",
    yearEnd: 2021,
    hourEnd: 9,
    minutesEnd: "00",
    formatEnd: "AM",
  },
];

const getTime = () => {};

const Events = () => {
  const [events, setEvents] = useState(EventsData);
  return (
    <Stack>
      <section>
        <Header />
      </section>
      <Calender />
      <section>
        <Box
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
          }
          h={"80vh"}
          w={"98%"}
          m={"auto"}
          overflowY={"scroll"}
          // border={"1px solid cyan"}
        >
          <TableContainer>
            <Table
              colorScheme={"gray"}
              // border={"1px solid red"}
              // position={"relative"}
            >
              <Thead
                h={"70px"}
                // position={"sticky"} top={"0"}
              >
                <Tr justifyContent={"space-evenly"}>
                  <Th fontSize={"16px"} w={"20%"}>
                    Title
                  </Th>
                  <Th fontSize={"16px"} w={"50px"}>
                    Description
                  </Th>
                  <Th fontSize={"16px"} w={"20%"}>
                    Location
                  </Th>
                  <Th fontSize={"16px"} w={"20%"}>
                    Started at
                  </Th>
                  <Th
                    fontSize={"16px"}
                    w={"20%"}
                    // alignSelf={"end"}
                    // border={"1px solid red"}
                    textAlign={"center"}
                  >
                    Ended at
                  </Th>
                </Tr>
              </Thead>
              <Tbody fontSize={"14px"}>
                {events &&
                  events.map((el) => (
                    <Tr>
                      <Td w={"20%"}> <Text>{el.title}</Text> </Td>
                      <Td w={"20%"}>{el.description}</Td>
                      <Td w={"20%"}>{el.location}</Td>
                      <Td w={"20%"}>
                        {el.monthStart} {el.dateStart}, {el.yearStart}{" "}
                        {el.hourStart}:{el.minutesStart} {el.formatStart}
                      </Td>
                      <Td w={"20%"} textAlign={"right"}>
                        {el.monthEnd} {el.dateEnd}, {el.yearEnd} {el.hourEnd}:
                        {el.minutesEnd} {el.formatEnd}
                      </Td>
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
      </section>
    </Stack>
  );
};

export default Events;

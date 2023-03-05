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
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Calender from "./Calender";
import Header from "./Header/Header";

const CallData = [
  {
    id: 1,
    name: "D",
    number: 3489889898,
    status: "Missed",
    duration: 0,
    date: 31,
    month: "Mar",
    year: 2021,
    hour: 2,
    minutes: "38",
    format: "PM",
  },
  {
    id: 2,
    name: "Sahil",
    number: 898989797,
    status: "Outgoing",
    duration: 50,
    date: 31,
    month: "Mar",
    year: 2021,
    hour: 2,
    minutes: "00",
    format: "PM",
  },
  {
    id: 3,
    name: "D",
    number: 3489889898,
    status: "Missed",
    duration: 0,
    date: 31,
    month: "Mar",
    year: 2021,
    hour: 2,
    minutes: "38",
    format: "AM",
  },
  {
    id: 4,
    name: "D",
    number: 3489889898,
    status: "Missed",
    duration: 0,
    date: 31,
    month: "Mar",
    year: 2021,
    hour: 2,
    minutes: "38",
    format: "AM",
  },
  {
    id: 5,
    name: "D",
    number: 3489889898,
    status: "Missed",
    duration: 0,
    date: 31,
    month: "Mar",
    year: 2021,
    hour: 2,
    minutes: "38",
    format: "AM",
  },
  {
    id: 6,
    name: "D",
    number: 3489889898,
    status: "Missed",
    duration: 0,
    date: 31,
    month: "Mar",
    year: 2021,
    hour: 2,
    minutes: "38",
    format: "AM",
  },
  {
    id: 7,
    name: "D",
    number: 3489889898,
    status: "Missed",
    duration: 0,
    date: 31,
    month: "Mar",
    year: 2021,
    hour: 2,
    minutes: "38",
    format: "AM",
  },
  {
    id: 8,
    name: "D",
    number: 3489889898,
    status: "Missed",
    duration: 0,
    date: 31,
    month: "Mar",
    year: 2021,
    hour: 2,
    minutes: "38",
    format: "PM",
  },
  {
    id: 9,
    name: "Sahil",
    number: 898989797,
    status: "Outgoing",
    duration: 50,
    date: 31,
    month: "Mar",
    year: 2021,
    hour: 2,
    minutes: "00",
    format: "PM",
  },
  {
    id: 10,
    name: "D",
    number: 3489889898,
    status: "Missed",
    duration: 0,
    date: 31,
    month: "Mar",
    year: 2021,
    hour: 2,
    minutes: "38",
    format: "AM",
  },
  {
    id: 11,
    name: "D",
    number: 3489889898,
    status: "Missed",
    duration: 0,
    date: 31,
    month: "Mar",
    year: 2021,
    hour: 2,
    minutes: "38",
    format: "AM",
  },
  {
    id: 12,
    name: "D",
    number: 3489889898,
    status: "Missed",
    duration: 0,
    date: 31,
    month: "Mar",
    year: 2021,
    hour: 2,
    minutes: "38",
    format: "AM",
  },
  {
    id: 13,
    name: "D",
    number: 3489889898,
    status: "Missed",
    duration: 0,
    date: 31,
    month: "Mar",
    year: 2021,
    hour: 2,
    minutes: "38",
    format: "AM",
  },
  {
    id: 14,
    name: "D",
    number: 3489889898,
    status: "Missed",
    duration: 0,
    date: 31,
    month: "Mar",
    year: 2021,
    hour: 2,
    minutes: "38",
    format: "AM",
  },
];

const getTime = () => {};

const Calls = () => {
  const [calls, setCalls] = useState(CallData);
  const url = window.location.href;
  function getLastPart(url) {
    const parts = url.split("/");
    return parts.at(-1);
  }
  return (
    <Stack>
      <section>
        <Header />
      </section>
      <section>
        <Calender />
        <Box
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
          }
          h={"80vh"}
          w={"98%"}
          m={"auto"}
          overflowY={"scroll"}
        >
          <TableContainer>
            <Table
              colorScheme={"gray"}
              // border={"1px solid red"}
              // position={"relative"}
            >
              <Thead
                fontWeight={"bold"}
                h={"70px"}
                // position={"sticky"} top={"0"}
              >
                <Tr>
                  <Th fontSize={"16px"}>State</Th>
                  <Th fontSize={"16px"}>Number</Th>
                  <Th fontSize={"16px"}>Name</Th>
                  <Th fontSize={"16px"}>Duration</Th>
                  <Th
                    fontSize={"16px"}
                    alignSelf={"end"}
                    // border={"1px solid red"}
                    textAlign={"right"}
                  >
                    Date
                  </Th>
                </Tr>
              </Thead>
              <Tbody fontSize={"14px"}>
                {calls &&
                  calls.map((el) => (
                    <Tr key={el.id}>
                      {/* {console.log(el.status)} */}
                      <Td>{el.status}</Td>
                      <Td>{el.number}</Td>
                      <Td>{el.name}</Td>
                      <Td>{el.duration}</Td>
                      <Td textAlign={"right"}>
                        {el.month} {el.date}, {el.year} {el.hour}:{el.minutes}{" "}
                        {el.format}
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

export default Calls;

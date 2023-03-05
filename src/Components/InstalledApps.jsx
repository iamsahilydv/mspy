import {
  Box,
  Stack,
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
  Tbody,
  Td,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Calender from "./Calender";
import Header from "./Header/Header";
const EventsData = [
  {
    id: 1,
    img: "https://demo.mspy.com/0fa05737aa3490513ade93f15fafeec6.png",
    title: "Whatsapp",
  },
  {
    id: 2,
    img: "data:image/png;base64,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",
    title: "Snapchat",
  },
  {
    id: 3,
    img: "https://demo.mspy.com/4ab42722cb33f87dd73cc6ca6bf2574c.png",
    title: "Instagram",
  },
  {
    id: 4,
    img: "data:image/png;base64,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",
    title: "Facebook",
  },
  {
    id: 5,
    img: "https://demo.mspy.com/0f025b0cdc87556061a4356d95945cc2.png",
    title: "TInder",
  },
];

const InstalledApps = () => {
  const [events, setEvents] = useState(EventsData);
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
                    App
                  </Th>
                  <Th fontSize={"16px"} w={"50px"}>
                    Title
                  </Th>
                  {/* <Th fontSize={"16px"} w={"20%"}>
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
                  </Th> */}
                </Tr>
              </Thead>
              <Tbody fontSize={"14px"}>
                {events &&
                  events.map((el) => (
                    <Tr h={"70px"}>
                      <Td w={"20%"}>
                        {" "}
                        <Image h={"40px"} src={el.img} />
                      </Td>
                      <Td w={"20%"}>{el.title}</Td>
                      {/* <Td w={"20%"}>{el.location}</Td>
                      <Td w={"20%"}>
                        {el.monthStart} {el.dateStart}, {el.yearStart}{" "}
                        {el.hourStart}:{el.minutesStart} {el.formatStart}
                      </Td>
                      <Td w={"20%"} textAlign={"right"}>
                        {el.monthEnd} {el.dateEnd}, {el.yearEnd} {el.hourEnd}:
                        {el.minutesEnd} {el.formatEnd}
                      </Td> */}
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

export default InstalledApps;

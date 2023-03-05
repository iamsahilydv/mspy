import {
  Box,
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
    name: "Home",
    BSSID: "24:a4:3c:9e:d2:84",
    latitude: "43.677293",
    longitude: "-70.307087",
    date: 31,
    month: "Mar",
    year: 2021,
    hour: 2,
    minutes: "38",
    format: "PM",
  },
  {
    id: 2,
    name: "Home",
    BSSID: "24:a4:3c:9e:d2:84",
    latitude: "43.677293",
    longitude: "-70.307087",
    date: 31,
    month: "Mar",
    year: 2021,
    hour: 2,
    minutes: "38",
    format: "PM",
  },
  {
    id: 3,
    name: "Home",
    BSSID: "24:a4:3c:9e:d2:84",
    latitude: "43.677293",
    longitude: "-70.307087",
    date: 31,
    month: "Mar",
    year: 2021,
    hour: 2,
    minutes: "38",
    format: "PM",
  },
  {
    id: 4,
    name: "Home",
    BSSID: "24:a4:3c:9e:d2:84",
    latitude: "43.677293",
    longitude: "-70.307087",
    date: 31,
    month: "Mar",
    year: 2021,
    hour: 2,
    minutes: "38",
    format: "PM",
  },
];

const Wifi = () => {
  const [calls, setCalls] = useState(CallData);
  return (
    <Stack>
      <section>
        <Header />
      </section>
      <section>
        <Calender />
      </section>
      <section>
        <Stack h={"75vh"}>
          <Box
            boxShadow={
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
            }
            h={"90vh"}
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
                    <Th fontSize={"16px"}>BSSID</Th>
                    <Th fontSize={"16px"}>Name</Th>
                    <Th fontSize={"16px"}>Connected at</Th>
                    <Th fontSize={"16px"}>Latitude</Th>
                    <Th
                      fontSize={"16px"}
                      alignSelf={"end"}
                      // border={"1px solid red"}
                      textAlign={"right"}
                    >
                      Longitude
                    </Th>
                  </Tr>
                </Thead>
                <Tbody fontSize={"14px"}>
                  {calls &&
                    calls.map((el) => (
                      <Tr key={el.id}>
                        {/* {console.log(el.status)} */}
                        <Td>{el.BSSID}</Td>
                        <Td>{el.name}</Td>
                        <Td>
                          {el.month} {el.date}, {el.year} {el.hour}:{el.minutes}{" "}
                          {el.format}
                        </Td>
                        <Td>{el.latitude}</Td>
                        <Td textAlign={"right"}>{el.longitude}</Td>
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
        </Stack>
      </section>
    </Stack>
  );
};

export default Wifi;

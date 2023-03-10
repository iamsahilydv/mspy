import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
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

const Maps = () => {
  const [center, setCenter] = useState({ lat: 13.08422, lng: 80.248357 });
  const ZOOM_LEVEL = 9;
  return (
    <Stack
      height={{ base: "auto", lg: "650px" }}
      box-shadow= "rgba(0, 0, 0, 0.15) 0px 5px 25px;"
      width={"98%"}
      bg={"white"}
      margin={"auto"}
      boxSizing={"border-box"}
      // border={"1px solid cyan"}
      p={"20px"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      position={"relative"}
    >
      <Text bg={"white"} fontSize={"28px"} mb={"5px"}>
        Last Locations
      </Text>
      <Flex bg={"white"}
        style={{ width: "100%", margin: "auto" }}
        h={{ base: "auto", lg: "600px" }}
        // border={"1px solid cyan"}
        direction={{ base: "column", lg: "row" }}
        gap={"20px"}
        // mb={"50px"}
      >
        <Box bg={"white"}
          width={{ base: "98%", lg: "78%" }}
          h={{ base: "400px", lg: "95%" }}
          // border={"1px solid red"}
          textAlign={"center"}
        >
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.4211830048!2d77.00727791507819!3d28.43671728249545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17e8bfffffff%3A0xdb108da17afb495b!2sBig%20Boy%20Toyz%20Ltd!5e0!3m2!1sen!2sin!4v1675371586871!5m2!1sen!2sin" width="100%" height="100%" ></iframe> */}
          <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.5707158279547!2d-88.72940188451697!3d43.19751757913967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88042b726597ef91%3A0xcc6398cce8337917!2s316%20N%20Washington%20St%2C%20Watertown%2C%20WI%2053094%2C%20USA!5e0!3m2!1sen!2sin!4v1675356698769!5m2!1sen!2sin" allowFullScreen width="100%" height="100%"  loading="lazy"></iframe>
          {/* <Map center={center} zoom={ZOOM_LEVEL}>
            <TileLayer url={OsmProvider.maptiler.url} attribution={OsmProvider.maptiler.attribution} />
          </Map> */}
          {/* <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer> */}
        </Box>
        <Box bg={"white"} mb={{ base: "35px", lg: "auto" }}>
          {mapData &&
            mapData.map((el) => (
              <Box bg={"white"} key={el.id} mb={"30px"}>
                <Text bg={"white"} fontSize={"18px"}>{el.location}</Text>
                <Text bg={"white"} color={"gray.500"}>
                  {el.date} {el.time}
                </Text>
              </Box>
            ))}
        </Box>
      </Flex>
      <Text bg={"white"}
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

export default Maps;

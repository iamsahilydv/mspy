import { CalendarIcon, DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Calender from "./Calender";
import Header from "./Header/Header";
import style from "./video.module.css";

const PhotosData = [
  {
    id: 1,
    url: "https://demo.mspy.com/assets/video/video-1.mp4#t=0.001",
    date: "21",
    month: "Mar",
    year: "2021",
    hour: "12",
    minutes: "30",
    second: "22",
    format: "AM",
  },
  {
    id: 2,
    url: "https://demo.mspy.com/assets/video/video-1.mp4#t=0.001",
    date: "21",
    month: "Mar",
    year: "2021",
    hour: "12",
    minutes: "30",
    second: "22",
    format: "AM",
  },
  {
    id: 3,
    url: "https://demo.mspy.com/assets/video/video-1.mp4#t=0.001",
    date: "21",
    month: "Mar",
    year: "2021",
    hour: "12",
    minutes: "30",
    second: "22",
    format: "AM",
  },
  {
    id: 4,
    url: "https://demo.mspy.com/assets/video/video-1.mp4#t=0.001",
    date: "21",
    month: "Mar",
    year: "2021",
    hour: "12",
    minutes: "30",
    second: "22",
    format: "AM",
  },
  {
    id: 5,
    url: "https://demo.mspy.com/assets/video/video-1.mp4#t=0.001",
    date: "21",
    month: "Mar",
    year: "2021",
    hour: "12",
    minutes: "30",
    second: "22",
    format: "AM",
  },
];

const Video = () => {
  const [photos, setPhotos] = useState(PhotosData);
  return (
    <Stack>
      <section>
        <Header />
      </section>
      <section>
        <Calender />
      </section>
      {/* <section > */}
      <SimpleGrid
        columns={[1, null, 2, 3, 4]}
        spacing={3}
        p={3}
        // border={"1px solid red"}
        h={"80vh"}
        overflowY={"scroll"}
      >
        {/* <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box> */}
        {photos &&
          photos.map((el) => (
            <Box
              key={el.id}
              h={{ base: "250px" }}
              w={{ base: "" }}
              boxSizing={"border-box"}
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
              }
              //   border={"1px solid red"}
              // ml={5}
              // mr={5}
            >
              <iframe src={el.url} className={style.iframe} allowFullScreen />
              <Flex
                h={16}
                justifyContent={"space-between"}
                alignContent={"center"}
              >
                <Text
                  ml={2}
                  fontSize={"14px"}
                  alignSelf={"center"}
                  // border={"1px solid red"}
                  as={"p"}
                  color={"gray.500"}
                >
                  {el.year}-{el.month}-{el.date} {el.hour}:{el.minutes}:
                  {el.second} {el.format}
                </Text>{" "}
                {/* <Button
                  bg={"transparent"}
                  borderRadius={"50%"}
                  h={12}
                  w={12}
                  // border={"1px solid red"}
                  alignSelf={"center"}
                  mr={2}
                >
                  <DownloadIcon bg={"transparent"} />
                </Button> */}
              </Flex>
            </Box>
          ))}
      </SimpleGrid>
      {/* </section> */}
    </Stack>
  );
};

export default Video;

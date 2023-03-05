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
} from "@chakra-ui/react";
import React from "react";

const Calender = () => {
  return (
    <Box
      // border={"1px solid red"}
      h={"70px"}
    >
      <Menu>
        <MenuButton
          m={"10px"}
          h={"50px"}
          w={"50px"}
          borderRadius={"50%"}
          border={"none"}
          as={IconButton}
          aria-label="Options"
          icon={<CalendarIcon />}
          variant="outline"
        />
        <MenuList
          // border={"1px solid red"}
          w={{ base: "50vw", md: "510px" }}
        >
          <MenuItem onClick={() => {}}>All Time</MenuItem>
          <MenuItem onClick={() => {}}>Last 60 Days</MenuItem>
          <MenuItem onClick={() => {}}>Last 30 Days</MenuItem>
          <MenuItem onClick={() => {}}>Last 14 Days</MenuItem>
          <MenuItem onClick={() => {}}>Last 10 Days</MenuItem>
          <MenuItem onClick={() => {}}>Today</MenuItem>
          {/* <MenuItem>OK</MenuItem> */}
          <MenuDivider />
          <MenuItem
            _hover={{ backgroundColor: "white" }}
            w={{ base: "90%", md: "250px" }}
            display={""}
            closeOnSelect={false}
            onClick={() => {}}
          >
            {" "}
            <label htmlFor="">From</label> <Input type={"date"} />
          </MenuItem>
          <MenuItem
            _hover={{ backgroundColor: "white" }}
            w={{ base: "90%", md: "250px" }}
            display={""}
            closeOnSelect={false}
            onClick={() => {}}
          >
            {" "}
            <label htmlFor="">To</label> <Input type={"date"} />
          </MenuItem>
          <MenuItem _hover={{ backgroundColor: "white" }}>
            <Button mr={"10%"}>OK</Button>
            {/* <Box
            verticalAlign={"center"}
              // alignSelf={"center"}
              border={"1px solid red"}
              h={"100%"}
              w={10}
              mr={"10%"}
            >
              OK
            </Box> */}
            {/* OK */}
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Calender;

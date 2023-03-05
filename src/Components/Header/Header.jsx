import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RouteTextContext from "../../Context/RouteTextContext";
import SizeContext from "../../Context/SizeContext";
import logo from "../Image/vigil.png";
import { GeneralFeatures,  } from "../Sidebar/Sidebar";
import SidebarSubContent from "../Sidebar/SidebarSubContent";
import Drawer1 from "./Drawer";
// import LoginState from "";
import style from "./Header.module.css";
const Login = false;

const Header = () => {
  const { width } = useContext(SizeContext);
  // console.log(width)
  const { currentPage, setCurrentPage,setPage } = useContext(RouteTextContext);
  // const { setLoginStatus } = useContext(LoginState);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // Text Function


  

  useEffect(() => {
    setPage()
  }, [window.location.href]);

  // Text function
  const small = () => {
    return (
      <Flex
        justifyContent={"space-between"}
        style={{ width: "100%", height: "3.5rem" }}
        boxShadow={
          "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;"
        }
      >
        <Box
          w={{ base: "25%", md: "17%", lg: "11%" }}
          h={"100%"}
          // border={"1px solid red"}
        >
          <Image w={"90%"} h={"100%"} ml={"10%"} src={logo} alt={"logo"} />
        </Box>
        <Box
          fontSize={"22px"}
          color={"gray.500"}
          alignSelf={"center"}
          w={{ base: "50%", md: "20%", lg: "15%" }}
          bg={"transparent"}
          textAlign={"center"}
        >
          <Text noOfLines={1}>{currentPage}</Text>
        </Box>
        <Box
          w={{ base: "25%", md: "17%", lg: "11%" }}
          h={"100%"}
          // border={"1px solid red"}
        >
          <Text alignSelf={"center"} textAlign={"center"} fontSize={"28px"}>
            <HamburgerIcon ref={btnRef} onClick={onOpen} />
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
              size={"full"}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader w={"100%"}>
                  <Flex
                    position={"relative"}
                    // border={"1px solid red"}
                    justifyContent={"space-between"}
                    bg={""}
                    style={{ width: "100%", height: "3.5rem" }}
                  >
                    <Box
                      w={{ base: "25%", md: "17%", lg: "11%" }}
                      h={"100%"}
                      // border={"1px solid red"}
                    >
                      <Image w={"90%"} h={"100%"} ml={"10%"} src={logo} />
                    </Box>
                    {/* <Box w={"30%"}>
                      <Box
                        position={"absolute"}
                        margin={"auto"}
                        zIndex={"0"}
                        left={"0"}
                        right={"0"}
                        top={""}
                        alignSelf={"center"}
                        className={style.header}
                        border={"1px solid #2ecc71"}
                        h={"50%"}
                        w={"30%"}
                      ></Box>
                      <Box
                        alignSelf={"center"}
                        zIndex={"10"}
                        //   alignItems={"center"}
                        //   border={"1px solid cyan"}
                        h={"70%"}
                        w={"100%"}
                        textTransform={"uppercase"}
                        fontSize={"20px"}
                        lineHeight={"35px"}
                        textAlign={"center"}
                        bg={"#2ecc71"}
                        color={"white"}
                        cursor={"pointer"}
                      >
                        I want discount
                      </Box>
                    </Box> */}
                    <Box w={{ base: "25%", md: "17%", lg: "11%" }} h={"100%"}>
                      <DrawerCloseButton />
                    </Box>
                  </Flex>
                </DrawerHeader>

                <DrawerBody
                  // overflowY={"scroll"}
                  // border={"1px solid red"}
                  pb={"100px"}
                  color={"gray.500"}
                >
                  <Box
                    as="span"
                    cursor={"pointer"}
                    h={"50px"}
                    flex="1"
                    textAlign="left"
                    // bg={"#29313c"}
                    textTransform={"uppercase"}
                    ml={"20px"}
                    fontWeight={"bold"}
                    noOfLines={1}
                    mt={"20px"}
                    mb={"20px"}
                    fontSize={"25px"}
                    onClick={() => {
                      setCurrentPage("Dashboard");
                      navigate("/");
                    }}
                  >
                    Dashboard
                  </Box>
                  <Box>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      // bg={"#29313c"}
                      textTransform={"uppercase"}
                      ml={"20px"}
                      fontWeight={"bold"}
                      noOfLines={1}
                    >
                      General Fetures
                    </Box>
                    <Stack>
                      {GeneralFeatures &&
                        GeneralFeatures.map((el) => (
                          <Drawer1
                            key={el.id}
                            name={el.text}
                            path={el.path}
                            icon={el.icon}
                          />
                        ))}
                    </Stack>
                  </Box>
                  {/* <Box mt={"20px"} mb={"20px"}>
                    <Box
                      // border={"1px solid red"}
                      as="span"
                      flex="1"
                      textAlign="left"
                      // bg={"#29313c"}
                      textTransform={"uppercase"}
                      ml={"20px"}
                      mt={"20px"}
                      fontWeight={"bold"}
                      noOfLines={1}
                    >
                      Social Networks
                    </Box>
                    <Stack>
                      {SocialNetworks &&
                        SocialNetworks.map((el) => (
                          <Drawer1
                            key={el.id}
                            name={el.text}
                            path={el.path}
                            icon={el.icon}
                          />
                        ))}
                    </Stack>
                  </Box> */}
                  <Button
                    colorScheme="red"
                    w={"100%"}
                    onClick={() => {
                      localStorage.setItem("Login", JSON.stringify(Login));
                      alert("Logout Successfuly!");
                      navigate("/");
                      window.location.reload();
                    }}
                  >
                    Logout
                  </Button>
                </DrawerBody>

                <DrawerFooter>
                  {/* <Button
                    colorScheme="red"
                    w={"100%"}
                    onClick={() => {
                      localStorage.setItem("Login", JSON.stringify(Login));
                      alert("Logout Successfuly!");
                      navigate("/");
                      window.location.reload();
                    }}
                  >
                    Logout
                  </Button> */}
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Text>
        </Box>
      </Flex>
    );
  };
  const large = () => {
    return (
      <Flex
        position={"relative"}
        // border={"1px solid red"}
        justifyContent={"space-between"}
        bg={""}
        boxShadow={
          "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;"
        }
        style={{ width: "100%", height: "3.5rem" }}
      >
        <Box
          ml={"10px"}
          fontSize={"22px"}
          color={"gray.500"}
          alignSelf={"center"}
          w={"30%"}
          bg={"transparent"}
        >
          <Text noOfLines={1}>{currentPage}</Text>
        </Box>
        <Box
          position={"absolute"}
          margin={"auto"}
          zIndex={"0"}
          left={"0"}
          right={"0"}
          alignSelf={"center"}
          className={style.header}
          border={"1px solid #2ecc71"}
          h={"50%"}
          w={"30%"}
        ></Box>
        <Box
          alignSelf={"center"}
          zIndex={"10"}
          //   alignItems={"center"}
          //   border={"1px solid cyan"}
          h={"70%"}
          w={"30%"}
          textTransform={"uppercase"}
          fontSize={"20px"}
          lineHeight={"35px"}
          textAlign={"center"}
          bg={"#2ecc71"}
          color={"white"}
          cursor={"pointer"}
        >
          I want discount
        </Box>
        <Box
          color={"black"}
          bg={"transparent"}
          mr={"10px"}
          alignSelf={"center"}
          w={"30%"}
          textAlign={"right"}
          // border={"1px solid red"}
        >
          <Button
            bg={"red"}
            color={"white"}
            onClick={() => {
              localStorage.setItem("Login", JSON.stringify(Login));
              alert("Logout Successfuly!");
              navigate("/");
              window.location.reload();
            }}
          >
            Logout
          </Button>
        </Box>
      </Flex>
    );
  };

  return width >= 1280 ? large() : small();
};

export default Header;

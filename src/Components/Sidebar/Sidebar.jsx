import {
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import style from "./Sidebar.module.css";
import React, { useContext, useEffect, useState } from "react";
import { SiKik, SiTinder } from "react-icons/si";
import { BiBookmark, BiHistory, BiPhone, BiVideo } from "react-icons/bi";
import { ImHangouts } from "react-icons/im";
import {
  MdAlternateEmail,
  MdContacts,
  MdKeyboard,
  MdKeyboardHide,
  MdLocationPin,
  MdMessage,
  MdOutlineApps,
  MdOutlineMobileOff,
  MdOutlineStopScreenShare,
  MdPhoto,
  MdWifi,
} from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import {
  BsCalendarCheck,
  BsInstagram,
  BsLine,
  BsMessenger,
  BsRecordCircle,
  BsSkype,
  BsTelegram,
  BsWhatsapp,
  BsWifiOff,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import SidebarSubContent from "./SidebarSubContent";
import { FaSnapchat, FaViber } from "react-icons/fa";
import logo from "../Image/vigil.png";
import SizeContext from "../../Context/SizeContext";
export const ScreenRecorder = [
  {
    id: 1,
    text: "Screen Recorder",
    icon: <BsRecordCircle bg={"#29313c"} />,
    path: "/screen-recorder",
  },
];
export const GeneralFeatures = [
  {
    id: 1,
    text: "Contacts",
    icon: <MdContacts bg={"#29313c"} />,
    path: "/contacts",
  },
  {
    id: 2,
    text: "Text Message",
    icon: <MdMessage />,
    path: "/messages",
  },
  {
    id: 3,
    text: "Calls",
    icon: <BiPhone />,
    path: "/calls",
  },
  {
    id: 4,
    text: "Events",
    icon: <BsCalendarCheck />,
    path: "/events",
  },
  {
    id: 5,
    text: "Photo",
    icon: <MdPhoto />,
    path: "/photo",
  },
  {
    id: 6,
    text: "Video",
    icon: <TfiVideoClapper />,
    path: "/video",
  },
  {
    id: 7,
    text: "Wi-Fi Networks",
    icon: <MdWifi />,
    path: "/wifi-networks",
  },
  {
    id: 8,
    text: "Keyword tracking",
    icon: <MdKeyboardHide />,
    path: "/keyword-tracking",
  },
  {
    id: 9,
    text: "Keylogger",
    icon: <MdKeyboard />,
    path: "/keylogger",
  },
  {
    id: 10,
    text: "Installed APPs",
    icon: <MdOutlineApps />,
    path: "/installed-apps",
  },
];
export const Locations = [
  {
    id: 1,
    text: "GPS Locations",
    icon: <MdLocationPin />,
    path: "/gps-locations",
  },
  {
    id: 2,
    text: "Geo Fencing",
    icon: <MdMessage />,
    path: "/geo-fencing",
  },
];
export const SocialNetworks = [
  {
    id: 1,
    text: "Whatsapp",
    icon: <BsWhatsapp bg={"#29313c"} />,
    path: "/whatsapp",
  },
  {
    id: 2,
    text: "KiK",
    icon: <SiKik />,
    path: "/kik",
  },
  {
    id: 3,
    text: "Telegram",
    icon: <BsTelegram />,
    path: "/telegram",
  },
  {
    id: 4,
    text: "Viber",
    icon: <FaViber />,
    path: "/viber",
  },
  {
    id: 5,
    text: "Tinder",
    icon: <SiTinder />,
    path: "/tinder",
  },
  {
    id: 6,
    text: "Line",
    icon: <BsLine />,
    path: "/line",
  },
  {
    id: 7,
    text: "Snapchat",
    icon: <FaSnapchat />,
    path: "/snapchat",
  },
  {
    id: 8,
    text: "Hangout",
    icon: <ImHangouts />,
    path: "/hangout",
  },
  {
    id: 9,
    text: "Skype",
    icon: <BsSkype />,
    path: "/skype",
  },
  {
    id: 10,
    text: "Instagram Messages",
    icon: <BsInstagram />,
    path: "/instagram",
  },
  {
    id: 11,
    text: "Facebook Tracking",
    icon: <BsMessenger />,
    path: "/facebook",
  },
];
export const InternetUsage = [
  {
    id: 1,
    text: "Browser History",
    icon: <BiHistory bg={"#29313c"} />,
    path: "/browser-history",
  },
  {
    id: 2,
    text: "Browser Bookmark",
    icon: <BiBookmark />,
    path: "/browser-bookmark",
  },
  {
    id: 3,
    text: "Email",
    icon: <MdAlternateEmail />,
    path: "/email",
  },
];
export const Restricted = [
  {
    id: 1,
    text: "Block WiFi",
    icon: <BsWifiOff bg={"#29313c"} />,
    path: "/block-wifi",
  },
  {
    id: 2,
    text: "Block Website",
    icon: <MdOutlineStopScreenShare />,
    path: "/block-website",
  },
  {
    id: 3,
    text: "Block Applications",
    icon: <MdOutlineMobileOff />,
    path: "/block-applications",
  },
];

const Sidebar = () => {
  const [userID, setUserID] = useState("0001");
  const { width } = useContext(SizeContext);
  const navigate = useNavigate()
  const small = () => {
    return;
  };
  const large = () => {
    return (
      <Stack
        color={"gray.500"}
        width={"100%"}
        height={"100vh"}
        // border={"1px solid cyan"}
        bg={"#29313c"}
        overflowY={"scroll"}
        className={style.stack}
      >
        <Flex
          // border={"1px solid red"}
          justifyContent={"space-between"}
          bg={"#01b0fe"}
          style={{ width: "100%", height: "3.5rem" }}
        >
          <Box w={"40%"} bg={"transparent"}>
            <Image bg={"transparent"} h={"100%"} w={"100%"} src={logo} alt={"logo"} />
          </Box>
          <Box
            color={"white"}
            bg={"transparent"}
            mr={"10px"}
            alignSelf={"center"}
            // border={"1px solid red"}
          >
            Your ID: {userID}
          </Box>
        </Flex>
        <Box
          backgroundColor={"#29313c"}
          cursor={"pointer"}
          fontSize={"25px"}
          w={"100%"}
          p={"10px"}
          boxSizing={"border-box"}
          alignSelf={"center"}
          h={"3.5rem"}
          onClick={() => {
            navigate("/");
          }}
        >
          Dashboard
        </Box>
        <Stack
          color={"gray.500"}
          width={"100%"}
          height={"100vh"}
          // border={"1px solid cyan"}
          bg={"#29313c"}
          overflowY={"scroll"}
          className={style.stack}
        >
          <Accordion
            _hover={{ backgroundColor: "#29323c" }}
            bg={"#29313c"}
            defaultIndex={[0]}
            allowMultiple
            border={"none"}
          >
            <AccordionItem
              bg={"#29313c"}
              border={"none"}
              _hover={{ backgroundColor: "#29313c" }}
            >
              <h2 className={style.h2}>
                <AccordionButton bg={"#29313c"}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    bg={"#29313c"}
                    textTransform={"uppercase"}
                    ml={"20px"}
                    fontWeight={"bold"}
                  >
                    General Fetures
                  </Box>
                  <AccordionIcon bg={"#29313c"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} bg={"#29313c"}>
                <Stack bg={"#29313c"}>
                  {GeneralFeatures &&
                    GeneralFeatures.map((el) => (
                      <SidebarSubContent
                        key={el.id}
                        name={el.text}
                        path={el.path}
                        icon={el.icon}
                      />
                    ))}
                </Stack>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              bg={"#29313c"}
              border={"none"}
              _hover={{ backgroundColor: "#29313c" }}
            >
              <h2 className={style.h2}>
                <AccordionButton bg={"#29313c"}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    bg={"#29313c"}
                    textTransform={"uppercase"}
                    ml={"20px"}
                    fontWeight={"bold"}
                  >
                    Locations
                  </Box>
                  <AccordionIcon bg={"#29313c"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} bg={"#29313c"}>
                <Stack bg={"#29313c"}>
                  {Locations &&
                    Locations.map((el) => (
                      <SidebarSubContent
                        key={el.id}
                        name={el.text}
                        path={el.path}
                        icon={el.icon}
                      />
                    ))}
                </Stack>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              bg={"#29313c"}
              border={"none"}
              _hover={{ backgroundColor: "#29313c" }}
            >
              <h2 className={style.h2}>
                <AccordionButton bg={"#29313c"}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    bg={"#29313c"}
                    textTransform={"uppercase"}
                    ml={"20px"}
                    fontWeight={"bold"}
                  >
                    Social Networks
                  </Box>
                  <AccordionIcon bg={"#29313c"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} bg={"#29313c"}>
                <Stack bg={"#29313c"}>
                  {SocialNetworks &&
                    SocialNetworks.map((el) => (
                      <SidebarSubContent
                        key={el.id}
                        name={el.text}
                        path={el.path}
                        icon={el.icon}
                      />
                    ))}
                </Stack>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              bg={"#29313c"}
              border={"none"}
              _hover={{ backgroundColor: "#29313c" }}
            >
              <h2 className={style.h2}>
                <AccordionButton bg={"#29313c"}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    bg={"#29313c"}
                    textTransform={"uppercase"}
                    ml={"20px"}
                    fontWeight={"bold"}
                  >
                    Screen Recorder
                  </Box>
                  <AccordionIcon bg={"#29313c"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} bg={"#29313c"}>
                <Stack bg={"#29313c"}>
                  {ScreenRecorder &&
                    ScreenRecorder.map((el) => (
                      <SidebarSubContent
                        key={el.id}
                        name={el.text}
                        path={el.path}
                        icon={el.icon}
                      />
                    ))}
                </Stack>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              bg={"#29313c"}
              border={"none"}
              _hover={{ backgroundColor: "#29313c" }}
            >
              <h2 className={style.h2}>
                <AccordionButton bg={"#29313c"}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    bg={"#29313c"}
                    textTransform={"uppercase"}
                    ml={"20px"}
                    fontWeight={"bold"}
                  >
                    Internet Usage
                  </Box>
                  <AccordionIcon bg={"#29313c"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} bg={"#29313c"}>
                <Stack bg={"#29313c"}>
                  {InternetUsage &&
                    InternetUsage.map((el) => (
                      <SidebarSubContent
                        key={el.id}
                        name={el.text}
                        path={el.path}
                        icon={el.icon}
                      />
                    ))}
                </Stack>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              bg={"#29313c"}
              border={"none"}
              _hover={{ backgroundColor: "#29313c" }}
            >
              <h2 className={style.h2}>
                <AccordionButton bg={"#29313c"}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    bg={"#29313c"}
                    textTransform={"uppercase"}
                    ml={"20px"}
                    fontWeight={"bold"}
                  >
                    Restricted
                  </Box>
                  <AccordionIcon bg={"#29313c"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} bg={"#29313c"}>
                <Stack bg={"#29313c"}>
                  {Restricted &&
                    Restricted.map((el) => (
                      <SidebarSubContent
                        key={el.id}
                        name={el.text}
                        path={el.path}
                        icon={el.icon}
                      />
                    ))}
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      </Stack>
    );
  };

  return width >= 1280 ? large() : small();
};

export default Sidebar;

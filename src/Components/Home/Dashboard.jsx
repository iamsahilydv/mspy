import {
  Box,
  Button,
  Flex,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import style from "./Dashboard.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { FaMobileAlt } from "react-icons/fa";
import { IoMdBatteryFull } from "react-icons/io";
import { MdWifi, MdOutlineNetworkCell } from "react-icons/md";
import DataDetails from "./DataDetails";
import Map from "./Map";
import Chart from "./Chart";

const Dashboard = () => {
  const [accountType, setAccountType] = useState("Premium");
  const [expirationDate, setExpirationDate] = useState("Oct 8, 2021 5:30 AM");
  const [autoRenew, setAutoRenew] = useState(false);
  const [targetPhone, setTargetPhone] = useState("iPhone");
  const [vigilversion, setvigilversion] = useState("5.8.5");
  const [imei, setImei] = useState("39023876478372hdfWa");
  const [battery, setBattery] = useState("90%");
  const [wifi, setWifi] = useState(true);
  const [network, setNetwork] = useState(false);
  const [operator, setOperator] = useState("T-Mobile");
  return (
    <Stack style={{ width: "100%" }}>
      <section>
        <Chart />
      </section>
      {/* <Sidebar /> */}
      <section>
        <DataDetails />
      </section>
      <section>
        <Map />
      </section>
      <section>
        {/* This below part is for Account Details in Dashboard */}
        <Flex
          width={"100%"}
          mt={"20px"}
          mb={"20px"}
          display={{ base: "inline-block", lg: "flex" }}
          // margin={"auto"}
        >
          <Flex
            className={style.FlexMain}
            height={{ base: "auto", lg: "350px" }}
            // border={"1px solid red"}
            width={{ base: "98%", lg: "48%" }}
            direction={{ base: "column", lg: "row" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Box className={style.Box1} width={{ base: "98%", lg: "45%" }}>
              <Text
                as={"h2"}
                fontSize={"28px"}
                lineHeight={"45px"}
                mb={"10px"}
                noOfLines={"1"}
              >
                Account
              </Text>
              <Box mb={"25px"}>
                <Text className={style.text1Detail} mb={"5px"} noOfLines={"1"}>
                  Type:
                </Text>
                <Text
                  noOfLines={"1"}
                  className={style.text2Detail}
                  fontSize={"18px"}
                  textTransform={"uppercase"}
                  color={"gray.500"}
                >
                  {accountType}
                </Text>
              </Box>
              <Text noOfLines={"1"} className={style.text1Detail}>
                Auto-Renewal:
              </Text>
              <Box>
                {/* algorithm of below checked Box is pending {autoRenew?isChecked={true}:isChecked={false}} */}
                {autoRenew ? (
                  <Switch
                    className={style.switchRenew}
                    colorScheme={"green"}
                    size="lg"
                    m={"10px 0px 0px 20px"}
                    isChecked
                  />
                ) : (
                  <Switch
                    className={style.switchRenew}
                    colorScheme={"green"}
                    size="lg"
                    m={"10px 0px 0px 20px"}
                  />
                )}
              </Box>
            </Box>
            <Box
              margin={"auto"}
              className={style.Box1}
              // border={"1px solid red"}
              h={"200px"}
              mt={"50px"}
              width={{ base: "98%", lg: "45%" }}
            >
              <Text noOfLines={"1"} className={style.text1Detail}>Expiration Date:</Text>
              <Text
              noOfLines={"1"}
                className={style.text2Detail}
                color={"gray.500"}
                fontSize={"18px"}
                mb={"35px"}
              >
                {expirationDate}
              </Text>
              <Button
                textTransform={"uppercase"}
                w={"100%"}
                colorScheme={"green"}
              >
                Renew
              </Button>
            </Box>
          </Flex>

          <Flex
            className={style.FlexMain}
            height={{ base: "auto", lg: "350px" }}
            width={{ base: "98%", lg: "48%" }}
            // display={{base:"inline-block",lg:"flex"}}
            // border={"1px solid red"}
          >
            <Box
              className={style.Box1}
              width={{ base: "98%", lg: "45%" }}
              // border={"1px solid red"}
            >
              <Text
                as={"h2"}
                fontSize={"28px"}
                lineHeight={"45px"}
                mb={"10px"}
                noOfLines={"1"}
              >
                Target Device Info
              </Text>
              <Flex className={style.text1Detail} mt={"20px"}>
                <FaMobileAlt fontSize={"25px"} />{" "}
                <Text ml={"5px"} mb={"30px"}>
                  {targetPhone}
                </Text>
              </Flex>
              <Text className={style.text1Detail}>Vigil version:</Text>
              <Text className={style.text2Detail} color={"gray.500"}>
                {vigilversion}
              </Text>
              <Text mt={"10px"} className={style.text1Detail}>
                IMEI:
              </Text>
              <Text
                width={{ base: "70%" }}
                noOfLines={"1"}
                // border={"1px solid red"}
                className={style.text2Detail}
                color={"gray.500"}
              >
                {imei}
              </Text>
            </Box>
            <Box className={style.Box1} width={{ base: "98%", lg: "45%" }}>
              <Flex className={style.text1Detail} mt={"50px"}>
                <IoMdBatteryFull fontSize={"25px"} />{" "}
                <Text ml={"5px"} mb={"30px"} color={"gray.500"}>
                  {battery}
                </Text>
              </Flex>
              <Flex className={style.text1Detail} mt={""}>
                <MdWifi fontSize={"25px"} />{" "}
                {wifi ? (
                  <Text ml={"5px"} mb={"30px"} color={"gray.500"}>
                    On
                  </Text>
                ) : (
                  <Text ml={"5px"} mb={"30px"} color={"gray.500"}>
                    Off
                  </Text>
                )}
              </Flex>
              <Flex className={style.text1Detail} mt={"0px"}>
                <MdOutlineNetworkCell fontSize={"25px"} />{" "}
                {network ? (
                  <Text ml={"5px"} mb={"30px"} color={"gray.500"}>
                    On
                  </Text>
                ) : (
                  <Text ml={"5px"} mb={"30px"} color={"gray.500"}>
                    Off
                  </Text>
                )}
              </Flex>
              <Text className={style.text1Detail}>Operator name:</Text>
              <Text className={style.text2Detail} color={"gray.500"}>
                {operator}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </section>
    </Stack>
  );
};

export default Dashboard;

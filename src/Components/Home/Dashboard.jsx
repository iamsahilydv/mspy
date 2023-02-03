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
import { FaMobileAlt } from "react-icons/fa";
import { IoMdBatteryFull } from "react-icons/io";
import { MdWifi, MdOutlineNetworkCell } from "react-icons/md";
import DataDetails from "./DataDetails";
import Maps from "./Map";
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
      {/* <Login /> */}
      <section>
        <Chart />
      </section>
      {/* <Sidebar /> */}
      <section>
        <DataDetails />
      </section>
      <section>
        <Maps />
      </section>
      <section>
        {/* This below part is for Account Details in Dashboard */}
        <Flex
        box-shadow= "rgba(0, 0, 0, 0.15) 0px 5px 25px"
          width={"100%"}
          mt={"20px"}
          mb={"20px"}
          display={{ base: "inline-block", lg: "flex" }}
          // margin={"auto"}
          // bg={"white"}
        >
          <Flex
            className={style.FlexMain}
            height={{ base: "auto", lg: "350px" }}
            // border={"1px solid red"}
            width={{ base: "98%", lg: "48%" }}
            direction={{ base: "column", lg: "row" }}
            textAlign={{ base: "center", lg: "left" }}
             bg={"white"}
          >
            <Box bg={"white"} className={style.Box1} width={{ base: "98%", lg: "45%" }}>
              <Text bg={"white"}
                as={"h2"}
                fontSize={"28px"}
                lineHeight={"45px"}
                mb={"10px"}
                noOfLines={"1"}
              >
                Account
              </Text>
              <Box bg={"white"} mb={"25px"}>
                <Text bg={"white"} className={style.text1Detail} mb={"5px"} noOfLines={"1"}>
                  Type:
                </Text>
                <Text bg={"white"}
                  noOfLines={"1"}
                  className={style.text2Detail}
                  fontSize={"18px"}
                  textTransform={"uppercase"}
                  color={"gray.500"}
                >
                  {accountType}
                </Text>
              </Box>
              <Text bg={"white"} noOfLines={"1"} className={style.text1Detail}>
                Auto-Renewal:
              </Text>
              <Box bg={"white"}>
                {/* algorithm of below checked Box is pending {autoRenew?isChecked={true}:isChecked={false}} */}
                {autoRenew ? (
                  <Switch
                  bg={"white"}
                    className={style.switchRenew}
                    colorScheme={"green"}
                    size="lg"
                    m={"10px 0px 0px 20px"}
                    isChecked
                  />
                ) : (
                  <Switch
                  bg={"white"}
                    className={style.switchRenew}
                    colorScheme={"green"}
                    size="lg"
                    m={"10px 0px 0px 20px"}
                  />
                )}
              </Box>
            </Box>
            <Box bg={"white"}
              margin={"auto"}
              className={style.Box1}
              // border={"1px solid red"}
              h={"200px"}
              mt={"50px"}
              width={{ base: "98%", lg: "45%" }}
            >
              <Text bg={"white"} noOfLines={"1"} className={style.text1Detail}>Expiration Date:</Text>
              <Text bg={"white"}
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

          <Flex bg={"white"}
            className={style.FlexMain}
            height={{ base: "auto", lg: "350px" }}
            width={{ base: "98%", lg: "48%" }}
            // display={{base:"inline-block",lg:"flex"}}
            // border={"1px solid red"}
          >
            <Box bg={"white"}
              className={style.Box1}
              width={{ base: "98%", lg: "45%" }}
              // border={"1px solid red"}
            >
              <Text bg={"white"}
                as={"h2"}
                fontSize={"28px"}
                lineHeight={"45px"}
                mb={"10px"}
                noOfLines={"1"}
              >
                Target Device Info
              </Text>
              <Flex bg={"white"} className={style.text1Detail} mt={"20px"}>
                <FaMobileAlt className={style.icons} bg={"white"} fontSize={"25px"} />{" "}
                <Text bg={"white"} ml={"5px"} mb={"30px"}>
                  {targetPhone}
                </Text>
              </Flex>
              <Text bg={"white"} className={style.text1Detail}>Vigil version:</Text>
              <Text bg={"white"} className={style.text2Detail} color={"gray.500"}>
                {vigilversion}
              </Text>
              <Text bg={"white"} mt={"10px"} className={style.text1Detail}>
                IMEI:
              </Text>
              <Text bg={"white"}
                width={{ base: "70%" }}
                noOfLines={"1"}
                // border={"1px solid red"}
                className={style.text2Detail}
                color={"gray.500"}
              >
                {imei}
              </Text>
            </Box>
            <Box bg={"white"} className={style.Box1} width={{ base: "98%", lg: "45%" }}>
              <Flex bg={"white"} className={style.text1Detail} mt={"50px"}>
                <IoMdBatteryFull className={style.icons} fontSize={"25px"} />{" "}
                <Text bg={"white"} ml={"5px"} mb={"30px"} color={"gray.500"}>
                  {battery}
                </Text>
              </Flex>
              <Flex bg={"white"} className={style.text1Detail} mt={""}>
                <MdWifi className={style.icons} fontSize={"25px"} />
                {wifi ? (
                  <Text bg={"white"} ml={"5px"} mb={"30px"} color={"gray.500"}>
                    On
                  </Text>
                ) : (
                  <Text bg={"white"} ml={"5px"} mb={"30px"} color={"gray.500"}>
                    Off
                  </Text>
                )}
              </Flex>
              <Flex bg={"white"} className={style.text1Detail} mt={"0px"}>
                <MdOutlineNetworkCell className={style.icons} fontSize={"25px"} />{" "}
                {network ? (
                  <Text bg={"white"} ml={"5px"} mb={"30px"} color={"gray.500"}>
                    On
                  </Text>
                ) : (
                  <Text bg={"white"} ml={"5px"} mb={"30px"} color={"gray.500"}>
                    Off
                  </Text>
                )}
              </Flex>
              <Text bg={"white"} className={style.text1Detail}>Operator name:</Text>
              <Text bg={"white"} className={style.text2Detail} color={"gray.500"}>
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

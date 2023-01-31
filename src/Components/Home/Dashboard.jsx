import {
  Box,
  Button,
  Flex,
  HStack,
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

const Dashboard = () => {
  const [accountType, setAccountType] = useState("Premium");
  const [expirationDate, setExpirationDate] = useState("Oct 8, 2021 5:30 AM");
  const [autoRenew, setAutoRenew] = useState(false);
  const [targetPhone, setTargetPhone] = useState("iPhone");
  const [mSpyversion, setMSpyversion] = useState("5.8.5");
  const [imei, setImei] = useState("39023876478372hdfWa");
  const [battery, setBattery] = useState("90%");
  const [wifi, setWifi] = useState(true);
  const [network, setNetwork] = useState(false);
  const [operator, setOperator] = useState("T-Mobile");
  return (
    <Stack style={{ width: "100%" }}>
      {/* <Sidebar /> */}
      <section  >

      <DataDetails />
      </section>
      <section>
        <Map />
      </section>
      <section  >

      {/* This below part is for Account Details in Dashboard */}
      <Flex width={"100%"} mt={"20px"}>
        <Flex className={style.FlexMain}>
          <Box className={style.Box1}>
            <Text as={"h2"} fontSize={"28px"} lineHeight={"45px"} mb={"10px"}>
              Account
            </Text>
            <Box mb={"25px"}>
              <Text className={style.text1Detail} mb={"5px"}>
                Type:
              </Text>
              <Text
                className={style.text2Detail}
                fontSize={"18px"}
                textTransform={"uppercase"}
                color={"gray.500"}
              >
                {accountType}
              </Text>
            </Box>
            <Text className={style.text1Detail}>Auto-Renewal:</Text>
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
          >
            <Text className={style.text1Detail}>Expiration Date:</Text>
            <Text
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

        <Flex className={style.FlexMain} w={"50%"}>
          <Box className={style.Box1}>
            <Text as={"h2"} fontSize={"28px"} lineHeight={"45px"} mb={"10px"}>
              Target Device Info
            </Text>
            <Flex className={style.text1Detail} mt={"20px"}>
              <FaMobileAlt fontSize={"25px"} />{" "}
              <Text ml={"5px"} mb={"30px"}>
                {targetPhone}
              </Text>
            </Flex>
            <Text className={style.text1Detail}>mSpy version:</Text>
            <Text className={style.text2Detail} color={"gray.500"}>
              {mSpyversion}
            </Text>
            <Text mt={"10px"} className={style.text1Detail}>
              IMEI:
            </Text>
            <Text className={style.text2Detail} color={"gray.500"}>
              {imei}
            </Text>
          </Box>
          <Box className={style.Box1}>
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

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import style from "./Signup.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [otpInp, setOtpInp] = useState("");
  const [email, setEmail] = useState("");
  const [passInp, setPassInp] = useState("");
  const navigate = useNavigate();
  const otp = "1234";
  const url ="https://busy-houndstooth-clam.cyclic.app/employee"
  const hide = () => {
    alert(`OTP sent to ${email}`);
    let unhide = document.getElementById("verifyButton");
    let sendOTPAgain = document.getElementById("sendOTPAgain");
    let otpInput = document.getElementById("otpInput");
    let otpHide = document.getElementById("otp");
    unhide.style.zIndex = "10";
    otpInput.disabled = false;
    sendOTPAgain.style.display = "flex";
    // otpHide.style.marginTop="20px"
    otpHide.style.display = "block";
  };
  const sendOTP = () => {
    // console.log(email,passInp)
    email === "" || passInp === ""
      ? alert("Enter a Email or Password")
      : hide();
  };
  const success = async () => {
    try {
      const user={
        email:email,
        password:passInp
      }
      fetch(url,{
        method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      })
      console.log(user);
      navigate("/login");
    } catch (er) {
      console.log(er)
    }
  };
  const verifyOTP = () => {
    otpInp === otp ? success() : alert("Wrong OTP");
  };
  return (
    <Stack
      bg={"#e5e5e5"}
      height={"100vh"}
      width={"100vw"}
      position={"relative"}
    >
      <Box
        // border={"1px solid red"}
        zIndex={"10"}
        // bg={"#e5e5e5"}
        bg={"transparent"}
        width={{ base: "100%", md: "50%", lg: "30%" }}
        h={"65vh"}
        margin={"auto"}
        position={"absolute"}
        top={"0"}
        bottom={"0"}
        left={"0"}
        right={"0"}
        // border="1px solid red"
      >
        <Text
          textAlign={"center"}
          // bg={"#e5e5e5"}
          bg={"transparent"}
          color={"#224957"}
          fontWeight={"bold"}
          fontSize={"50px"}
          mb={"30px"}
        >
          Sign Up
        </Text>
        <Text color={"#224957"} textAlign={"center"} 
        // bg={"#e5e5e5"}
        bg={"transparent"}
        >
          Sign Up and start managing your device
        </Text>
        <Box w={"80%"} margin={"auto"} mt={"20px"} bg={"transparent"}>
          <Text bg={"transparent"}
          // bg={"#e5e5e5"}
          >Email</Text>
          <Input
            color={"white"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            bg={"#224957"}
            placeholder={"Email"}
            type={"email"}
            _placeholder={{ color: "white" }}
          />
        </Box>
        <Box w={"80%"} margin={"auto"} mt={"20px"} 
        // bg={"#e5e5e5"}
        bg={"transparent"}>
          <Text 
          // bg={"#e5e5e5"}
          bg={"transparent"}
          >Password</Text>
          <Input
            // id="otpInput"
            // isDisabled
            bg={"#224957"}
            value={passInp}
            onChange={(e) => setPassInp(e.target.value)}
            color={"white"}
            placeholder={"Password"}
            type={"password"}
            pattern={"0-9"}
            // maxLength={4}
            // minLength={"4"}
            _placeholder={{ color: "white" }}
          />
          <Box mt={"20px"} 
          // bg={"#e5e5e5"}
          bg={"transparent"}
           display={"none"} id="otp">
            <Text 
            // bg={"#e5e5e5"}
            bg={"transparent"}
            >OTP</Text>
            <Input
              id="otpInput"
              isDisabled
              bg={"#224957"}
              value={otpInp}
              onChange={(e) => setOtpInp(e.target.value)}
              color={"white"}
              placeholder={"****"}
              type={"password"}
              pattern={"0-9"}
              maxLength={4}
              // minLength={"4"}
              _placeholder={{ color: "gray.500" }}
            />
          </Box>
        </Box>
        {/* <Input type={"checkbox"} bg={"white"} size={"sm"} /> */}
        {/* <input type={"checkbox"} className={style.check} /> */}
        <Flex
          // bg={"#e5e5e5"}
          bg={"transparent"}
          justify={"center"}
          w={"55%"}
          margin={"auto"}
          mt={"20px"}
          // mb={"30px"}
          // border={"1px solid cyan"}
          // direction={"row"}
          // justifyContent={"space-between"}
          // zIndex={"-10"}
          // visibility={"hidden"}
          id="sendOTPAgain"
          display={"none"}
        >
          {/* <Checkbox
            colorScheme="green"
            iconColor="green"
            bg={"#e5e5e5"}
            color={"#224957"}
          >
            <Text bg={"#e5e5e5"}>Remember Me</Text>
          </Checkbox> */}
          {/* <Text bg={"#e5e5e5"} cursor={"pointer"}> */}
          Didn't Recive OTP &nbsp;
          <Text
            // bg={"#e5e5e5"}
            bg={"transparent"}
            color={"blue.400"}
            cursor={"pointer"}
            onClick={() => alert("OTP is 1234")}
          >
            Send Again!
          </Text>
          {/* </Text> */}
        </Flex>
        <Box
          // border={"1px solid cyan"}
          h={"35px"}
          // bg={"#e5e5e5"}
          bg={"transparent"}
          alignItems={"center"}
          textAlign={"center"}
          mt={"30px"}
          position={"relative"}
        >
          <Button
            // border={"1px solid cyan"}
            zIndex={0}
            left={"0"}
            right={"0"}
            margin={"auto"}
            position={"absolute"}
            id="otpButton"
            colorScheme={"green"}
            color={"#e5e5e5"}
            width={"80%"}
            onClick={() => sendOTP()}
          >
            Signup
          </Button>
          <Button
            zIndex={-10}
            left={"0"}
            right={"0"}
            margin={"auto"}
            position={"absolute"}
            id="verifyButton"
            colorScheme={"green"}
            color={"#e5e5e5"}
            width={"80%"}
            onClick={() => verifyOTP()}
          >
            Verify OTP
          </Button>
        </Box>
        <Flex
          // bg={"#e5e5e5"}
          bg={"transparent"}
          w={"50%"}
          margin={"auto"}
          mt={"20px"}
          justifyContent={"space-around"}
        >
          Already an Account ?{" "}
          <Text
            // bg={"#e5e5e5"}
            bg={"transparent"}
            cursor={"pointer"}
            onClick={() => {
              navigate("/login");
            }}
            display={"flex"}
            color={"blue.400"}
          >
            Login
          </Text>
        </Flex>
      </Box>
      {/* <Box> */}
      <Box
        // bg={"#e5e5e5"}
        bg={"transparent"}
        position={"absolute"}
        margin={"auto"}
        left={"0"}
        right={"0"}
        bottom={"0"}
      >
        <svg
          className={style.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 319"
        >
          <path
            fill="#47e093"
            fill-opacity="1"
            d="M0,32L80,58.7C160,85,320,139,480,170.7C640,203,800,213,960,208C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </Box>
      {/* <Box bg={""} position={"absolute"} margin={"auto"} left={"0"} right={"0"} bottom={"0"}><svg className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#496873" fill-opacity="1" d="M0,288L80,288C160,288,320,288,480,266.7C640,245,800,203,960,160C1120,117,1280,75,1360,53.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg></Box> */}
      {/* </Box> */}
    </Stack>
  );
};

export default Signup;

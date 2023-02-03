import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import style from "./Login.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [otpInp,setOtpInp] =useState("")
    const [email,setEmail] = useState("")
    const navigate = useNavigate()
    const otp = "1234"
    const hide =()=>{
      alert(`OTP sent to ${email}`)
      let unhide = document.getElementById("verifyButton");
      let otpInput= document.getElementById("otpInput")
      unhide.style.zIndex="10"
      otpInput.disabled=false
      
    }
    const sendOTP=()=>{
      email===""?alert("Enter a Email"):hide()
    }
    const verifyOTP=()=>{
      otpInp===otp?navigate("/home"):alert("Wrong OTP")
    }
  return (
    <Stack
      bg={"#e5e5e5"}
      height={"100vh"}
      width={"100vw"}
      position={"relative"}
    >
      <Box
      zIndex={"10"}
        bg={"#e5e5e5"}
        width={{base:"100%",md:"50%",lg:"30%"}}
        h={"60vh"}
        margin={"auto"}
        position={"absolute"}
        top={"0"}
        bottom={"0"}
        left={"0"}
        right={"0"}
        // border="1px solid red"
      >
        <Text textAlign={"center"} bg={"#e5e5e5"} color={"#224957"} fontWeight={"bold"} fontSize={"50px"} mb={"30px"}>Sign in</Text>
        <Text color={"#224957"} textAlign={"center"} bg={"#e5e5e5"}>Sign in and start managing your device</Text>
        <Box w={"80%"} margin={"auto"} mt={"20px"}>
          <Text bg={"#e5e5e5"}>Email</Text>
          <Input
            color={"white"}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            bg={"#224957"}
            placeholder={"Email"}
            type={"email"}
            _placeholder={{ color: "white" }}
          />
        </Box>
        <Box w={"80%"} margin={"auto"} mt={"20px"}>
          <Text bg={"#e5e5e5"}>OTP</Text>
          <Input
          id="otpInput"
          isDisabled
            bg={"#224957"}
            value={otpInp}
            onChange={(e)=>setOtpInp(e.target.value)}
            color={"white"}
            placeholder={"****"}
            type={"password"}
            pattern={"0-9"}
            maxLength={4}
            // minLength={"4"}
            _placeholder={{ color: "white" }}
          />
        </Box>
        {/* <Input type={"checkbox"} bg={"white"} size={"sm"} /> */}
        {/* <input type={"checkbox"} className={style.check} /> */}
        <Flex
          bg={"#e5e5e5"}
          justify={"space-between"}
          w={"80%"}
          margin={"auto"}
          mt={"20px"}
        >
          <Checkbox colorScheme='green' iconColor="green" bg={"#e5e5e5"} color={"#224957"}>
            <Text bg={"#e5e5e5"}>Remember Me</Text>
          </Checkbox>
          <Text bg={"#e5e5e5"} cursor={"pointer"}>
            Didn't Recive OTP
          </Text>
        </Flex>
        <Box bg={"#e5e5e5"} alignItems={"center"} textAlign={"center"} mt={"30px"} position={"relative"}>
          <Button zIndex={0} left={"0"} right={"0"} margin={"auto"} position={"absolute"} id="otpButton" colorScheme={"green"} color={"#e5e5e5"} width={"80%"} onClick={()=>sendOTP()}>Send OTP</Button>
          <Button zIndex={-10} left={"0"} right={"0"} margin={"auto"} position={"absolute"} id="verifyButton" colorScheme={"green"} color={"#e5e5e5"} width={"80%"} onClick={()=>verifyOTP()}>Verify OTP</Button>
        </Box>
      </Box>
      {/* <Box> */}
        <Box bg={"#e5e5e5"} position={"absolute"} margin={"auto"} left={"0"} right={"0"} bottom={"0"} ><svg className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#47e093" fill-opacity="1" d="M0,32L80,58.7C160,85,320,139,480,170.7C640,203,800,213,960,208C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg></Box>
        {/* <Box bg={""} position={"absolute"} margin={"auto"} left={"0"} right={"0"} bottom={"0"}><svg className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#496873" fill-opacity="1" d="M0,288L80,288C160,288,320,288,480,266.7C640,245,800,203,960,160C1120,117,1280,75,1360,53.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg></Box> */}
      {/* </Box> */}
      
      
    </Stack>
  );
};

export default Login;

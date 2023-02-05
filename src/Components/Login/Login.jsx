import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import style from "./Login.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const url = "https://busy-houndstooth-clam.cyclic.app/employee";

const Login = () => {
  let getUserData = async () => {
    try {
      let res = await fetch(url);
      let user = await res.json();
      // console.log(user);
      setData(user);
    } catch (err) {
      console.log(err);
    }
  };
  const [otpInp, setOtpInp] = useState("");
  const [passInp, setPassInp] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  let validUser = false;
  let attempt = 1;
  const [data, setData] = useState([]);
  const otp = "1234";
  const hide = () => {
    alert(`OTP sent to ${email}`);
    let sendOTPAgain = document.getElementById("sendOTPAgain");
    let unhide = document.getElementById("verifyButton");
    let otpInput = document.getElementById("otpInput");
    unhide.style.zIndex = "10";
    sendOTPAgain.style.display = "flex";
    otpInput.style.display = "block";
  };

  const obj = {
    email: "1",
    password: "2",
  };
  const success = () => {
    alert("Login successful!");
    navigate("/home");
  };
  const failure = () => {
    if (attempt !== 3) {
      alert(`Wrong OTP ${3 - attempt} are remaning`);
      attempt++;
    } else {
      alert("Out of attempts");
      window.location.reload();
    }
    // navigate("/")
  };
  const sendOTP = () => {
    // email === "" ? alert("Enter a Email") : hide();
    // if (email === user.email && passInp === user.password) {
    //   hide();
    // } else if (email === "") {
    //   alert("Enter a Email");
    // } else {
    //   alert("Not a Valid User");
    // }

    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email) {
        validUser = true;
        if (data[i].email === email && data[i].password === passInp) {
          hide();
          // break;
          return;
        } else {
          alert("Wrong credentials");
          return;
        }
      } else if (email === "") {
        alert("Enter an Email Address");
      } else {
        // alert("Not a Valid User");
        validUser = false;
      }
    }
    if (validUser === false) {
      alert("Not a valid User");
    }
    // console.log(user);
  };

  const verifyOTP = () => {
    //   if(userdata.username===username){
    //     if(userdata.username===username && userdata.password===password){
    //         login = true
    //         localStorage.setItem('login',JSON.stringify(login))
    //         alert('Login successful!')
    //         return login;
    //         // break;
    //     }else if(userdata.username!==username || userdata.password!==password){
    //         alert('Wrong credentials')

    //         // break;
    //     }
    // }
    // else if(userdata.username!==username){
    //     alert("User doesn't exist, Sign Up")
    //     // break;
    // }

    // data.forEach((el) => {
    //   if (el.email === email) {
    //     // if (el.email === email && el.password === passInp) {
    //     //   alert("Login successful!");
    //     //   // break;
    //     // } else {
    //     //   alert("Wrong credentials");
    //     //   // return;
    //     // }

    //     return setUser(el);
    //   } else {
    //     // return setUser({})
    //   }
    //   // else if (
    //   //   el.email === data[data.length - 1].email &&
    //   //   el.email !== email
    //   // ) {
    //   //   alert("User doesn't exist, Sign Up");
    //   //   return;
    //   // }
    // });

    otpInp === otp ? success() : failure();
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Stack
      bg={"#e5e5e5"}
      height={"100vh"}
      width={"100vw"}
      position={"relative"}
    >
      <Box
        zIndex={"10"}
        // bg={"#e5e5e5"}
        bg={"transparent"}
        width={{ base: "100%", md: "50%", lg: "30%" }}
        h={"60vh"}
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
          Sign in
        </Text>
        <Text
          color={"#224957"}
          textAlign={"center"}
          // bg={"#e5e5e5"}
          bg={"transparent"}
        >
          Sign in and start managing your device
        </Text>
        <Box w={"80%"} margin={"auto"} mt={"20px"} bg={"transparent"}>
          <Text
            // bg={"#e5e5e5"}
            bg={"transparent"}
          >
            Email
          </Text>
          <Input
            color={"white"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            // onChange={()=>{findUser()}}
            bg={"#224957"}
            placeholder={"Email"}
            type={"email"}
            _placeholder={{ color: "white" }}
          />
        </Box>
        <Box
          w={"80%"}
          margin={"auto"}
          mt={"20px"}
          // bg={"#e5e5e5"}
          bg={"transparent"}
        >
          <Text
            // bg={"#e5e5e5"}
            bg={"transparent"}
          >
            Password
          </Text>
          <Input
            // id="otpInput"
            // isDisabled
            bg={"#224957"}
            value={passInp}
            onChange={(e) => {
              setPassInp(e.target.value);
            }}
            color={"white"}
            placeholder={"Password"}
            type={"password"}
            pattern={"0-9"}
            // maxLength={4}
            // minLength={"4"}
            _placeholder={{ color: "white" }}
          />
        </Box>
        <Box
          bg={"transparent"}
          w={"80%"}
          margin={"auto"}
          mt={"20px"}
          display={"none"}
          id="otpInput"
        >
          <Text
            bg={"transparent"}
            // bg={"#e5e5e5"}
          >
            OTP
          </Text>
          <Input
            // id="otpInput"
            // isDisabled
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
        {/* <Input type={"checkbox"} bg={"white"} size={"sm"} /> */}
        {/* <input type={"checkbox"} className={style.check} /> */}
        <Flex
          // bg={"#e5e5e5"}
          bg={"transparent"}
          justify={"space-between"}
          w={"80%"}
          margin={"auto"}
          mt={"20px"}
        >
          <Checkbox
            colorScheme="green"
            iconColor="green"
            // bg={"#e5e5e5"}
            bg={"transparent"}
            color={"#224957"}
          >
            <Text
              bg={"#e5e5e5"}
              // bg={"transparent"}
            >
              Remember Me
            </Text>
          </Checkbox>
          <Flex
            // bg={"#e5e5e5"}
            bg={"transparent"}
            display={"none"}
            id="sendOTPAgain"
          >
            Didn't Recive &nbsp;{" "}
            <Text
              cursor={"pointer"}
              // bg={"#e5e5e5"}
              bg={"transparent"}
              color={"blue.400"}
              onClick={() => alert("OTP is 1234")}
            >
              OTP
            </Text>
          </Flex>
        </Flex>
        <Box
          h={"35px"}
          // bg={"#e5e5e5"}
          bg={"transparent"}
          alignItems={"center"}
          textAlign={"center"}
          mt={"30px"}
          position={"relative"}
        >
          <Button
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
            Send OTP
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
          w={{ base: "80%" }}
          margin={"auto"}
          mt={"20px"}
          textAlign={"center"}
          justifyContent={"center"}
        >
          Don't have an Account ?
          <Text
            // bg={"#e5e5e5"}
            bg={"transparent"}
            cursor={"pointer"}
            onClick={() => {
              navigate("/signup");
            }}
            display={"flex"}
            color={"blue.400"}
          >
            &nbsp;Sign Up
          </Text>
        </Flex>
      </Box>
      {/* <Box> */}
      <Box
        bg={"#e5e5e5"}
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

export default Login;

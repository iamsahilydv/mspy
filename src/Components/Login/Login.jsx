import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { backIn } from "framer-motion";
import React, { useState } from "react";
import {
  FaArrowLeft,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "../Image/vigil.png";
import style from "./Login.module.css";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpenAlert, onOpenAlert, onCloseAlert } = useDisclosure();
  const cancelRef = React.useRef();
  const [email, setEmail] = useState("");
  const [otpInp, setOtpInp] = useState("");
  const navigate = useNavigate()

  let otpValue= "1234"
  // const [display,setDisplay] = useState("none")

  const verify = ()=>{
    alert("verification complete")
    navigate("/home")
  };
  const failVerification = () =>{
    alert("Wrong OTP")
  };
  const Log = () => {
    let otp = document.getElementById("otp");
    email===""? alert("Enter a Email"):otp.style.zIndex = "+100";
    
    console.log(email);
  };
  const back = () => {
    let otp = document.getElementById("otp");
    otp.style.zIndex = "-10";
  };
  const Submit = () => {
    otpInp===otpValue?verify():failVerification()
    // navigate
  };
  return (
    <Box className={style.blurBox}>
      {/* <Button onClick={onOpen}>Login</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent margin={"auto"} height={"50vh"}>
          <ModalHeader textAlign={"center"}>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody id="modal">
            <Image
              height={"100px"}
              w={"150px"}
              margin={"auto"}
              mb={"30px"}
              src={logo}
              alt={"logo"}
            />
            <InputGroup>
              <Input
                w={"100%"}
                type={"email"}
                placeholder="Enter Email"
                focusBorderColor="gray.400"
                isRequired
              />
              <InputLeftElement>
                <MdEmail fontSize={"22px"} />
              </InputLeftElement>
            </InputGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              colorScheme={"green"}
              onClick={() => {
                Log();
              }}
            >
              Send OTP
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
      {/* <Login/> */}
      <Flex
        zIndex={"0"}
        className={style.flex}
        bg={"white"}
        // filter={"none"}
        // transform={"translate(-50%,-50%)"}
        // backdropBlur={"5px"}
        direction={"column"}
        gap={"20px"}
        border={"1px solid red"}
        h={"50vh"}
        w={"30%"}
        margin={"auto"}
        mt={"25vh"}
        position={"relative"}
      >
        <Image
          // border={"1px solid cyan"}
          position={"absolute"}
          top={"8vh"}
          left={"0"}
          right={"0"}
          height={"100px"}
          w={"150px"}
          margin={"auto"}
          // mb={"30px"}
          src={logo}
          alt={"logo"}
        />
        <InputGroup w={"80%"} margin={"auto"} mt={"25vh"}>
          <Input
            margin={"auto"}
            w={"100%"}
            type={"email"}
            placeholder="Enter Email"
            focusBorderColor="gray.400"
            isRequired={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputLeftElement>
            <MdEmail fontSize={"22px"} />
          </InputLeftElement>
        </InputGroup>
        <Button
          w={"35%"}
          position={"absolute"}
          right={"2vw"}
          bottom={"2vh"}
          // variant="ghost"
          colorScheme={"green"}
          onClick={() => {
            Log();
          }}
        >
          Send OTP
        </Button>
      </Flex>
      <Flex
        id="otp"
        zIndex={"-10"}
        className={style.flex}
        bg={"white"}
        // filter={"none"}
        // transform={"translate(-50%,-50%)"}
        // backdropBlur={"5px"}
        direction={"column"}
        gap={"20px"}
        border={"1px solid red"}
        h={"50vh"}
        w={"30%"}
        margin={"auto"}
        mt={"-50vh"}
        position={"relative"}
      >
        <Box
          mt={"1vh"}
          ml={"10px"}
          _hover={{ cursor: "pointer" }}
          onClick={() => {
            back();
          }}
        >
          <FaArrowLeft fontSize={"22px"} />
        </Box>
        <Image
          // border={"1px solid cyan"}
          position={"absolute"}
          top={"8vh"}
          left={"0"}
          right={"0"}
          height={"100px"}
          w={"150px"}
          margin={"auto"}
          // mb={"30px"}
          src={logo}
          alt={"logo"}
        />

        <Text
          position={"absolute"}
          top={"25vh"}
          left={"3vw"}
          w={"80%"}
          fontSize={"16px"}
          // border={"1px solid red"}
        >
          Verify Your account <Text cursor={"pointer"} color={"navy"}>{email}</Text>
        </Text>
        <InputGroup w={"80%"} margin={"auto"} mt={"28vh"}>
          <Input
          id="otpInput"
          value={otpInp}
          onChange={(e)=>{setOtpInp(e.target.value)}}
            margin={"auto"}
            w={"100%"}
            type={"password"}
            max={"1"}
            placeholder="Enter OTP"
            // ml={"10px"}
            focusBorderColor="gray.400"
            isRequired={true}
          />
          <InputLeftElement></InputLeftElement>
        </InputGroup>
        <Button
          w={"35%"}
          position={"absolute"}
          right={"2vw"}
          bottom={"2vh"}
          // variant="ghost"
          colorScheme={"green"}
          onClick={() => {
            Submit();
          }}
        >
          Submit
        </Button>
      </Flex>
    </Box>
  );
};

export default Login;

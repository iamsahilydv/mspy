import { Button, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";

const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const Log=()=>{
        let inp = document.createElement("input")
        inp.placeholder="OTP"
        let modal = document.getElementById("modal")
        modal.append(inp)
    }
  return (
    <>
      <Button onClick={onOpen}>Login</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent border={"1px solid red"} margin={"auto"} height={"50vh"}>
          <ModalHeader textAlign={"center"}>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody id="modal">
            {/* <Lorem count={2} /> */}
            <Image height={"80px"} w={"80px"} border={"1px solid red"} margin={"auto"} mb={"30px"} src={"logo"} alt={"logo"}/>
            <Text ml={"20px"} mb={"10px"}>Email</Text>
            <Input ml={"20px"} w={"80%"} type={"email"} placeholder="Enter Email" />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" colorScheme={"green"} onClick={()=>{Log()}}>Login</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;

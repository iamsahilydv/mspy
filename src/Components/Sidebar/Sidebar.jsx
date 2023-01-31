import {
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import React from "react";

const Sidebar = () => {
  return (
    <Stack width={"20%"} height={"100%"} border={"1px solid cyan"}>
      {/* <Text>Sidebar</Text> */}
      <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem 
  border={"1px solid blue"}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
            General Fetures
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </Stack>
  );
};

export default Sidebar;

import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Calender from "./Calender";
import Header from "./Header/Header";
import style from "./Keyword.module.css"

const KeywordTracking = () => {
  return (
    <Stack>
      <section>
        <Header />
      </section>
      <section style={{ padding: "10px" }}>
        <Box>
          <Tabs align={"center"}>
            <TabList>
              <Tab w={"150px"} textTransform={"uppercase"}>
                Rules
              </Tab>
              <Tab isDisabled cursor={"default"} textTransform={"uppercase"}>
                Detected Keywords
              </Tab>
              {/* <Tab>Three</Tab> */}
            </TabList>

            <TabPanels>
              <TabPanel>
                <Stack
                //   border={"1px solid cyan"}
                  h={"80vh"}
                >
                  {/* <Box align={"left"} justifyContent={"space-between"}>
                    
                    <Text>Choose Features *</Text>
                  </Box> */}
                  <Box
                    h={40}
                    boxShadow={
                      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
                    }
                    borderRadius={"md"}
                    p={3}
                  >
                    <Flex
                      gap={4}
                      w={"100%"}
                      // border={"1px solid red"}
                      justifyContent={"space-between"}
                      pl={2}
                      pr={2}
                      pb={2}
                      h={"60%"}
                    >
                      {/* <HStack p={2} border={"1px solid cyan"}> */}
                      <Box w={"full"}>
                        <Text
                          align={"left"}
                          // border={"1px solid red"}
                          color={"gray.500"}
                        >
                          Add rule:
                        </Text>
                        <Input
                          p={2}
                          placeholder="Enter word or phrase *"
                          variant={"flushed"}
                          bg={"gray.200"}
                          // borderBottom={"1px solid gray"}
                          isRequired={true}
                        />
                      </Box>
                      {/* </HStack> */}
                      <Box w={"full"}>
                        <Text color={"gray.500"} align={"left"}>
                          Choose Features *
                        </Text>

                        <Box
                          w={"100%"}
                          h={10}
                        //   border={"1px solid cyan"}
                          p={1}
                          boxSizing={"border-box"}
                          backgroundColor="#e2e8f0"
                        >
                          <select className={style.select}
                            style={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: "transparent",
                              borderRadius: "2%",
                              color:"#718096"
                              //   paddingLeft: "10px",
                            }}
                          >
                            <option value="">All</option>
                          </select>
                        </Box>
                      </Box>
                      <Box w={"full"}>
                        <Text align={"left"} color={"gray.500"}>
                          Notifications
                        </Text>
                        <Input />
                      </Box>
                    </Flex>
                    <Box align={"right"} pr={4}>
                      <Button>ADD</Button>
                    </Box>
                  </Box>
                  <Box align={"left"}>
                    <Calender />
                  </Box>
                  <Box
                    borderRadius={"md"}
                    boxShadow={
                      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
                    }
                    // border={"1px solid red"}
                    minHeight={"20%"}
                    maxHeight={"60%"}
                    p={5}
                    // alignItems={"center"}
                    // verticalAlign={"center"}
                  >
                    <Text
                      //   border={"1px solid cyan"}
                      alignSelf={"center"}
                      fontSize={"20px"}
                      color={"gray.500"}
                    >
                      
                      No recent activity
                    </Text>
                  </Box>
                </Stack>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              {/* <TabPanel>
                <p>three!</p>
              </TabPanel> */}
            </TabPanels>
          </Tabs>
        </Box>
      </section>
    </Stack>
  );
};

export default KeywordTracking;

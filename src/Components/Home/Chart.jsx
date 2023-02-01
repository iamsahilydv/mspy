import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import style from "./Dashboard.module.css";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x-axis
  LinearScale, // y-axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const a = [20, 15, 5, 19];
const b = [10, 17, 9, 25];
const c = [23, 5, 37, 0];
const d = [12, 27, 17, 22];
export const options = {
  responsive: true,
  plugins: {
    legend: true,
    scales: {
        y: {

          min: 0,
          max: 50,
        },
    //   yAxes: [
    //     {
    //       gridLines: {
    //         color: "rgba(0, 0, 0, 0)",
    //       },
    //     },
    //   ],
    },
  },
};

const labels = ["2020-01", "2020-02", "2020-03", "2020-04"];

export const data = {
  labels: labels,
  datasets: [
    {
      label: "Browser History",
      data: a,
      backgroundColor: "pink",
      borderColor: "pink",
      pointBorderColor: "aqua",
      fill: true,
      tension: "0.1",
    },
    {
      label: "Whatsapp",
      data: b,
      backgroundColor: "green",
      borderColor: "green",
      pointBorderColor: "aqua",
      fill: true,
      tension: "0.1",
    },
    {
      label: "Text Message",
      data: c,
      backgroundColor: "gray",
      borderColor: "gray",
      pointBorderColor: "aqua",
      fill: true,
      tension: "0.1",
    },
    {
      label: "GPS Location",
      data: d,
      backgroundColor: "red",
      borderColor: "red",
      pointBorderColor: "aqua",
      fill: true,
      tension: "0.1",
    },
  ],
};

const Chart = () => {
  return (
    <Stack
      h={{ base: "auto", lg: "70vh" }}
      w={"98%"}
      margin={"auto"}
      mb={"20px"}
      // border={"1px solid red"}
      p={"20px"}
    >
      <Text height={"6vh"} fontSize={"28px"}>
        Target Device Activity
      </Text>
      <Box
        //   border={"1px solid cyan"}
        h={"100%"}
        w={"100%"}
      >
        <Line
          // border={"1px solid blue"}
          h={"100%"}
          w={"100%"}
          options={options}
          data={data}
        ></Line>
      </Box>
    </Stack>
  );
};

export default Chart;

// import React, { useState } from 'react'
// import { Line } from 'react-chartjs-2'

// const Chart = () => {
//     const [state,setState]= useState({
//         option:{
//             chart:{
//                 id:"basic-bar"
//             }
//         }
//     })
//   return (
//     <div>
//         <Line />
//     </div>
//   )
// }

// export default Chart

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top'
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

// export function App() {
//   return <Line options={options} data={data} />;
// }

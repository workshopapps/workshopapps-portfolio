import React from "react";
import { Stack, Text, HStack } from "@chakra-ui/react";

const sections = [
  { field: "Investment", value: "$1.7 Billion" },
  { field: "Revenue", value: "$2.5 Billion" },
  { field: "Active Users", value: "1,500,321" },
  { field: "Conversion Rate", value: "61%" },
];

const Section = ({ field = "investment" }) => (
  <Stack spacing={6} textAlign="center">
    <Text color="text.200" fontSize="20px">
      {field}
    </Text>
    <Heading color="brand.50" fontSize="2rem">
      {value}
    </Heading>
  </Stack>
);

function DashboardHeader() {
  return (
    <Stack py={10} px="90px" bg="brand.200">
      DashboardHeader
    </Stack>
  );
}

export default DashboardHedaader;

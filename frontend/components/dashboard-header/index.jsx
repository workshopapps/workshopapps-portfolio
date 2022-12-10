import React from "react";
import { Stack, Text, HStack, Heading } from "@chakra-ui/react";

const sections = [
  { field: "Investment", value: "$1.7 Billion" },
  { field: "Revenue", value: "$2.5 Billion" },
  { field: "Active Users", value: "1,500,321" },
  { field: "Conversion Rate", value: "61%" },
];

const Section = ({ field, value }) => (
  <Stack spacing={6} textAlign="center" minW="190px">
    <Text color="text.200" fontSize={{ base: "18px", md: "20px" }}>
      {field}
    </Text>
    <Heading color="brand.50" fontSize={{ base: "1.6rem", md: "2rem" }}>
      {value}
    </Heading>
  </Stack>
);

function DashboardHeader() {
  return (
    <Stack w="full" minW="max-content" spacing="60px">
      <Stack
        py={10}
        px={{ base: "30px", md: "90px" }}
        bg="brand.200"
        rounded="10"
      >
        <HStack w="full" justifyContent="space-between" rounded="6">
          {sections.map((item) => (
            <Section key={item.field} {...item} />
          ))}
        </HStack>
      </Stack>
    </Stack>
  );
}

export default DashboardHeader;

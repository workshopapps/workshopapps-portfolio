import React from "react";
import { Stack, Text, Heading, HStack } from "@chakra-ui/react";
import Chart from "../chart";

function FinancialCard({ isFirst }) {
  return (
    <Stack spacing={3} w="full" maxW="330px" minW="300px">
      {isFirst && <Heading fontSize="md">Financials</Heading>}
      <Stack
        alignItems="center"
        bg="brand.100"
        minH="240px"
        w="full"
        rounded="8px"
        padding="20px"
        pt="27px"
      >
        <Stack w="full" spacing={6}>
          <HStack justifyContent="space-between" w="full">
            <Stack spacing={4} textAlign="center">
              <Text fontSize="16px" color="text.100">
                Customers
              </Text>
              <Heading fontSize="24px">535,000</Heading>
            </Stack>
            <Stack spacing={4} textAlign="center">
              <Text fontSize="16px" color="text.100">
                Revenue
              </Text>
              <Heading fontSize="24px">$700,000</Heading>
            </Stack>
          </HStack>
          <Stack>
            <Chart />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default FinancialCard;

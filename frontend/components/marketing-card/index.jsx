import React from "react";
import {
  Stack,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  HStack,
} from "@chakra-ui/react";

function MarketingCard({ isFirst }) {
  return (
    <Stack spacing={3} w="full" maxW="330px" minW="300px">
      {isFirst && <Heading fontSize="md">Marketing</Heading>}
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
            <Text color="text.200">Subscribers</Text>
            <Heading fontSize="md">50,000</Heading>
          </HStack>
          <HStack justifyContent="space-between" w="full">
            <Text color="text.200">Website Traffic</Text>
            <Heading fontSize="md">2500 Daily</Heading>
          </HStack>
          <HStack justifyContent="space-between" w="full">
            <Text color="text.200">Click-through rate</Text>
            <Stack>
              <CircularProgress
                value={98}
                thickness="12px"
                size="60px"
                color="brand.50"
              >
                <CircularProgressLabel>
                  <Heading fontSize="nm">735</Heading>
                </CircularProgressLabel>
              </CircularProgress>
            </Stack>
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default MarketingCard;

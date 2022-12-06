import React from "react";
import {
  Stack,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Heading,
} from "@chakra-ui/react";

function MarketCard() {
  return (
    <Stack spacing={3} w="full" maxW="330px">
      <Heading fontSize="md">Marketing</Heading>
      <Stack
        alignItems="center"
        bg="brand.100"
        minH="280px"
        w="full"
        justifyContent="center"
        rounded="8px"
        padding="20px"
      >
        <Stack>
          <HStack>
            <Text>Subscribers</Text>
            <Heading fontSize="md">50,000</Heading>
          </HStack>
          <Stack>
            <CircularProgress
              value={98}
              color="brand.50"
              size="160px"
              thickness="14px"
            >
              <CircularProgressLabel>
                <Heading fontSize="3xl">$5</Heading>
              </CircularProgressLabel>
            </CircularProgress>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default MarketCard;

import React from "react";
import {
  Stack,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Heading,
} from "@chakra-ui/react";

function SalesCard() {
  return (
    <Stack spacing={3} w="full" maxW="330px">
      <Heading fontSize="md">Sales</Heading>
      <Stack
        alignItems="center"
        bg="brand.100"
        minH="280px"
        w="full"
        justifyContent="center"
        rounded="8px"
      >
        <Stack>
          <Text textAlign="center">Cost of selling</Text>
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

export default SalesCard;

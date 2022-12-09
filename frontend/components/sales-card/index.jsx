import React from "react";
import {
  Stack,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Heading,
} from "@chakra-ui/react";

function SalesCard({ isFirst }) {
  return (
    <Stack spacing={3} w="full" maxW="330px" minW="330px">
      {isFirst && <Heading fontSize="md">Sales</Heading>}
      <Stack
        alignItems="center"
        bg="brand.100"
        minH="240px"
        w="full"
        padding="20px"
        justifyContent="center"
        rounded="8px"
      >
        <Stack>
          <Text textAlign="center">Cost of selling</Text>
          <Stack>
            <CircularProgress
              value={99}
              color="brand.50"
              size="140px"
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

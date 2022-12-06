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
    <Stack
      minH="300px"
      alignItems="center"
      bg="brand.100"
      w="full"
      maxW="330px"
      justifyContent="center"
      rounded="8px"
    >
      <Stack>
        <Text textAlign="center">Cost of selling</Text>
        <Stack>
          <CircularProgress
            value={98}
            color="brand.50"
            size="200px"
            thickness="14px"
          >
            <CircularProgressLabel>
              <Heading fontSize="3xl">$5</Heading>
            </CircularProgressLabel>
          </CircularProgress>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SalesCard;

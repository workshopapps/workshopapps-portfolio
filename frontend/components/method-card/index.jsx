import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

function MethodCard() {
  return (
    <Stack
      bg="brand.50"
      w="full"
      maxW="480px"
      height="231px"
      alignItems="center"
      justifyContent="center"
      pax={3}
      rounded={8}
    >
      <Stack alignItems="center" maxW="360px" mx="auto" spacing={6}>
        <Heading color="white" fontSize="28px">
          The Hiring Process
        </Heading>
        <Text color="brand.800">
          Applicants are hired in their numbers as long as their application is
          before the deadline of the company.
        </Text>
      </Stack>
    </Stack>
  );
}

export default MethodCard;

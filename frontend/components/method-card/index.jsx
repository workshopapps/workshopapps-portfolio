import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

function MethodCard({ title, text }) {
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
          {title}
        </Heading>
        <Text color="brand.800">{text}</Text>
      </Stack>
    </Stack>
  );
}

export default MethodCard;

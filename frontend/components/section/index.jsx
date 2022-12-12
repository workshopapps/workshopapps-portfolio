import React from "react";
import { Stack } from "@chakra-ui/react";

function Section({ children, ...others }) {
  return (
    <Stack
      w="full"
      maxW="1300px"
      mx="auto"
      px={{ base: 6, md: 12 }}
      {...others}
    >
      {children}
    </Stack>
  );
}

export default Section;

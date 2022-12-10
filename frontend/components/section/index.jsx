import React from "react";
import { Stack } from "@chakra-ui/react";

function Section({ children, ...others }) {
  return (
    <Stack
      w="full"
      maxW="1440px"
      mx="auto"
      px={{ base: 6, md: 10 }}
      {...others}
    >
      {children}
    </Stack>
  );
}

export default Section;

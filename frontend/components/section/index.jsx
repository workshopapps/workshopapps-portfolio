import React from "react";
import { Stack } from "@chakra-ui/react";

function Section({ children }) {
  return (
    <Stack w="full" maxW="1200px" mx="auto" px={{ base: 6, md: 10 }}>
      {children}
    </Stack>
  );
}

export default Section;

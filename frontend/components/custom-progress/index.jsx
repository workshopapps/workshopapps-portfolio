import {
  CircularProgress,
  CircularProgressLabel,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";

function Progress({ value, innerText = "1/3" }) {
  return (
    <CircularProgress value={30} size="200px" color="brand.50">
      <CircularProgressLabel display="grid" placeItems="center">
        <Box
          w="20"
          h={20}
          rounded="full"
          shadow="md"
          display="grid"
          placeItems="center"
        >
          <Heading fontSize="2rem">{innerText}</Heading>
        </Box>
      </CircularProgressLabel>
    </CircularProgress>
  );
}

export default Progress;

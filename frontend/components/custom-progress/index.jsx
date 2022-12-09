import {
  CircularProgress,
  CircularProgressLabel,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";

function Progress({ value, step, steps }) {
  return (
    <CircularProgress value={value} size="200px" color="brand.50">
      <CircularProgressLabel display="grid" placeItems="center">
        <Box
          w="20"
          h={20}
          rounded="full"
          shadow="0px 21.9422px 43.8843px rgba(0, 0, 0, 0.05);"
          display="grid"
          placeItems="center"
        >
          <Heading fontSize="2rem">{`${step}/${steps}`}</Heading>
        </Box>
      </CircularProgressLabel>
    </CircularProgress>
  );
}

export default Progress;

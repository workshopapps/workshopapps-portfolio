import React from "react";
import { HStack, Button, Text, Box } from "@chakra-ui/react";
import Icon from "../icon";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";

const btnProps = {
  variant: "ghost",
  outline: "none",
  bg: "transparent",
  zIndex: "3",
  size: "md",
  fontWeight: "normal",
  _hover: {},
  overflow: "hidden",
  _active: { bg: "transparent" },
  _focus: { bg: "transparent" },
};

const Slide = () => (
  <Box
    pos="absolute"
    top={0}
    as={motion.div}
    right={0}
    w="full"
    h="full"
    bg="#fff"
    transformOrigin="center"
    zIndex={-1}
    layoutId="underline"
  />
);

const btnFields = [
  { text: "Cohort 1 - ", subText: "2022", state: "2022" },
  { text: "Cohort 2 - ", subText: "2023", state: "2023" },
];
function CohortToggler() {
  const [cohort, setCohort] = React.useState("2022");
  return (
    <HStack w="fit-content" bg="brand.200" p={1} rounded={6} spacing={0}>
      {btnFields.map((btn) => (
        <Button {...btnProps} onClick={() => setCohort(btn.state)}>
          {btn.text}
          <Text fontWeight="bold">{btn.subText}</Text>
          {cohort === btn.state ? <Slide /> : null}
        </Button>
      ))}
    </HStack>
  );
}

export default CohortToggler;

import React from "react";
import { HStack, Button, Text, Box } from "@chakra-ui/react";
import Icon from "../icon";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";

const btnProps = {
  variant: "ghost",
  outline: "none",
  bg: "transparent",
  position: "relative",
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
    zIndex={-1}
    layoutId="underline"
  />
);

function CohortToggler() {
  const [cohort, setCohort] = React.useState("2022");
  return (
    <HStack w="fit-content" bg="brand.200" p={1} rounded={6}>
      <Button {...btnProps} onClick={() => setCohort("2022")}>
        Cohort 1 - <Text fontWeight="bold">2022</Text>
        {cohort === "2022" ? <Slide /> : null}
      </Button>
      <Button
        rightIcon={<Icon iconComp={FiLock} boxSize={5} />}
        {...btnProps}
        onClick={() => setCohort("2023")}
      >
        Cohort 2 - <Text fontWeight="bold">2023</Text>
        {cohort === "2023" ? <Slide /> : null}
      </Button>
    </HStack>
  );
}

export default CohortToggler;

import React from "react";
import { Stack, Text, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import gritLogo from "../../public/images/grit.svg";

function ProductCard() {
  return (
    <Stack spacing={3} w="full" maxW="330px">
      <Heading fontSize="md">Product</Heading>
      <Stack
        alignItems="center"
        bg="brand.100"
        minH="230px"
        w="full"
        rounded="8px"
        padding="20px"
        pt="27px"
      >
        <Stack w="full" spacing={6}>
          <HStack spacing={5} w="full">
            <Box w="40" h={40} p={2}>
              <Image alt="" src={gritLogo} />
            </Box>
            <Heading fontFamily="Inter" color="black">
              Gritty Grammar
            </Heading>
          </HStack>
          <Stack>
            <Text>
              An application that revises grammar problems through discussions
              with a chat bot that uses AI to transcribe user input
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ProductCard;

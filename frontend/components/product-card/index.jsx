import React from "react";
import { Stack, Text, Heading, HStack, Box } from "@chakra-ui/react";
import Image from "next/image";

function ProductCard({ isFirst, name, img, desc }) {
  return (
    <Stack spacing={3} w="full" maxW="330px" minW="330px">
      {isFirst && <Heading fontSize="md">Product</Heading>}
      <Stack
        alignItems="center"
        bg="brand.100"
        minH="240px"
        w="full"
        rounded="8px"
        padding="20px"
        pt="27px"
      >
        <Stack w="full" spacing={6}>
          <HStack spacing={5} w="full">
            <Box
              p={2}
              w="70px"
              h="70px"
              display="grid"
              placeItems="center"
              rounded={6}
              background="linear-gradient(137.69deg, #EFF3FC 0%, #CFD4DE 99.91%)"
            >
              <Image alt="" src={img} />
            </Box>
            <Heading
              textTransform="capitalize"
              fontFamily="Inter"
              color="black"
              fontSize="xl"
            >
              {name}
            </Heading>
          </HStack>
          <Stack>
            <Text color="text.100" fontSize="nm">
              {desc}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ProductCard;

import { Box, HStack, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import FinancialCard from "../financial-card";
import Icon from "../icon";
import MarketingCard from "../marketing-card";
import ProductCard from "../product-card";
import SalesCard from "../sales-card";
import { BsFillCaretUpFill, BsCaretDownFill } from "react-icons/bs";

function ProductContainer({
  isFirst = false,
  loss = false,
  name,
  img,
  desc,
  num,
  url,
}) {
  return (
    <HStack
      position="relative"
      w="full"
      overflowX={{ base: "auto" }}
      className="scroll-kit"
    >
      <Box>
        <HStack spacing={2}>
          {!loss ? (
            <Stack spacing={0} color="brand.500">
              <Icon iconComp={BsFillCaretUpFill} boxSize={4} color="inherit" />
              <Heading fontSize="sm">+1</Heading>
            </Stack>
          ) : (
            <Stack spacing={0} color="brand.600">
              <Heading fontSize="sm">-1</Heading>
              <Icon iconComp={BsCaretDownFill} boxSize={4} color="inherit" />
            </Stack>
          )}
          <Heading fontSize="lg">0{num}</Heading>
        </HStack>
      </Box>
      <ProductCard
        isFirst={isFirst}
        name={name}
        img={img}
        desc={desc}
        url={url}
      />
      {/* <FinancialCard isFirst={isFirst} /> */}
      <MarketingCard isFirst={isFirst} />
      {/* <SalesCard isFirst={isFirst} /> */}
    </HStack>
  );
}

export default ProductContainer;

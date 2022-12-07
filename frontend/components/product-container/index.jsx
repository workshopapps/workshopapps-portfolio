import { Box, HStack, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import FinancialCard from "../financial-card";
import Icon from "../icon";
import MarketingCard from "../marketing-card";
import ProductCard from "../product-card";
import SalesCard from "../sales-card";
import { BsFillCaretUpFill } from "react-icons/bs";

function ProductContainer({ isFirst = false }) {
  return (
    <HStack position="relative">
      <Box position="absolute" top={isFirst ? 14 : 10} left={-12}>
        <HStack spacing={2}>
          <Stack spacing={0}>
            <Icon iconComp={BsFillCaretUpFill} boxSize={4} color="inherit" />
            <Heading fontSize="sm">01</Heading>
          </Stack>
          <Heading fontSize="xl">01</Heading>
        </HStack>
      </Box>
      <ProductCard isFirst={isFirst} />
      <FinancialCard isFirst={isFirst} />
      <MarketingCard isFirst={isFirst} />
      <SalesCard isFirst={isFirst} />
    </HStack>
  );
}

export default ProductContainer;

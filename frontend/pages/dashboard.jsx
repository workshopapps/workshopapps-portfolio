import Head from "next/head";
import { Stack, HStack } from "@chakra-ui/react";
import CohortToggler from "../components/cohort-toggler";
import DashboardHedaader from "../components/dashboard-header";
import CustomSelect, { months, sortTypes } from "../components/custom-select";
import ProductContainer from "../components/product-container";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Workshop Apps | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack p={20} spacing="60px">
        <DashboardHedaader />
        <HStack w="full" justifyContent="space-between">
          <CohortToggler />
          <HStack spacing={3}>
            <CustomSelect options={months} />
            <CustomSelect type="Sort" options={sortTypes} />
          </HStack>
        </HStack>
        <Stack w="full" spacing={12}>
          <ProductContainer isFirst />
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
          <ProductContainer />
        </Stack>
      </Stack>
    </div>
  );
}

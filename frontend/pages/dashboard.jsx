import Head from "next/head";
import SalesCard from "../components/sales-card";
import MarketingCard from "../components/marketing-card";
import { Stack, HStack } from "@chakra-ui/react";
import ProductCard from "../components/product-card";
import CohortToggler from "../components/cohort-toggler";
import DashboardHedaader from "../components/dashboard-header";
import CustomSelect from "../components/custom-select";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Workshop Apps | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack p={20} spacing="60px">
        <DashboardHedaader />
        <HStack w="full" justifyContent="space-between">
          <CohortToggler />
          <HStack spacing={3}>
            <CustomSelect />
            <CustomSelect />
          </HStack>
        </HStack>
        <HStack>
          <ProductCard />
          <MarketingCard />
          <SalesCard />
        </HStack>
      </Stack>
    </div>
  );
}

import Head from "next/head";
import SalesCard from "../components/sales-card";
import MarketingCard from "../components/marketing-card";
import { Stack, HStack } from "@chakra-ui/react";
import ProductCard from "../components/product-card";
import CohortToggler from "../components/cohort-toggler";
import DashboardHedaader from "../components/dashboard-header";
import CustomSelect, { months, sortTypes } from "../components/custom-select";
import FinancialCard from "../components/financial-card";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Workshop Apps | Dashboard</title>
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
        <HStack>
          <ProductCard />
          <FinancialCard />
          <MarketingCard />
          <SalesCard />
        </HStack>
      </Stack>
    </div>
  );
}

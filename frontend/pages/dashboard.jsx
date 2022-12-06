import Head from "next/head";
import SalesCard from "../components/sales-card";
import MarketingCard from "../components/marketing-card";
import { Stack, HStack } from "@chakra-ui/react";
import ProductCard from "../components/product-card";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Workshop Apps | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack px={20}>
        <HStack>
          <SalesCard />
          <MarketingCard />
          <ProductCard />
        </HStack>
      </Stack>
    </div>
  );
}

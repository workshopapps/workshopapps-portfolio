import Head from "next/head";
import SalesCard from "../components/sales-card";
import { Stack } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Workshop Apps | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack px={20}>
        <SalesCard />
      </Stack>
    </div>
  );
}

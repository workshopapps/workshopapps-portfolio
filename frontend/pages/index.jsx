import Head from "next/head";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>$1.7 Billion</Heading>
    </div>
  );
}

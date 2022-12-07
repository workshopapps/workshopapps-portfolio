import { Heading, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import Section from "../components/section";

export default function Method() {
  return (
    <div>
      <Head>
        <title>Workshop Apps | Method </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack w="full">
        <Stack w="full" bg="white" pt="132px" pb="80px">
          <Section>
            <Heading fontSize="xl" color="black">
              Overview
            </Heading>
            <Text color="brand.700">
              We are a virtual studio that only aims at hiring only the best
              qualified people, hence to achieve this process, candidates are
              made to go through a series of task with already set requirements,
              this is done in order to test as well as bring out the best. Only
              qualified candidats gets hired. The steps include:
            </Text>
          </Section>
        </Stack>
      </Stack>
    </div>
  );
}

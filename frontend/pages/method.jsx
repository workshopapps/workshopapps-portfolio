import { Heading, Stack, Text, Box } from "@chakra-ui/react";
import Head from "next/head";
import Progress from "../components/custom-progress";
import MethodCard from "../components/method-card";
import Section from "../components/section";

export default function Method() {
  return (
    <div>
      <Head>
        <title>Workshop Apps | Method </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack w="full">
        <Box
          px={6}
          h="340px"
          w="full"
          className="banner"
          color="white"
          display="grid"
          placeItems="center"
        >
          <Stack spacing={6} textAlign="center">
            <Heading>The Method of WorkshopApp </Heading>
            <Text>
              Below is a step by step representation of the hiring process of
              WorkshopApp
            </Text>
          </Stack>
        </Box>
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
        <Stack bg="brand.400">
          <Section py={6}>
            <Heading fontSize="xl">Selection Process</Heading>
          </Section>
        </Stack>
        <Box p={20}>
          <MethodCard />
          <Progress />
        </Box>

        <Stack bg="brand.400">
          <Section py={6}>
            <Heading fontSize="xl">What Happens After Selection</Heading>
          </Section>
        </Stack>
      </Stack>
    </div>
  );
}

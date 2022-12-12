import { Heading, Stack, Text, Box, HStack } from "@chakra-ui/react";
import Head from "next/head";
import Progress from "../components/custom-progress";
import MethodCard from "../components/method-card";
import Section from "../components/section";

const selectionProcess = [
  {
    title: "The Hiring Process",
    text: `Applicants are hired in their numbers as long 
    as their application is before the deadline of 
    the company.`,
    step: 1,
  },
  {
    title: "The Test Process",
    text: `Applicants are then put through a number of test 
    through competions.This process is done to first 
    reduce the number of candidates as well as 
    challenge them into bringing out the best in them.`,
    step: 2,
  },
  {
    title: "The Elimination Process",
    text: `Applicants who dont meet up to the task 
    requirements / deadlines, get eliminated.
    This process continues until we are left 
    with our desired number / the “Best`,
    step: 3,
  },
];

const afterProcess = [
  {
    title: "The Victorious",
    text: `Applicants who have emerges victorious are then
    merged into teams of competent individuals.`,
    step: 1,
  },
  {
    title: "The Team Work",
    text: `Once merged into tams, the team are then 
    assigned projects to work on as well recieve 
    guidiance into turning such project into reality.`,
    step: 2,
  },
];

export default function Method() {
  return (
    <div>
      <Head>
        <title>Workshop Apps | Method </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

      <Stack maxWidth="1440px" margin="0 auto">
        <Stack bg="white" pt="132px" pb="80px" width="75%" margin="0 auto">
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
          <Section py={6} width="75%" margin="0 auto">
            <Heading fontSize="xl">Selection Process</Heading>
          </Section>
        </Stack>

        <Stack w="full">
          <Section py={10} width="75%" margin="0 auto">
            <Box pb={10}>
              <Text fontWeight={600} color="brand.700">
                There are three various steps in this stage, and they are as
                follow:
              </Text>
            </Box>
            <Stack pl={{ base: 0, md: 0 }} spacing={10} pb={20}>
              {selectionProcess.map((process) => (
                <HStack
                  gap={{ base: 4, md: 20 }}
                  key={process.step}
                  flexWrap="wrap"
                >
                  <MethodCard text={process.text} title={process.title} />
                  <Progress
                    value={Math.ceil(
                      (process.step / selectionProcess.length) * 100
                    )}
                    step={process.step}
                    steps={selectionProcess.length}
                  />
                </HStack>
              ))}
            </Stack>
          </Section>
        </Stack>

        <Stack bg="brand.400">
          <Section py={6} width="75%" margin="0 auto">
            <Heading fontSize="xl">What Happens After Selection</Heading>
          </Section>
        </Stack>
        <Stack w="full">
          <Section py={10} width="75%" margin="0 auto">
            <Box pb={10}>
              <Text fontWeight={600} color="brand.700">
                There are two various steps in this stage, and they are as
                follow:
              </Text>
            </Box>
            <Stack pl={{ base: 0, md: 0 }} spacing={10} pb={20}>
              {afterProcess.map((process) => (
                <HStack
                  gap={{ base: 4, md: 20 }}
                  key={process.step}
                  flexWrap="wrap"
                >
                  <MethodCard text={process.text} title={process.title} />
                  <Progress
                    value={Math.ceil(
                      (process.step / afterProcess.length) * 100
                    )}
                    step={process.step}
                    steps={afterProcess.length}
                  />
                </HStack>
              ))}
            </Stack>
          </Section>
        </Stack>
      </Stack>
    </div>
  );
}

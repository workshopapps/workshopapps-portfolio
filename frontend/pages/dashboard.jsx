import Head from "next/head";
import { Stack, HStack } from "@chakra-ui/react";
import CohortToggler from "../components/cohort-toggler";
import DashboardHedaader from "../components/dashboard-header";
import CustomSelect, { months, sortTypes } from "../components/custom-select";
import ProductContainer from "../components/product-container";

const products = [
  {
    name: "Gritty Grammer",
    img: "omo",
    loss: false,
    desc: "An application that revises grammar problems through discussions with a chat bot that uses AI to transcribe user input",
  },
  {
    name: "Coverly",
    img: "omo",
    loss: true,
    desc: "It is an AI application that gets necessary informations from a CV and generates a Cover letter",
  },
  {
    name: "Soberpal",
    img: "omo",
    loss: false,
    desc: "A to-do list where users can assign tasks to a Virtual Assistant or receive a phone call if they fail to finish a task",
  },
  {
    name: "Kitchen Diary",
    img: "omo",
    loss: false,
    desc: "An application that revises grammar problems through discussions with a chat bot that uses AI to transcribe user input",
  },
  {
    name: "StreetRate",
    img: "omo",
    loss: false,
    desc: "An application that revises grammar problems through discussions with a chat bot that uses AI to transcribe user input",
  },
];
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
          <ProductContainer isFirst loss />
          <ProductContainer />
          <ProductContainer />
          <ProductContainer loss />
          <ProductContainer />
          <ProductContainer loss />
          <ProductContainer />
        </Stack>
      </Stack>
    </div>
  );
}

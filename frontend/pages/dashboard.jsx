import Head from "next/head";
import { Stack, HStack } from "@chakra-ui/react";
import CohortToggler from "../components/cohort-toggler";
import DashboardHeader from "../components/dashboard-header";
import CustomSelect, { months, sortTypes } from "../components/custom-select";
import ProductContainer from "../components/product-container";
import coverlyImg from "../public/images/coverly.svg";
import gritImg from "../public/images/grit.svg";
import soberpalImg from "../public/images/soberpal.svg";
import kitchenImg from "../public/images/kitchen.svg";
import streetrateImg from "../public/images/streetrate.svg";
import arenaImg from "../public/images/arena.svg";
import descriptoImg from "../public/images/descripto.svg";
import devaskImg from "../public/images/devask.svg";
import Section from "../components/section";

const products = [
  {
    name: "Gritty Grammer",
    img: gritImg,
    loss: false,
    desc: "An application that revises grammar problems through discussions with a chat bot that uses AI to transcribe user input",
  },
  {
    name: "Coverly",
    img: coverlyImg,
    loss: true,
    desc: "It is an AI application that gets necessary informations from a CV and generates a Cover letter",
  },
  {
    name: "Soberpal",
    img: soberpalImg,
    loss: false,
    desc: "A to-do list where users can assign tasks to a Virtual Assistant or receive a phone call if they fail to finish a task",
  },
  {
    name: "Kitchen Diary",
    img: kitchenImg,
    loss: false,
    desc: "An application that revises grammar problems through discussions with a chat bot that uses AI to transcribe user input",
  },
  {
    name: "StreetRate",
    img: streetrateImg,
    loss: false,
    desc: "An application that revises grammar problems through discussions with a chat bot that uses AI to transcribe user input",
  },
  {
    name: "V-Arena",
    img: arenaImg,
    loss: false,
    desc: "An application that revises grammar problems through discussions with a chat bot that uses AI to transcribe user input",
  },
  {
    name: "Discripto",
    img: descriptoImg,
    loss: false,
    desc: "An application that revises grammar problems through discussions with a chat bot that uses AI to transcribe user input",
  },
  {
    name: "Devask",
    img: devaskImg,
    loss: true,
    desc: "An application that revises grammar problems through discussions with a chat bot that uses AI to transcribe user input",
  },
];

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Workshop Apps | Portfolio</title>
      </Head>
      <Section py={20} spacing="60px" maxW="1400px">
        {/* <DashboardHeader /> */}
        <HStack w="full" justifyContent="space-between">
          <CohortToggler />
          <HStack spacing={3}>
            <CustomSelect options={months} />
            <CustomSelect type="Sort" options={sortTypes} />
          </HStack>
        </HStack>
        <Stack w="full" spacing={12}>
          {products.map((product, i) => (
            <ProductContainer
              key={product.name}
              isFirst={i === 0}
              num={i + 1}
              {...product}
            />
          ))}
        </Stack>
      </Section>
    </div>
  );
}

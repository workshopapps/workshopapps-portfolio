import Head from "next/head";
import { Stack, HStack, Heading } from "@chakra-ui/react";
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
import applyformImg from "../public/images/applyformeImg.svg";
import catchupImg from "../public/images/catchUpImg.svg";
import fixitImg from "../public/images/fixitImg.svg";
import heedImg from "../public/images/heedImg.svg";
import lovemeImg from "../public/images/lovemeImg.svg";
import magicbookImg from "../public/images/magicbookwriterImg.svg";
import opstadImg from "../public/images/opstadImg.svg";
import reconcileaiImg from "../public/images/reconcileAiImg.svg";
import reputeImg from "../public/images/reputeImg.svg";
import tickedImg from "../public/images/tickedImg.svg";
import trophicalweatherImg from "../public/images/tropicalWeather.svg";
import varenaImg from "../public/images/varenaImg.svg";
import zuvartarImg from "../public/images/zuvatarImg.svg";
import voxclipsImg from "../public/images/voxclipsImg.svg";
import Section from "../components/section";

const products = [
  {
    name: "Coverly",
    img: coverlyImg,
    loss: true,
    desc: "An AI powered cover letter generator that gets relevant user data from uploaded CVs and helps users write cover letters for job applications without having them explicitly do it.",
  },
  {
    name: "Ticked App",
    img: tickedImg,
    loss: false,
    desc: "A todo app with a virtual assistant who calls users to remind them to do their task when it’s due. Users can also assign tasks to the virtual assistant to do for them",
  },
  {
    name: "Kitchen Diary",
    img: kitchenImg,
    loss: false,
    desc: "is a web app that enables users edit and print out beautiful recipe cards in A4 format that they can use in their kitchen or as gifts to friends and family.",
  },
  {
    name: "StreetRate",
    img: streetrateImg,
    loss: false,
    desc: "A real exchange rate app that shows the user accurate black market rates.",
  },
  {
    name: "VoxClips",
    img: voxclipsImg,
    loss: false,
    desc: "A web app that allows podcasters upload their podcast audio to get a talking head animated video version of their audio",
  },
  {
    name: "Discripto",
    img: descriptoImg,
    loss: false,
    desc: "A tool that focus that help users efficiently and effectively manage and organize their image collections, making it easier and faster to find and access the images they need.",
  },
  {
    name: "Eval360",
    img: fixitImg,
    loss: true,
    desc: "is a skill evaluator tool that is used for assessing engineers in an organisation.",
  },
  {
    name: "Heed",
    img: heedImg,
    loss: true,
    desc: "Customer support call transcript and sentimental analysis tool to rank sales and support team performance",
  },
  {
    name: "Soberpal",
    img: soberpalImg,
    loss: true,
    desc: "Is an alcohol addiction support app that helps users reduce their alcohol consumption.",
  },
  {
    name: "Repute",
    img: reputeImg,
    loss: true,
    desc: "Is a reputation management app that links businesses with lawyers to remove bad reviews.",
  },
  {
    name: "Tropical Weather",
    img: trophicalweatherImg,
    loss: true,
    desc: "Weather forecast app tailored specifically for tropical regions, which alerts users of upcoming weather events (rain, sun, fog) so they can prepare accordingly.",
  },
  {
    name: "Magicbookwriter",
    img: magicbookImg,
    loss: true,
    desc: "A kid's story illustrator using AI. You describe the scene, and it will Illustrate it for you in a kid's storybook style.",
  },
  {
    name: "Zuvatar",
    img: zuvartarImg,
    loss: true,
    desc: "A Web app that allows users upload pictures to generate avatars using state-of-the-art Dreambooth technology.",
  },
  {
    name: "ApplyForMe",
    img: applyformImg,
    loss: true,
    desc: "helps users with job applications. The app helps the users search for jobs that fit the information on their application while they just prepare to attend interviews.",
  },
  {
    name: "LoveMe",
    img: lovemeImg,
    loss: true,
    desc: "A WebApp that allows users send personalized love letters to their loved ones, also allowing them to schedule it at a later date.",
  },
  {
    name: "Certgo",
    img: arenaImg,
    loss: true,
    desc: "A webapp that allows users generate, download and share certificates.",
  },
  {
    name: "Starfinder",
    img: arenaImg,
    loss: true,
    desc: "A webapp that identifies very important personas that visit your website and converts them to high paying leads.",
  },
  {
    name: "Speakbetter",
    img: gritImg,
    loss: true,
    desc: "A multilingual app that makes you write better, speak better, increase your vocabulary, transcribe audio and correct text to aid accuracy for new and existing language speakers.",
  },
  {
    name: "Varena",
    img: varenaImg,
    loss: true,
    desc: "is a physics web app that allows NFT users to battle with their NFTs for the ultimate prize money of $1,000.",
  },
  {
    name: "Gritty Grammar",
    img: gritImg,
    loss: true,
    desc: "An application that revises grammar problems through discussions with a chat bot that uses AI to transcribe user input",
  },
];

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Workshop Apps | Portfolio</title>
      </Head>
      <Section py={{ base: 10, md: 20 }} spacing="60px">
        <Stack textAlign="center">
          <Heading pb={6}>OUR PORTFOLIO</Heading>
          <Stack overflowX="auto" className="scroll-kit">
            <DashboardHeader />
          </Stack>
        </Stack>

        <HStack
          overflow="hidden"
          spacing={0}
          gap={4}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <CohortToggler />
          <HStack spacing={3}>
            <CustomSelect options={months} />
            <CustomSelect type="Sort" options={sortTypes} />
          </HStack>
        </HStack>

        <Stack spacing={12}>
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

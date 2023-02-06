import Head from "next/head";
import { Stack, HStack, Heading } from "@chakra-ui/react";
import CohortToggler from "../components/cohort-toggler";
import DashboardHeader from "../components/dashboard-header";
import CustomSelect, { months, sortTypes } from "../components/custom-select";
import ProductContainer from "../components/product-container";
import coverlyImg from "../public/images/coverly.svg";
// import gritImg from "../public/images/grit.svg";
import soberpalImg from "../public/images/soberpal.svg";
// import kitchenImg from "../public/images/kitchen.svg";
import streetrateImg from "../public/images/streetrates.jpg";
// import arenaImg from "../public/images/arena.svg";
import descriptoImg from "../public/images/descripto.svg";
import applyformImg from "../public/images/applyformeImg.svg";
import catchupImg from "../public/images/catchUpImg.svg";
import heedImg from "../public/images/heedImg.svg";
import certgoImg from "../public/images/certgo.png";
import devaskImg from "../public/images/devask.png";
import eval360Img from "../public/images/eval-1.svg";
import starfinderImg from "../public/images/starfinder.png";
import yieldvestImg from "../public/images/yieldvest.png";
import reputeImg from "../public/images/repute.png";
import speakbetterImg from "../public/images/speakbetter.png";
import kitchendiaryImg from "../public/images/kitchenDiary.svg";
import lovemeImg from "../public/images/lovemeImg.svg";
import magicbookImg from "../public/images/magicbookwriterImg.svg";
import opspadImg from "../public/images/opspad.svg";
import reconcileaiImg from "../public/images/reconcileAiImg.svg";
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
    url: "https://coverly.hng.tech/"
  },
  {
    name: "Ticked App",
    img: tickedImg,
    loss: false,
    desc: "A todo app with a virtual assistant who calls users to remind them to do their task when it’s due. Users can also assign tasks to the virtual assistant to do for them",
    url:"https://ticked.hng.tech/"
  },
  {
    name: "Kitchen Diary",
    img: kitchendiaryImg,
    loss: false,
    desc: "is a web app that enables users edit and print out beautiful recipe cards in A4 format that they can use in their kitchen or as gifts to friends and family.",
    url:"https://kitchendiary.hng.tech/"
  },
  {
    name: "StreetRate",
    img: streetrateImg,
    loss: false,
    desc: "A real exchange rate app that shows the user accurate black market rates.",
    url:"https://streetrates.hng.tech/"
  },
  {
    name: "VoxClips",
    img: voxclipsImg,
    loss: false,
    desc: "A web app that allows podcasters upload their podcast audio to get a talking head animated video version of their audio",
    url:"https://voxclips.hng.tech/"
  },
  {
    name: "Discripto",
    img: descriptoImg,
    loss: false,
    desc: "A tool that focus that help users efficiently and effectively manage and organize their image collections, making it easier and faster to find and access the images they need.",
    url:"https://discripto.hng.tech/"
  },
  {
    name: "Eval360",
    img: eval360Img,
    loss: true,
    desc: "is a skill evaluator tool that is used for assessing engineers in an organisation.",
    url:"https://eval360.hng.tech/"
  },
  {
    name: "Heed",
    img: heedImg,
    loss: true,
    desc: "Customer support call transcript and sentimental analysis tool to rank sales and support team performance",
    url:"https://heed.hng.tech/"
  },
  {
    name: "Soberpal",
    img: soberpalImg,
    loss: true,
    desc: "Is an alcohol addiction support app that helps users reduce their alcohol consumption.",
    url:"https://soberpal.hng.tech/"
  },
  {
    name: "Repute",
    img: reputeImg,
    loss: true,
    desc: "Is a reputation management app that links businesses with lawyers to remove bad reviews.",
    url:"https://repute.hng.tech/"
  },
  {
    name: "Tropical Weather",
    img: trophicalweatherImg,
    loss: true,
    desc: "Weather forecast app tailored specifically for tropical regions, which alerts users of upcoming weather events (rain, sun, fog) so they can prepare accordingly.",
    url:"https://tropicalweather.hng.tech/"
  },
  {
    name: "Magicbookwriter",
    img: magicbookImg,
    loss: true,
    desc: "A kid's story illustrator using AI. You describe the scene, and it will Illustrate it for you in a kid's storybook style.",
    url:"https://magicbookwriter.hng.tech/"
  },
  {
    name: "Zuvatar",
    img: zuvartarImg,
    loss: true,
    desc: "A Web app that allows users upload pictures to generate avatars using state-of-the-art Dreambooth technology.",
    url:"https://zuvatar.hng.tech/"
  },
  {
    name: "ApplyForMe",
    img: applyformImg,
    loss: true,
    desc: "helps users with job applications. The app helps the users search for jobs that fit the information on their application while they just prepare to attend interviews.",
    url:"https://applyforme.hng.tech/"
  },
  {
    name: "LoveMe",
    img: lovemeImg,
    loss: true,
    desc: "A WebApp that allows users send personalized love letters to their loved ones, also allowing them to schedule it at a later date.",
    url:"https://loveme.hng.tech/"
  },
  {
    name: "Certgo",
    img: certgoImg,
    loss: true,
    desc: "A webapp that allows users generate, download and share certificates.",
    url:"https://certgo.hng.tech/"
  },
  {
    name: "Starfinder",
    img: starfinderImg,
    loss: true,
    desc: "A webapp that identifies very important personas that visit your website and converts them to high paying leads.",
    url:"https://starfinder.hng.tech/"
  },
  {
    name: "Speakbetter",
    img: speakbetterImg,
    loss: true,
    desc: "A multilingual app that makes you write better, speak better, increase your vocabulary, transcribe audio and correct text to aid accuracy for new and existing language speakers.",
    url:"https://speakbetter.hng.tech/"
  },
  {
    name: "Varena",
    img: varenaImg,
    loss: true,
    desc: "is a physics web app that allows NFT users to battle with their NFTs for the ultimate prize money of $1,000.",
    url:"https://varena.hng.tech/"
  },
  {
    name: "ReconcileAI",
    img: reconcileaiImg,
    loss: true,
    desc: "Account Reconciliations Made Easy. Run your business effectively with a simplified solution to reconcile your accounts & sales on a day-to-day basis",
    url:"https://reconcileai.hng.tech/"
  },
  {
    name: "Opspad",
    img: opspadImg,
    loss: true,
    desc: "The Ultimate Notepad for DevOps Engineers to monitor, document and modify aspects of servers you manage - on the go!",
    url:"https://opspad.hng.tech/"
  },
  {
    name: "Yieldvest",
    img: yieldvestImg,
    loss: true,
    desc: "For stock investors looking to make smarter investment decisions, Yieldvest is a Webapp that provides well curated stock recommendations based on fundamental analysis.",
    url:"https://yieldvest.hng.tech/"
  },
  {
    name: "CatchUp",
    img: catchupImg,
    loss: true,
    desc: "What better way to have a scheduled hangout with your friends where you can unwind after a busy week, this is why we built catch and all in one platform that solves this problem.",
    url:"https://catchup.hng.tech/"
  },
  {
    name: "DevAsk",
    img: devaskImg,
    loss: true,
    desc: "Devask helps you get answers to your technical questions immediately. You also get rewarded when you provide correct answers to questions.",
    url:"https://devask.hng.tech/"
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

import { HStack } from "@chakra-ui/react";
import Head from "next/head";
import ContactForm from "../components/contact-form";
import ContactHeader from "../components/contact-header";
import ContactInfo from "../components/contact-info";
import Section from "../components/section";

import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Workshop Apps | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section alignItems="center" pb={10}>
        <ContactHeader />
        <HStack
          alignItems="flex-start"
          flexDirection={["column", "column", "row"]}
          w={{ base: "90%", md: "75%" }}
          mx="auto"
          marginTop={["2rem", "2rem", "3rem"]}
          mb="5rem"
        >
          <ContactInfo />
          <ContactForm />
        </HStack>
      </Section>
    </div>
  );
}

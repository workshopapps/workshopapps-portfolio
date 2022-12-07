import { HStack } from "@chakra-ui/react";
import Head from "next/head";
import ContactForm from "../components/contact-form";
import ContactHeader from "../components/contact-header";
import ContactInfo from "../components/contact-info";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <ContactHeader />
        <HStack alignItems="flex-start"  w={{ base: "90%", md: "80%" }}
          mx="auto"
          mt="5rem"
          mb="5rem">
          <ContactInfo />
          <ContactForm />
        </HStack>
      </section>
    </div>
  );
}

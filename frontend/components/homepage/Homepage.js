import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";
import animatedBulb from "../../public/assets/animatedBulb2.gif";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <Box
      pt={5}
      pb={14}
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="1320px"
      margin="0 auto"
      gap="60px"
    >
      <Box
        width={{ base: "90%", xl: "75%" }}
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap="15px"
      >
        <Text
          fontSize={{ base: "4xl", md: "5xl" }}
          w={{ base: "95%", md: "75%", xl: "60%" }}
          mx="auto"
          textAlign="center"
          lineHeight="1.3"
        >
          A Venture studio with a ‘unique’ twist
        </Text>
        <Text
          fontSize="xl"
          w={{ base: "80%", md: "100%" }}
          mx={{ base: "auto", md: "0" }}
          textAlign="center"
        >
          Explore the 24 apps with unique solutions and their metrics
        </Text>
      </Box>

      <Box width={{ base: "100%", xl: "75%" }}>
        <Image src={animatedBulb} alt="animated bulb" />
      </Box>

      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap="30px"
        width="75%"
      >
        <Link href="/portfolio">
          <div className={styles.button}>
            <p className={styles.buttonText}>Our Portfolio</p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 16L6.575 14.6L12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16Z" />
            </svg>
          </div>
        </Link>

        <Text
          fontSize={{ base: "md", md: "xl" }}
          w={{ base: "95%", xl: "70%" }}
          mx="auto"
          textAlign="center"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
    </Box>
  );
};

export default Homepage;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";
// import animatedBulb from "../../public/assets/animatedBulb.gif";
import animatedBulb1 from "../../public/assets/animatedBulb1.gif";
import rightArrow from "../../public/assets/RightArrow.svg";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <Box
      pt={16}
      pb={14}
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="1440px"
      margin="0 auto"
    >
      <Box
        width="75%"
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap="25px"
      >
        <Text
          fontSize={{ base: "4xl", md: "5xl" }}
          w={{ base: "90%", md: "60%" }}
          mx="auto"
          textAlign="center"
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

      <Image src={animatedBulb1} alt="animated bulb" />

      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap="30px"
        width="75%"
      >
        <Link href="/dashboard">
          <div className={styles.button}>
            <p className={styles.buttonText}>Our Portfolio</p>
            <Image src={rightArrow} alt="arrow" />
          </div>
        </Link>

        <Text
          fontSize={{ base: "md", md: "xl" }}
          w={{ base: "90%", md: "70%" }}
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

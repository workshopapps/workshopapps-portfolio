import React from "react";
import Image from "next/image";
import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import linkedInIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";
import { Stack, Text, Box, HStack} from "@chakra-ui/react";
// import styles from "../../styles/Contact.module.css"


function ContactInfo() {
  return (
    <Stack w="full" textAlign="left" spacing="20px" marginTop="1.3rem" marginBottom="3rem">  
      <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          textAlign="left"
          >
          Contact Information
      </Text>
      <Box>
          <Text color="brand.50" fontWeight="bolder" mb="0.8rem">General Enquiring</Text>
          <Text>info@workshopapp.com</Text>
      </Box>
      <Box>
          <Text color="brand.50" fontWeight="bolder" mb="0.8rem">Visit Us</Text>
          <Text>8 Jubilee-CMD Road, Magodo, Lagos State, Nigeria</Text>
      </Box>
      <Box>
          <Text color="brand.50" fontWeight="bolder" mb="0.8rem">Follow Us</Text>
        <HStack spacing='24px'>
          <a
          href="https://facebook.com"
          target="_blank"
          
          >
          <Image src={facebookIcon} alt="facebook" />
          </a>

          <a
          href="https://twitter.com"
          target="_blank"
          >
          <Image src={twitterIcon} alt="twitter" />
          </a>
            
          <a
          href="https://linkedin.com"
          target="_blank"
          >
          <Image src={linkedInIcon} alt="linkedin" />
          </a>

          <a
          href="https://instagram.com"
          >
          <Image src={instagramIcon} alt="instagram" />
          </a>
      </HStack>
      </Box>
    </Stack>
  );
}

export default ContactInfo;
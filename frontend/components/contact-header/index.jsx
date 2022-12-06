import React from "react";
import { Stack, Text, Center} from "@chakra-ui/react";


function ContactHeader() {
  return (
    <Stack w="full" textAlign="center" spacing="20px">
          
          <Text
          fontSize={{ base: "4xl", md: "5xl" }}
          w={{ base: "90%", md: "80%" }}
          mx="auto"
              textAlign="center"
              color="brand.50"
            >
          Contact Us
          </Text>
          <Center>
            <Text
                  w={{ base: "90%", md: "30%" }}
                  mb={10}
                  color="rgba(0, 0, 0, 0.7)"
                >
                We Would Love To Hear From You. Please Fill Use The Informtion Below To Get In Touch With Our Team
            </Text>
        </Center>
    </Stack>
  );
}

export default ContactHeader;
import { useState } from 'react';
import Image from "next/image";
import sendEmailIcon from "../../public/assets/Email-Send.svg";
import styles from "../../styles/Contact.module.css";
import { Stack, Text, Box, FormLabel } from "@chakra-ui/react";
import { Formik, useFormik} from "formik";
import * as yup from 'yup';

function ContactForm() {
  const [message, setMessage] = useState(''); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phoneno: '',
      message: '',
    },
    onSubmit: () => {
      setMessage('Form submitted');
      setSubmitted(true);
    },
    validationSchema: yup.object({
      name: yup.string().trim().required('Name is required'),
      email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
      phoneno: yup.string().trim().required('Phone number is required'),
      message: yup.string().trim().required('Message is required'),
    }),
  });

  return (
    <Stack w="full" textAlign="left" spacing="20px" marginLeft="0px !important">
      <Text hidden={!submitted} className="alert alert-primary" role="alert">
        {message}
      </Text>
      <Text fontSize={{ base: "2xl", md: "3xl" }} textAlign="left">
        Send Us A Message
      </Text>
      <Stack>
            <form
              onSubmit={formik.handleSubmit}
              bg="#fff"
              className={styles.contact__form}
            >
              <Stack>
                <FormLabel marginBottom="0px">Name</FormLabel>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Mark Essien"
                  className={styles.contact__text_input}
                />
                {formik.errors.name && (
                <Text className={styles.error}>{formik.errors.name}</Text>
                )}
                <FormLabel>Email Address</FormLabel>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="markessien@gmail.com"
                  className={styles.contact__text_input}
                />
                {formik.errors.email && (
                <Text className={styles.error}>{formik.errors.email}</Text>
                )}
                <FormLabel>Phone</FormLabel>
                <input
                  type="tel"
                  name="phoneno"
                  value={formik.values.phoneno}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="09079179545"
                  className={styles.contact__text_input}
                />
                {formik.errors.phoneno && (
                <Text className={styles.error}>{formik.errors.phoneno}</Text>
                )}
                <FormLabel>Message</FormLabel>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Hi, do you have a moment to talk about ..."
                  className={styles.contact__text_message}
                ></textarea>
                {formik.errors.message && (
                  <Text className={styles.error}>{formik.errors.message}</Text>
                )}
                <button
                  type="submit"
                  className={styles.contact__submit__btn}
                >
                  Send{" "}
                  <svg
                    width="1"
                    height="24"
                    viewBox="0 0 1 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.5"
                      y1="2.18557e-08"
                      x2="0.499999"
                      y2="24"
                      stroke="white"
                      stroke-opacity="0.15"
                    />
                  </svg>
                  <Image src={sendEmailIcon} alt="Send email icon"/>
                </button>
              </Stack>
            </form>
      </Stack>
    </Stack>
  );
}

export default ContactForm;

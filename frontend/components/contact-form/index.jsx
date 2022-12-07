import styles from "../../styles/Contact.module.css";
import Image from "next/image";
import sendEmailIcon from "../assets/Email-Send.svg";
import { Stack, Text, Box, FormLabel } from "@chakra-ui/react";
import { Formik } from "formik";

function ContactForm() {
  return (
    <Stack w="full" textAlign="left" spacing="20px" marginLeft="0px !important">
      <Text fontSize={{ base: "2xl", md: "3xl" }} textAlign="left">
        Send Us A Message
      </Text>
      <Stack>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              bg="#fff"
              className={styles.contact__form}
            >
              <Stack>
                <FormLabel>Name</FormLabel>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Mark Essien"
                  className={styles.contact__text_input}
                />
                {errors.name && touched.name && errors.name}
                <FormLabel>Email Address</FormLabel>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="markessien@gmail.com"
                  className={styles.contact__text_input}
                />
                {errors.email && touched.email && errors.email}
                <FormLabel>Phone</FormLabel>
                <input
                  type="tel"
                  name="phoneno"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneno}
                  placeholder="09079179545"
                  className={styles.contact__text_input}
                />
                {errors.phoneno && touched.phoneno && errors.phoneno}
                <FormLabel>Message</FormLabel>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneno}
                  placeholder="Hi, do you have a moment to talk about ..."
                  className={styles.contact__text_message}
                ></textarea>
                {errors.message && touched.message && errors.message}
                <button
                  type="submit"
                  disabled={isSubmitting}
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
                  <Image src={sendEmailIcon} />
                </button>
              </Stack>
            </form>
          )}
        </Formik>
      </Stack>
    </Stack>
  );
}

export default ContactForm;

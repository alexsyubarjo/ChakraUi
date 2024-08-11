import * as React from "react";
import { motion } from "framer-motion";
import { AbsoluteCenter, Box, Container, Divider, Flex, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, Text, Textarea } from "@chakra-ui/react";
import { Formik, Form, Field, type FieldAttributes } from "formik";
import { FaPaperPlane } from "react-icons/fa";
import { SectionDescription, SectionSubtitle, SectionTitle, ContactCard, PrimaryButton } from "@/fragments";
import { contactCardList } from "@/constants";
import { fadeInTransition, staggeredContainer, validateFormSchema } from "@/utils";
import { sendEmail } from "@/services/sendEmail"; // pastikan path yang benar
import SectionLayout from "@/layouts/SectionLayout";
import type { FormInitialValues } from "@/types";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactSectionComponent(): React.JSX.Element { 
  const initialValues: FormInitialValues = {
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    try {
      await sendEmail(values, { setSubmitting, resetForm });
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      as="section"
      id="contact"
      paddingTop="10rem"
      paddingBottom="6rem"
      width="100vw"
    >
      {/* Contact Section Title */}
      <SectionTitle title="Contact" />

      {/* Contact Section Content */}
      <Container
        as={motion.div}
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true }}
        whileInView="show"
        initial="hidden"
        maxWidth={{ base: "container.lg", lg: "75rem" }}
      >
        {/* Contact Section Subtitle & Description */}
        <Flex
          as={motion.div}
          variants={fadeInTransition("up", "tween", 0.1, 1.1)}
          direction="column"
          rowGap={{ base: 3, lg: 5 }}
        >
          <SectionSubtitle>Feel Free To Contact Me📨</SectionSubtitle>
          <SectionDescription>I&apos;m always open to discussing product design, collaborating work or partnerships. Just contact me with this media below</SectionDescription>
        </Flex>

        {/* Contact Section Contact Card Content */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={6}
          width={{ base: "90%", lg: "100%" }}
          marginX={{ base: "auto", lg: 0 }}
          marginTop={12}
        >
          {contactCardList.map(
            ({ title, contactVia, contactLink, cardIcon }, index): React.ReactNode => (
              <GridItem
                as={motion.div}
                variants={fadeInTransition("up", "tween", index * 0.25, 1.1)}
                key={`${title} - ${index}`}
              >
                <ContactCard
                  title={title}
                  contactVia={contactVia}
                  contactLink={contactLink}
                  cardIcon={cardIcon}
                />
              </GridItem>
            )
          )}
        </Grid>

        {/* Contact Section Contact Line Divider */}
        <Box
          position="relative"
          marginY={10}
          width={{ base: "90%", lg: "100%" }}
          marginX={{ base: "auto", lg: 0 }}
        >
          <Divider />
          <AbsoluteCenter
            backgroundColor="background"
            paddingX={4}
          >
            <Text>Or</Text>
          </AbsoluteCenter>
        </Box>

        {/* Contact Section Contact Form */}
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validateFormSchema}
        >
          {({ isSubmitting, isValid }): React.ReactNode => (
            <Form>
              <Grid
                templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                gap={6}
                width={{ base: "90%", lg: "100%" }}
                marginX={{ base: "auto", lg: 0 }}
              >
                <Field name="first_name">
                  {({ field, form }: FieldAttributes<any>): React.ReactNode => (
                    <FormControl
                      as={motion.div}
                      variants={fadeInTransition("right", "tween", 0.1, 1)}
                      isInvalid={form.errors.first_name && form.touched.first_name}
                      isRequired
                    >
                      <FormLabel>Your First Name</FormLabel>
                      <Input
                        id="first_name"
                        placeholder="Your First Name. Example: John"
                        borderWidth="2px"
                        paddingY={8}
                        paddingX={4}
                        borderColor="primary"
                        borderRadius={4}
                        outline="none"
                        _placeholder={{
                          color: "secondary",
                        }}
                        _hover={{
                          borderColor: "primary",
                        }}
                        _invalid={{
                          borderColor: "red.300",
                          _hover: {
                            borderColor: "red.300",
                          },
                        }}
                        {...field}
                      />
                      <FormErrorMessage>{form.errors.first_name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="last_name">
                  {({ field, form }: FieldAttributes<any>): React.ReactNode => (
                    <FormControl
                      as={motion.div}
                      variants={fadeInTransition("left", "tween", 0.2, 1)}
                      isInvalid={form.errors.last_name && form.touched.last_name}
                      isRequired
                    >
                      <FormLabel>Your Last Name</FormLabel>
                      <Input
                        id="last_name"
                        placeholder="Your Last Name. Example: Doe"
                        borderWidth="2px"
                        paddingY={8}
                        paddingX={4}
                        borderColor="primary"
                        borderRadius={4}
                        _placeholder={{
                          color: "secondary",
                        }}
                        _hover={{
                          borderColor: "primary",
                        }}
                        _invalid={{
                          borderColor: "red.300",
                          _hover: {
                            borderColor: "red.300",
                          },
                        }}
                        {...field}
                      />
                      <FormErrorMessage>{form.errors.last_name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="email">
                  {({ field, form }: FieldAttributes<any>): React.ReactNode => (
                    <FormControl
                      as={motion.div}
                      variants={fadeInTransition("right", "tween", 0.1, 1)}
                      isInvalid={form.errors.email && form.touched.email}
                      isRequired
                    >
                      <FormLabel>Your Email.</FormLabel>
                      <Input
                        id="email"
                        placeholder="Your Email. Example: johndoe@gmail.com"
                        borderWidth="2px"
                        paddingY={8}
                        paddingX={4}
                        borderColor="primary"
                        borderRadius={4}
                        type="email"
                        _placeholder={{
                          color: "secondary",
                        }}
                        _hover={{
                          borderColor: "primary",
                        }}
                        _invalid={{
                          borderColor: "red.300",
                          _hover: {
                            borderColor: "red.300",
                          },
                        }}
                        {...field}
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="subject">
                  {({ field, form }: FieldAttributes<any>): React.ReactNode => (
                    <FormControl
                      as={motion.div}
                      variants={fadeInTransition("left", "tween", 0.2, 1)}
                      isInvalid={form.errors.subject && form.touched.subject}
                      isRequired
                    >
                      <FormLabel>Your Subject</FormLabel>
                      <Input
                        id="subject"
                        placeholder="Your Subject. Example: Hey, I Wanna Collaborate"
                        borderWidth="2px"
                        paddingY={8}
                        paddingX={4}
                        borderColor="primary"
                        borderRadius={4}
                        _placeholder={{
                          color: "secondary",
                        }}
                        _hover={{
                          borderColor: "primary",
                        }}
                        _invalid={{
                          borderColor: "red.300",
                          _hover: {
                            borderColor: "red.300",
                          },
                        }}
                        {...field}
                      />
                      <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="message">
                  {({ field, form }: FieldAttributes<any>): React.ReactNode => (
                    <FormControl
                      as={motion.div}
                      variants={fadeInTransition("right", "tween", 0.1, 1)}
                      isInvalid={form.errors.message && form.touched.message}
                      isRequired
                      gridColumn={{ base: "1 / -1", lg: "span 2" }}
                    >
                      <FormLabel>Your Message</FormLabel>
                      <Textarea
                        id="message"
                        placeholder="Your Message. Example: Hi, I want to collaborate with you on a new project..."
                        borderWidth="2px"
                        paddingY={8}
                        paddingX={4}
                        borderColor="primary"
                        borderRadius={4}
                        minHeight="10rem"
                        _placeholder={{
                          color: "secondary",
                        }}
                        _hover={{
                          borderColor: "primary",
                        }}
                        _invalid={{
                          borderColor: "red.300",
                          _hover: {
                            borderColor: "red.300",
                          },
                        }}
                        {...field}
                      />
                      <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Grid>

              <Flex
                justifyContent="center"
                marginTop={8}
              >
                <PrimaryButton
                  as={motion.button}
                  variants={fadeInTransition("up", "tween", 0.2, 1)}
                  type="submit"
                  isLoading={isSubmitting}
                  isDisabled={!isValid || isSubmitting}
                  rightIcon={<FaPaperPlane />}
                >
                  Send Message
                </PrimaryButton>
              </Flex>
            </Form>
          )}
        </Formik>
      </Container>

      {/* Toast Container for notifications */}
      <ToastContainer />
    </Box>
  );
}

export default ContactSectionComponent;

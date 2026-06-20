import * as React from "react";
import Link from "next/link";
import { Card, CardBody, Flex, Heading, Image, Text } from "@chakra-ui/react";
import type { ContactCard } from "@/types";

type ContactCardProps = ContactCard;

export default function ContactCard({ title, contactVia, contactLink, cardIcon }: ContactCardProps): React.JSX.Element {
  return (
    <Card
      as={Link}
      href={contactLink}
      target="_blank"
      aria-label="Contact Card"
      backgroundColor="card"
      borderBottomWidth="2px"
      borderBottomColor="primary"
      role="group"
      aria-roledescription="group"
      transition="all 300ms"
      shadow="lg"
      _hover={{
        shadow: "2xl",
      }}
    >
      <CardBody
        display="flex"
        alignItems="center"
        gap={6}
      >
        <Image
          src={cardIcon}
          alt="Contact Card Icon"
          boxSize={12}
          objectFit="contain"
          transition="all 300ms"
          _groupHover={{
            transform: "translateY(-0.75rem)",
          }}
        />

        <Flex
          direction="column"
          rowGap={2}
        >
          <Heading size="md">{title}</Heading>
          <Text
            color="secondary"
            fontSize={{ base: "0.8em", md: "0.9em" }}
            maxWidth={{ base: "90%", md: "70%", lg: "100%" }}
          >
            {contactVia}
          </Text>
          <Text
            color="primary"
            fontWeight="semibold"
            fontSize={{ base: "0.8em", md: "0.9em" }}
          >
            Send Me A Message
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
}

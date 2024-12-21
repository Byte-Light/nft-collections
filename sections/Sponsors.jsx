import SponsorItem from "@/components/SponsorItem";
import Wrapper from "@/components/Wrapper";
import { colors } from "@/utils/colors";
import { sponsors } from "@/utils/sponsors";
import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Sponsors = () => {
  return (
    <Flex
      bgGradient={`linear(to-b, ${colors.darkBg}, #000)`}
      justify="center"
      py={16}
      id="sponsors"
    >
      <Wrapper flexDir="column" w="100%" align="center">
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          color={colors.primary}
          mb={4}
        >
          Our Sponsors
        </Heading>
        <Text color="gray.400" textAlign="center" mb={8}>
          We are proud to be supported by these incredible partners.
        </Text>
        <Divider mb={12} borderColor="gray.600" />
        <Flex
          gap={8}
          justifyContent={{ base: "center", lg: "space-between" }}
          flexWrap="wrap"
          align="center"
          w="100%"
        >
          {sponsors.map((item, index) => (
            <Flex
              key={index}
              transition="transform 0.3s, box-shadow 0.3s"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
              }}
            >
              <SponsorItem {...item} />
            </Flex>
          ))}
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default Sponsors;

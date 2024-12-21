import Button from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import { colors } from "@/utils/colors";
import { Marketplaces } from "@/utils/marketplaces";
import { Flex, Heading, Image, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <Flex
      bgGradient={`linear(to-r, ${colors.primary}, ${colors.secondaryBg})`}
      justify="center"
      id="cta"
      position="relative"
      pt={32}
      pb={32}
    >
      <Wrapper gap={8} w="100%">
        {/* CTA Box Section */}
        <Box
          bg={colors.darkBg}
          p={12}
          borderRadius={24}
          w="100%"
          boxShadow="0 12px 40px rgba(0, 0, 0, 0.1)"
          transition="all 0.3s ease"
          _hover={{ boxShadow: "0 16px 50px rgba(0, 0, 0, 0.2)" }}
        >
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            gap={8}
            align="center"
            justify="space-between"
          >
            <Flex flexDir={"column"} w={{ base: "100%", lg: "60%" }} gap={4}>
              <Heading color="white" fontSize="3xl" fontWeight={700}>
                Our collection is now available on multiple secondary marketplaces.
              </Heading>
              <Text fontSize="lg" color="white" fontWeight={500}>
                Choose your preferred marketplace and start browsing our
                collection today!
              </Text>
            </Flex>

            {/* Marketplace Logos Section */}
            <Flex
              flexWrap={"wrap"}
              w={{ base: "100%", lg: "40%" }}
              gap={6}
              justify={{ base: "center", lg: "flex-start" }}
            >
              {Marketplaces.map((marketplace) => (
                <Link href={marketplace.url} target="_b" key={marketplace.name}>
                  <Image
                    src={marketplace.image}
                    w={16}
                    h={16}
                    borderRadius="full"
                    title={marketplace.name}
                    as={motion.img}
                    whileHover={{ scale: 1.1 }}
                    filter="grayscale(100%)"
                    _hover={{ filter: "grayscale(0%)", transform: "scale(1.1)" }}
                    transition={"all 0.3s ease-in-out"}
                    boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                  />
                </Link>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Wrapper>
    </Flex>
  );
};

export default CTA;

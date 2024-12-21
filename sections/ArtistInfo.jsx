import { CircleButton } from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import { colors } from "@/utils/colors";
import { Flex, Heading, Image, Text, Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FiInstagram, FiTwitter } from "react-icons/fi";

const ArtistInfo = () => {
  return (
    <Flex
      bgGradient={`linear(to-b, ${colors.darkBg}, #000)`}
      justify="center"
      id="artist"
      position="relative"
      py={16}
    >
      {/* Decorative Element */}
      <Image
        src="/detail3.png"
        position="absolute"
        w={200}
        h={"auto"}
        bottom={-50}
        right={{ base: 8, lg: 64 }}
        opacity={0.15}
        zIndex={1}
      />

      <Wrapper
        flexDir={{ base: "column-reverse", lg: "row" }}
        gap={12}
        zIndex={2}
      >
        {/* Left Section: Bio */}
        <Flex
          flexDir="column"
          w={{ base: "100%", lg: "50%" }}
          gap={6}
          bg={colors.secondaryBg}
          p={8}
          borderRadius={16}
          boxShadow="0 8px 24px rgba(0, 0, 0, 0.3)"
        >
          <Text
            textTransform="uppercase"
            color={colors.primary}
            fontWeight={800}
            fontSize="sm"
            textAlign={{ base: "center", lg: "left" }}
          >
            About the Artist
          </Text>
          <Heading
            fontSize={{
              base: "3xl",
              sm: "4xl",
              lg: "5xl",
            }}
            textAlign={{ base: "center", lg: "left" }}
          >
            Mia Fene
          </Heading>
          <Text
            color="gray.300"
            fontSize="lg"
            lineHeight={1.8}
            letterSpacing={1.1}
            textAlign={{ base: "center", lg: "left" }}
          >
            Meet Mia, a young and talented artist who has been creating stunning
            pieces of art since she was a child. Mia's art has become a hit in
            the local art scene, bringing joy and humor to people's lives by
            evoking laughter and conveying lighthearted messages. Despite her
            success, Mia remains humble and dedicated, always striving to push
            her creative boundaries.
          </Text>
          <Flex gap={4} justify={{ base: "center", lg: "flex-start" }}>
            <Link href="https://twitter.com" target="_b">
              <CircleButton
                w={12}
                h={12}
                transition="all 0.3s"
                _hover={{
                  bg: colors.primaryHover,
                  transform: "scale(1.1)",
                }}
              >
                <FiTwitter />
              </CircleButton>
            </Link>
            <Link href="https://instagram.com" target="_b">
              <CircleButton
                w={12}
                h={12}
                transition="all 0.3s"
                _hover={{
                  bg: colors.primaryHover,
                  transform: "scale(1.1)",
                }}
              >
                <FiInstagram />
              </CircleButton>
            </Link>
          </Flex>
        </Flex>

        {/* Right Section: Artist Image */}
        <Flex
          flexDir="column"
          w={{ base: "100%", lg: "50%" }}
          align="center"
          position="relative"
        >
          <Image
            src="/mia.jpg"
            borderRadius={16}
            w="100%"
            h="100%"
            objectFit="cover"
            boxShadow="0 8px 24px rgba(0, 0, 0, 0.3)"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "0 12px 36px rgba(0, 0, 0, 0.5)",
            }}
          />
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default ArtistInfo;

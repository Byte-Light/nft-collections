import Button from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import { colors } from "@/utils/colors";
import { Flex, Heading, Image, Text, Box } from "@chakra-ui/react";
import React from "react";

const CollectionInfo = () => {
  return (
    <Flex
      bgGradient={`linear(to-b, ${colors.darkBg}, #000)`}
      justify="center"
      align="center"
      id="collection"
      position="relative"
      py={16}
    >
      {/* Decorative Images */}
      <Image
        src="/detail1.png"
        position="absolute"
        w={200}
        h={"auto"}
        top={8}
        right={24}
        opacity={0.15}
        zIndex={1}
      />
      <Image
        src="/detail2.png"
        position="absolute"
        w={200}
        h={"auto"}
        bottom={8}
        left={24}
        opacity={0.15}
        zIndex={1}
      />

      <Wrapper flexDir={{ base: "column", lg: "row" }} gap={12} zIndex={2}>
        {/* Left Section: Image Card */}
        <Flex
          flexDir="column"
          align="center"
          w={{ base: "100%", lg: "50%" }}
          bg={colors.secondaryBg}
          p={6}
          borderRadius={24}
          boxShadow="0 8px 24px rgba(0, 0, 0, 0.3)"
        >
          <Image
            src="/nfts/3.gif"
            borderRadius={16}
            w={{ base: 280, md: 350 }}
            h={{ base: 320, md: 400 }}
            objectFit="cover"
            transition="transform 0.3s"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "0 12px 36px rgba(0, 0, 0, 0.5)",
            }}
          />
          <Heading
            textAlign="center"
            mt={4}
            fontWeight={800}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Researcher
          </Heading>
          <Text
            textAlign="center"
            mt={2}
            fontWeight={600}
            color="gray.500"
            letterSpacing="wide"
          >
            #512
          </Text>
        </Flex>

        {/* Right Section: Description */}
        <Flex
          flexDir="column"
          w={{ base: "100%", lg: "50%" }}
          gap={6}
          justify="center"
        >
          <Text
            textTransform="uppercase"
            color={colors.primary}
            fontWeight={800}
            fontSize="sm"
            textAlign={{ base: "center", lg: "left" }}
          >
            About the collection
          </Text>
          <Heading
            fontSize={{
              base: "3xl",
              sm: "4xl",
              lg: "5xl",
            }}
            textAlign={{ base: "center", lg: "left" }}
            lineHeight={1.2}
          >
            Unique Pixel Artwork NFTs
          </Heading>
          <Text
            color="gray.300"
            fontSize="lg"
            letterSpacing={1.1}
            textAlign={{ base: "center", lg: "left" }}
          >
            Non-fungible tokens (NFTs) are digital certificates that verify the
            uniqueness of digital assets like photos, videos, and audio files.
            Stored on blockchains, NFTs enable trading and ownership in a way
            that's revolutionizing the digital world. Start your collection
            today!
          </Text>
          <Flex justify={{ base: "center", lg: "flex-start" }}>
            <Button
              px={8}
              py={6}
              fontSize="md"
              transition="all 0.3s"
              _hover={{
                bg: colors.primaryHover,
                transform: "scale(1.05)",
              }}
            >
              Learn More
            </Button>
          </Flex>
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default CollectionInfo;

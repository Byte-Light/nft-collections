import React from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { colors } from "@/utils/colors";
import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";
import ReactCurvedText from "react-curved-text";
import Link from "next/link";

const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      bgGradient={`linear(to-b, ${colors.darkBg}, #000)`}
      bgImage={"/bg-circle.png"}
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minH="100vh"
      align="center"
      justify="center"
      id="header"
      p={4}
    >
      <Wrapper
        gap={12}
        flexDir={{ base: "column", lg: "row" }}
        w="100%"
        maxW="1200px"
      >
        {/* Left Section */}
        <Flex
          flexDir="column"
          gap={6}
          w={{ base: "100%", lg: "50%" }}
          align={{ base: "center", lg: "flex-start" }}
        >
          {/* Symbols */}
          <Image
            src="/spiral.png"
            w={10}
            h={10}
            position="absolute"
            top={4}
            right={4}
            transform="rotate(45deg)"
            opacity={0.8}
          />

          <Image
            src="/tri-spiral.png"
            w={10}
            h={10}
            position="absolute"
            bottom={200}
            right={isMobile ? "30%" : 100}
            transform="rotate(45deg)"
            opacity={0.8}
          />

          <Text
            color={colors.primary}
            fontWeight="extrabold"
            textAlign={{ base: "center", lg: "left" }}
            textShadow="0 0 20px rgba(255, 255, 255, 0.8)"
          >
            GET ON THE WHITELIST NOW
          </Text>
          <Heading
            fontSize={{
              base: "4xl",
              sm: "5xl",
              lg: "6xl",
              xl: "7xl",
            }}
            textAlign={{ base: "center", lg: "left" }}
            lineHeight="1.2"
          >
            THE RAREST{" "}
            <Text as="span" bgGradient="linear(to-r, teal.400, cyan.400)" bgClip="text">
              NFT
            </Text>{" "}
            DROP
          </Heading>
          <Text
            fontSize="lg"
            letterSpacing={1.2}
            textAlign={{ base: "center", lg: "left" }}
            color="gray.300"
          >
            Mint an NFT of our collection and make your portfolio more valuable
            with rare digital assets.
          </Text>
          <Flex justify={{ base: "center", lg: "flex-start" }}>
            <Link href="#collection">
              <Button bgGradient="linear(to-r, teal.400, cyan.400)" color="white">
                More Info
              </Button>
            </Link>
          </Flex>
          <Flex
            mt={8}
            align="center"
            flexDir={{ base: "column", lg: "row" }}
            gap={4}
          >
            <Flex align="center" gap={2}>
              <Text fontSize="4xl" fontWeight="bold">
                9K+
              </Text>
              <Text fontWeight="semibold" textTransform="uppercase" color="gray.300">
                Minted
              </Text>
            </Flex>
            <Divider orientation="vertical" h="50px" borderColor="gray.600" />
            <Flex align="center" gap={2}>
              <Text fontSize="4xl" fontWeight="bold">
                6K+
              </Text>
              <Text fontWeight="semibold" textTransform="uppercase" color="gray.300">
                Unique Holders
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/* Right Section */}
        <Flex
          flexDir="row"
          w={{ base: "100%", lg: "50%" }}
          position="relative"
          h={isMobile ? 450 : 600}
          align="center"
          justify="center"
        >
          <Box
            className="spin"
            width={250}
            height={250}
            zIndex={4}
            position="absolute"
            bottom={-10}
            right={-10}
            transform="rotate(0deg)"
            animation="spin 10s linear infinite"
          >
            <ReactCurvedText
              width={250}
              height={250}
              cx={125}
              cy={125}
              rx={125}
              ry={125}
              startOffset={0}
              text={"100% UNIQUE - 100% RARE - 100% FUN - 100% ART -"}
              textProps={{
                style: {
                  fontSize: 18,
                  fontWeight: "bold",
                },
              }}
              textPathProps={{
                fill: colors.primary,
                letterSpacing: 2,
              }}
            />
          </Box>
          <Image
            src="/nfts/2.png"
            w={isMobile ? 240 : 360}
            h={isMobile ? 360 : 500}
            objectFit="cover"
            borderRadius="lg"
            position="absolute"
            bottom={0}
            left={0}
            zIndex={3}
            boxShadow="0px 0px 30px rgba(0, 0, 0, 0.5)"
          />
          <Image
            src="/nfts/1.png"
            w={isMobile ? 240 : 360}
            h={isMobile ? 360 : 500}
            objectFit="cover"
            borderRadius="lg"
            position="absolute"
            top={0}
            right={0}
            zIndex={1}
            boxShadow="0px 0px 30px rgba(0, 0, 0, 0.5)"
          />
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default Header;

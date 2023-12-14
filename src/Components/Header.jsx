import { Box, Button, Heading, Flex, Center, Stack } from "@chakra-ui/react";
import bgImage from "../images/skate.jpg";
import bgImageMobile from "../images/img.png";
export default function Header() {
  return (
    <Box
      height={["50vh", null, "40vh"]}
      width="full"
      backgroundImage={[`url(${bgImageMobile})`, null, `url(${bgImage})`]}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        height="100%"
        background="rgb(0 0 0 / 50%)"
        padding={["0 10%", null, "0, 20%"]}
      >
        <Heading variant="banner">Vite + React</Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing="40px"
          marginTop="30px"
          width={["100%", null, "auto"]}
        >
          <Button variant="outline" size="lg">
            Ver Detalles
          </Button>
          <Button variant="outline" size="lg">
            Ver Video
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

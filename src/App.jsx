// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Button, Heading, Flex, Center, Stack } from "@chakra-ui/react";
import bgImage from "./images/skate.jpg";
import bgImageMobile from "./images/img.png";

function App() {
  return (
    <>
      <Box
        height={["50vh", null, "40vh"]}
        width="full"
        border="1px"
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
          <Heading
            color="white"
            textTransform="uperCase"
            textAlign="center"
            fontWeight="light"
            letterSpacing="5px"
          >
            Vite + React
          </Heading>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing="40px"
            marginTop="30px"
            width={["100%", null, "auto"]}
            border="1px"
          >
            <Button
              variant="outline"
              size="lg"
              textTransform="upperCase"
              fontWeight="light"
              borderRadius="0"
              color="white"
              letterSpacing="1px"
              _hover={{ color: "black", background: "white" }}
            >
              Ver Detalles
            </Button>
            <Button
              variant="outline"
              size="lg"
              textTransform="upperCase"
              fontWeight="light"
              borderRadius="0"
              color="white"
              letterSpacing="1px"
              _hover={{ color: "black", background: "white" }}
            >
              Ver Video
            </Button>
          </Stack>
          {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} />
          </a>
          <a href="https://react.dev" target="_blank">
          <img src={reactLogo} />
        </a> */}
        </Flex>
      </Box>
    </>
  );
}

export default App;

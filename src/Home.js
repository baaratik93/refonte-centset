import { Image, Text, HStack, VStack, Box, Button } from "@chakra-ui/react";
import eco from "./images/eco.png";
import sailor from "./images/sailor.png";
import isometric from "./images/isometric.png";
import work from "./images/work.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Home = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection={["column", "row-reverse", "row-reverse", "row-reverse"]}
        // display="grid"
        // gridTemplateColumns="1fr 1fr"
        justifyContent="space-around"
        alignItems="center"
      >
         <Carousel autoPlay autoFocus infiniteLoop interval={2500}>
        <Box>
        <Image src={sailor} width={["130px", "190px", "210px", "330px"]} />
        {/* <Text pb={8}>Ecology</Text> */}
        </Box>

        <Image src={isometric} width={["130px", "190px", "210px", "330px"]} />
        <Image src={eco} width={["130px", "190px", "210px", "330px"]} />
        <Image src={work} width={["130px", "190px", "210px", "330px"]} />
      </Carousel>
        <VStack gap={1}>
          <Text textAlign="center">
            Oeuvrez à faire du Sénégal un pays d’exception et à créer des
            solutions pour chaque besoin de nos concitoyens.
          </Text>
          <Button
            colorScheme="whatsapp"
            _hover={{ color: "lime" }}
            fontSize={["11", "12", "14", "16"]}
          >
            <Text>Agissez avec nous!</Text>
          </Button>
        </VStack>
      </Box>
     
    </>
  );
};

export default Home;

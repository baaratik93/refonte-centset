import { Image, Text,  Button, Heading, Grid, GridItem } from "@chakra-ui/react";
import eco from "./images/eco.png";
  
export const Home = () => {
  return (


<Grid 
px={"5rem"}
templateColumns='repeat(2, 1fr)' gap={3} alignItems="center">
  <GridItem display={"grid"} alignContent="center" justifyItems={"start"} w='100%' h='100%'  alignItems="center">
  <Heading textTransform="uppercase">
          La Technologie et l’Ecologie adaptées au Sénégal
        </Heading>
        <Text>
        Oeuvrez à faire du Sénégal un pays d’exception et à créer des
          solutions pour chaque besoin de nos concitoyens.
     </Text>
        <Button
          colorScheme="whatsapp"
          _hover={{ color: "white" }}
          fontSize={["11", "12", "14", "16"]}
     >
          <Text>Agissez avec nous!</Text>
     </Button>
  </ GridItem >
  <GridItem w='100%' h='100%' >
  <Image src={eco} size="100%" />
  </ GridItem >
</Grid>




    // <HStack flexDirection="row-reverse" alignItems="center">
    //   <Box>
    //     <Image src={eco} width={["130px", "190px", "330px", "440px"]} />
    //   </Box>

    //   <Box 
    //   as="div"
    //   alignItems="flex-start">
    //     <Heading textTransform="uppercase">
    //       La Technologie et l’Ecologie adaptées au Sénégal
    //     </Heading>
    //     <Text>
    //       Oeuvrez à faire du Sénégal un pays d’exception et à créer des
    //       solutions pour chaque besoin de nos concitoyens.
    //     </Text>
    //     <Button
    //       colorScheme="whatsapp"
    //       _hover={{ color: "white" }}
    //       fontSize={["11", "12", "14", "16"]}
    //     >
    //       <Text>Agissez avec nous!</Text>
    //     </Button>
    //   </Box>
    // </HStack>
  );
};

export default Home;

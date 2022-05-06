import {
  Image,
  Text,
  Button,
  Heading,
  Grid,
  GridItem, 
  Box,
  Badge
} from "@chakra-ui/react";
import eco from "../images/eco.png";

export const Home = () => {
  return (
    <>
      <Grid
        display={["column", "column", "flex"]}
        px={["1rem", "5rem", "5rem"]}
        templateColumns="repeat(2, 1fr)"
        gap={3}
        alignItems="center"
      >
        <GridItem
          display={"grid"}
          alignContent="center"
          justifyItems={"start"}
          w="100%"
          h="100%"
          alignItems="center"
        >
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
        </GridItem>
        <GridItem w="100%" h="100%">
          <Image src={eco} size="100%" />
        </GridItem>
      </Grid>

      {/* ffff */}
      <Grid templateColumns='repeat(2, 1fr)' gap={2}  px={"5rem"} py={"3rem"}  h="100vh">
        
     <Heading  align="center" >Notre Mission</Heading> 
 
   <Box maxW={"sm"} borderWidth="1px" borderRadius='lg' overflow='hidden'>
   <Box display='flex' alignItems='baseline'>
   <Image src={eco} alt="" w="50%"/>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            dddd
          </Box>
        </Box>

   </Box>


 
      </Grid>
    </>
  );
};

export default Home;

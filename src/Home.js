import { Image, Text,HStack,VStack,Box,Button} from "@chakra-ui/react";
import eco from "./images/eco.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Home = () => {
  return <Box display="flex" flexDirection={["column", "row-reverse", "row-reverse", "row-reverse"]} justifyContent="center" alignItems="center">
    <Image src={eco} width={["130px","190px","330px","440px"]} />
    <VStack gap={3}>
    <Text textAlign="center">
    Oeuvrez à faire du Sénégal un pays d’exception et à créer des solutions pour chaque besoin de nos concitoyens.
    </Text>
    <Button colorScheme="whatsapp" _hover={{color:"lime"}}  fontSize={["11", "12", "14", "16"]}><Text>Agissez avec nous!</Text></Button>
    </VStack>
    <Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </Box>
};

export default Home;

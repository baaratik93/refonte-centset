import {
  Box,
  FormControl,
  Heading,
  FormLabel,
  Input,
  Button,
  Image,
  Flex,
  Select,
  Text,
  Textarea
} from "@chakra-ui/react";
import eco from "../images/eco.png"


const Contacts = () => {
  return (
    <Box  h="100vh">
      <Heading textAlign="center">
        Contactez Nous
      </Heading>
      <Flex width="100%" justifyContent="space-evenly" display={['block', 'block', 'flex']}>
        <Flex  h="100%" w="sm">
          <Image src={eco} alt="" />
        </Flex>

        <Flex direction="column"  p={17} width="md">
          <FormControl isRequired>
            <FormLabel htmlFor="first-name">Votre Nom Complet</FormLabel>
            <Input id="first-name" placeholder="First name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="first-name">Votre Email</FormLabel>
            <Input id="first-name" placeholder="First name" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="objet">Object</FormLabel>
            <Select id="objet" placeholder="Selectionner l'objet">
              <option>AZERTY</option>
              <option>UIOP</option>
              <option>QSDFG</option>
              <option>HJKLM</option>
            </Select>
          </FormControl>

          <Text mb="8px">Message: </Text>
          <Textarea value="Message" placeholder="Votre Message" size="sm" />

          <Button size="md" mt={4} colorScheme="teal" type="submit">
            Envoyer Votre Message
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contacts;

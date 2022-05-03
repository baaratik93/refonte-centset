import { HStack,Text,Button,Spacer} from "@chakra-ui/react";
import Logo from "./Logo";
import ListMenu from "./ListMenu"
import HamburgerMenu from "./HamburgerMenu";


export const MenuNav = () => {

  return  <HStack pos="sticky" top={0}  as="nav"  p={2}>
    <HamburgerMenu/>
    <Logo/>
    <Spacer/>
    <ListMenu/>
  <Spacer/>
  
  <Button colorScheme="whatsapp" _hover={{color:"lime"}}  fontSize={["11", "12", "14", "16"]}><Text>Agissez avec nous!</Text></Button>
  </HStack>
};

import { HStack,Spacer} from "@chakra-ui/react";
import Logo from "./Logo";
import ListMenu from "./ListMenu"
import HamburgerMenu from "./HamburgerMenu";


export const MenuNav = () => {

  return  <HStack pos="sticky" top={0}  as="nav" bg="blue.50" 
  zIndex={10}
  p={1}>
                 
                  <Logo/>
                  <Spacer/>
                  <ListMenu/>
                <Spacer/>
                <HamburgerMenu/>
                </HStack>
              };

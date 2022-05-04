import { HStack,Spacer} from "@chakra-ui/react";
import Logo from "./Logo";
import ListMenu from "./ListMenu"
import HamburgerMenu from "./HamburgerMenu";


export const MenuNav = () => {

  return  <HStack pos="sticky" top={0}  as="nav"  p={2}>
                 
                  <Logo/>
                  <Spacer/>
                  <ListMenu/>
                <Spacer/>
                <HamburgerMenu/>
                </HStack>
              };

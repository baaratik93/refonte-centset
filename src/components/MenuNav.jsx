import {HStack} from '@chakra-ui/react';
import Logo from './Logo';
import ListMenu from './ListMenu';
import HamburgerMenu from './HamburgerMenu';
import {ToggleColorMode} from './ToggleColorMode';


export const MenuNav = () => {
  return (
    <HStack pos="sticky" top={0} as="nav" px={["0rem", "3rem", "5rem"]} py={2} onScroll="backgroundColor:blue" justifyContent="space-between"
bg="wheat">
      <Logo />
 
      <ListMenu />
 
      <ToggleColorMode />
      <HamburgerMenu />

    </HStack>
  );
};

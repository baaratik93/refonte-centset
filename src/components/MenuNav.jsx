import {HStack, Input} from '@chakra-ui/react';
import Logo from './Logo';
import ListMenu from './ListMenu';
import HamburgerMenu from './HamburgerMenu';
import { useState } from 'react';
import { Search2Icon } from '@chakra-ui/icons';

export const MenuNav = () => {
  const [watch, setWatch] = useState (false);

  return (
    <HStack pos="sticky" top={0} as="nav" bg="green.300" zIndex={10}  justifyContent="space-around">

      <Logo />
   
      <ListMenu />
      {watch &&
        <Input
          pos="fixed"
          left="12%"
          w={['65%', '65%', '84%', '70%']}
          maxH="35px"
          bg="white"
        />}
    
      <Search2Icon onClick={() => setWatch (!watch)} />
      <HamburgerMenu />
    </HStack>
  );
};

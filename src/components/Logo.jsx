import {Image, Heading, Flex} from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom';
import eco from '../images/logo.png';
const Logo = () => {
  return (
    <Flex to="/" alignItems="center" as={Link}>

      <Image src={eco}  width="3rem" height=""/>
      <Heading color="white">

        CETSen

      </Heading>
    </Flex>
  );
};

export default Logo;

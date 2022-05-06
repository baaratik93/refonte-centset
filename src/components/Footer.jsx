import React from 'react';
import {Text, Flex} from '@chakra-ui/react';
import {TriangleDownIcon} from '@chakra-ui/icons';

export const Footer = () => {
  return (
    <Flex bg="wheat" h="20vh">
      <Text> <TriangleDownIcon /></Text>
      <Text textAlign="center" fontSize={12} justifyContent="center">
        &copy;All right reserved 2022 .Inc{' '}
      </Text>
      <Text textAlign="right" fontSize={12}>Réglements & autorisations</Text>
    </Flex>
  );
};

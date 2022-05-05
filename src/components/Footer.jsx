import React from 'react'
    import styled from "@emotion/styled"; 
import { Text } from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';
 
export const Footer = () => {



    const CustomFooter = styled.div`
    position: fixed;
    background: wheat;
    height: 10vh;
    bottom: 0;
    right: 0;
    left: 0;
  `;

  return (
    <CustomFooter>
    <Text> <TriangleDownIcon/></Text>
    <Text textAlign="center" fontSize={12} justifyContent="center">&copy;All right reserved 2022 .Inc </Text>
    <Text textAlign="right" fontSize={12}>Réglements & autorisations</Text>
</CustomFooter>
  )
}

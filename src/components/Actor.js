import { VStack,Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import React from 'react'

const Actor = ({name,title,image}) => {
  return   <VStack boxShadow="sm" h="170px">
      <Image src={image} w="110px" h="100"  rounded="2xl"/>
      <Text fontSize={18} fontWeight="bold">{name}</Text>
      <Text as="small" fontWeight="bold"  color="green.300"  >{title}</Text>
  </VStack>
}

export default Actor
import React from 'react'
import { Box } from '@chakra-ui/layout';
import {useColorMode} from "@chakra-ui/react"
const CustomFooter = ({children}) => {
const {colorMode} = useColorMode()
const footFontColor = {
  dark: "lime",
  lignt: "black"
}
  return <Box  pos={["","","fixed"]} color={footFontColor[colorMode]} bottom={0} right={0} left={0} bg="black">
      {children}
  </Box>
}

export default CustomFooter
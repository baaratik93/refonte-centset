import React from 'react'
import { Box } from '@chakra-ui/layout';

const CustomFooter = ({children}) => {
  return <Box  pos={["","","fixed"]} bottom={0} right={0} left={0} bg="lightgreen">
      {children}
  </Box>
}

export default CustomFooter
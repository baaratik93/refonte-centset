import { Image } from '@chakra-ui/image'
import { Text,Box } from '@chakra-ui/layout'
import React from 'react'
import {Link} from "react-router-dom"
import logo from "../images/logo.png"
const Logo = () => {
  return <Link to="/">
    <Box display="flex" gap={2} alignItems="center" p={3} bg="green.100" h={50} rounded="xl" mb="-40px" ml="-10px">
    <Text as="h2" color="green.400" fontWeight="bold">CETSEN</Text> <Image src={logo}w={8} h={8} />
    </Box>
     </Link>
}

export default Logo
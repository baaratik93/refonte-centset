import { Image } from '@chakra-ui/image'
import { Text,Box } from '@chakra-ui/layout'
import React from 'react'
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
const Logo = () => {
  return <Link to="/">
    <Box display="flex" gap={2} clipPath="polygon(0% 0%, 100% 1%, 75% 100%, 0% 100%);" boxShadow="xl"  
       alignItems="center"  px={70} bg="green.300" h={50}  mb="-38px" ml="-13px">
    <Text as="h2" color="white" fontWeight="bold">CETSEN</Text> <Image src={logo}w={8} h={8} />
    </Box>
     </Link>
}

export default Logo
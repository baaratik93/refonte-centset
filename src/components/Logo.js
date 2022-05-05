import { Heading } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"
import eco from '../images/logo.png'
const Logo = () => {
  return <Link to="/"><Heading w={"3rem"} color="whatsapp.400">
    <Image src={eco} 
      size={"100%"} 
     />

    
    </Heading></Link>
}

export default Logo
import React from 'react'
import {Box, Link as ChakraLink} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { BellIcon,AddIcon, AttachmentIcon, CopyIcon } from 
"@chakra-ui/icons";


const ListMenu = () => {
  return <Box alignItems="center" justifyContent="space-between" display={["none", "none","flex", "flex"]} minW="50%" >
  <ChakraLink to="/blog" as={Link} fontSize={["6", "12", "16", "18"]} mx="2"><BellIcon mx="2px"/>Blog</ChakraLink>
  <ChakraLink as={Link} to="/projets" fontSize={["6", "12", "16", "18"]} mx="2"><AddIcon mx="2px"/>Projets</ChakraLink>
  <ChakraLink as={Link}  to="/team"  fontSize={["6", "12", "16", "18"]} mx="2"><AttachmentIcon mx="2px"/>Equipe</ChakraLink>
  <ChakraLink as={Link}  to="/contacts"  fontSize={["6", "12", "16", "18"]} mx="2"><CopyIcon mx="2px"/>Contacts</ChakraLink>
  {/* <ChakraLink as={Link} to="/blog">Blog</ChakraLink> */}
</Box>
}

export default ListMenu
import { HStack,  Box,Text,Button,Menu,MenuList,MenuItem,MenuButton,IconButton, Link as ChakraLink,Spacer} from "@chakra-ui/react";
import { HamburgerIcon, BellIcon,AddIcon, AttachmentIcon, CopyIcon } from "@chakra-ui/icons";
import {Link,useNavigate} from "react-router-dom"

export const MenuNav = () => {
  const router = useNavigate()
  return  <HStack pos="sticky" top={0}  as="nav" bg="blue.200" p={2}>
    <Box  color="green.100" fontSize={22} fontWeight="bold">CS</Box>
    <Spacer/>
    <Box display={["none", "none","block", "block"]}>
    <ChakraLink to="/blog" as={Link} fontSize={["6", "12", "16", "18"]} mx="2"><BellIcon mx="2px"/>Blog</ChakraLink>
    <ChakraLink as={Link} to="/projets" fontSize={["6", "12", "16", "18"]} mx="2"><AddIcon mx="2px"/>Projets</ChakraLink>
    <ChakraLink as={Link}  to="/actus"  fontSize={["6", "12", "16", "18"]} mx="2"><AttachmentIcon mx="2px"/>Actus</ChakraLink>
    <ChakraLink as={Link}  to="/contacts"  fontSize={["6", "12", "16", "18"]} mx="2"><CopyIcon mx="2px"/>Contacts</ChakraLink>
    {/* <ChakraLink as={Link} to="/blog">Blog</ChakraLink> */}
  </Box>
  <Spacer/>
  <Button colorScheme="green" _hover={{color:"lime"}}  fontSize={["11", "12", "14", "16"]}><Text>Agissez avec nous!</Text></Button>
  <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} bg="transparent" color="green.100" rounded="3xl" as={IconButton} icon={<HamburgerIcon />}  display={["block", "block","none", "none"]}/>
      <MenuList>
        <MenuItem  icon={<BellIcon/>} onClick={()=> router("/blog")}>Blog</MenuItem>
        <MenuItem icon={<AddIcon/>} onClick={()=> router("/projets")}
        >Projets</MenuItem>
        <MenuItem icon={<AttachmentIcon/>} onClick={()=> router("/actus")}>Actus</MenuItem>
        <MenuItem icon={<CopyIcon/>} onClick={()=> router("/contacts")}>Contacts</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
  </HStack>
};

import { HStack, Link, Box,Text,Button,Menu,MenuList,MenuItem,MenuButton,IconButton,Spacer} from "@chakra-ui/react";
import { HamburgerIcon, BellIcon,AddIcon, AttachmentIcon, CopyIcon } from "@chakra-ui/icons";

export const MenuNav = () => {
  return  <HStack pos="sticky" top={0}  as="nav" bg="blue.200" p={2}>
    <Box  color="green.100" fontSize={22} fontWeight="bold">CS</Box>
    <Spacer/>
    <Box display={["none", "none","block", "block"]}>
    <Link fontSize={["6", "12", "16", "18"]} as={Button} bg="transparent"  mx="2">Blog</Link>
    <Link fontSize={["6", "12", "16", "18"]} as={Button}  bg="transparent" mx="2">Projets</Link>
    <Link fontSize={["6", "12", "16", "18"]} as={Button}  bg="transparent" mx="2">Actus</Link>
    <Link fontSize={["6", "12", "16", "18"]} as={Button}  bg="transparent" mx="2">Contacts</Link>
  </Box>
  <Spacer/>
  <Button colorScheme="green" _hover={{color:"lime"}}  fontSize={["11", "12", "14", "16"]}>Agissez avec nous!</Button>
  <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} bg="transparent" color="green.100" rounded="3xl" as={IconButton} icon={<HamburgerIcon />}  display={["block", "block","none", "none"]}/>
      <MenuList>
        <MenuItem  icon={<BellIcon/>}>Blog</MenuItem>
        <MenuItem icon={<AddIcon/>}>Projets</MenuItem>
        <MenuItem icon={<AttachmentIcon/>}>Actus</MenuItem>
        <MenuItem icon={<CopyIcon/>}>Contacts</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
  </HStack>
};

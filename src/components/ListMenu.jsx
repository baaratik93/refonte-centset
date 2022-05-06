import React from "react";
import { Box, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BellIcon, AddIcon } from "@chakra-ui/icons";
import {AiOutlineTeam, AiOutlineContacts} from "react-icons/ai"; 
const ListMenu = () => {
 
  return (
    <Box
      alignItems="center"
      justifyContent="space-between"
      display={["none", "none", "flex", "flex"]}
      minW="50%"
    >
      <ChakraLink
        _hover={"textDecoration:none, bg:red"}
        to="/"
        as={Link}
        fontSize={["6", "12", "16", "18"]}
        mx="2"
      >
        <BellIcon mx="2px" />
        Qui Sommes Nous
      </ChakraLink>
      <ChakraLink
        _hover={"textDecoration:none, bg:red"}
        to="/equipe"
        as={Link}
        fontSize={["6", "12", "16", "18"]}
        mx="2"
        display="flex"
        alignItems="center"
      >
        <AiOutlineTeam  />
      Notre Equipe
      </ChakraLink>
      <ChakraLink
        _hover="textDecoration:none"
        as={Link}
        to="/initiative"
        fontSize={["6", "12", "16", "18"]}
        mx="2"
      >
        <AddIcon mx="2px" />
   Initiatives
      </ChakraLink>
      <ChakraLink
        _hover="textDecoration:none"
        as={Link}
        to="/blog"
        fontSize={["6", "12", "16", "18"]}
        mx="2"
      >
        <BellIcon mx="2px" />
       Blog
      </ChakraLink>
      <ChakraLink
        _hover="textDecoration:none"
        as={Link}
        to="/contacts"
        fontSize={["6", "12", "16", "18"]}
        mx="2"
        display="flex"
        alignItems="center"
      >
        <AiOutlineContacts mx="2px" />
        Contacts
      </ChakraLink>
      {/* <ChakraLink as={Link} to="/blog">Blog</ChakraLink> */}
    </Box>
  );
};
 
export default ListMenu;
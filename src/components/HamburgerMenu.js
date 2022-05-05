import React from 'react'
import { Menu,MenuList,MenuItem,MenuButton,IconButton} from "@chakra-ui/react";
import { HamburgerIcon, BellIcon,AddIcon, AttachmentIcon, CopyIcon } from 
"@chakra-ui/icons";
import {useNavigate} from "react-router-dom"

const HamburgerMenu = () => {
    const router = useNavigate()

  return <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} bg="transparent" color="green" rounded="3xl" as={IconButton} icon={<HamburgerIcon />}  display={["block", "block","none", "none"]}/>
      <MenuList>
        <MenuItem  icon={<BellIcon/>} onClick={()=> router("/blog")}>Blog</MenuItem>
        <MenuItem icon={<AddIcon/>} onClick={()=> router("/projets")}
        >Projets</MenuItem>
        <MenuItem icon={<AttachmentIcon/>} onClick={()=> router("/team")}>Equipe</MenuItem>
        <MenuItem icon={<CopyIcon/>} onClick={()=> router("/contacts")}>Contacts</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
}

export default HamburgerMenu
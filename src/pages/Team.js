import { Box, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import Actor from '../components/Actor'
import md from "../images/md.png"
import an from "../images/an.jpg"
import moustapha from "../images/moustapha.jpg"
import mm from "../images/mm.jpg"
import td from "../images/td.jpg"
import mnf from "../images/mnf.jpg"

const Team = () => {
  return <VStack>
    <Heading m={10} >
      Notre équipe
    </Heading>
  
    <Box 
    display="grid" 
    gap={5}
    gridTemplateColumns={[
      "1fr","1fr 1fr","1fr 1fr 1fr","1fr 1fr 1fr 1fr"
    ]}
    >
    <Actor image={md} name="Mamadou DIOUF" title="Président de l'association"/>
    <Actor image={an} name="Arouna Ndiage" title="Sécrétaire général"/>
    <Actor image={moustapha} name="Moustapha Diallo" title="Chargé d'organisation"/>
    <Actor image={md} name="Dione Gomis" title="Chargé des relation extérieurs"/>
    <Actor image={mm} name="Mamadou MBAYE" title="Vice-président"/>
    <Actor image={td} name="Tiama DIAO" title="Adjointe sécretaire général"/>
    <Actor image={mnf} name="Tiama DIAO" title="Adjointe sécretaire général"/>
    </Box>
    
    </VStack>
}

export default Team

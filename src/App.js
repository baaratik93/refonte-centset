import React from "react"
import { MenuNav } from "./components/MenuNav";
import Blog from "./pages/Blog"
import Projets from "./pages/Projets"
import Team from "./pages/Team"
import Contacts from "./pages/Contacts"
import Home from "./pages/Home"
import Error from "./pages/Error"
import {BrowserRouter , Routes, Route } from "react-router-dom";
import {Box,Text} from "@chakra-ui/react"
import {TriangleDownIcon} from "@chakra-ui/icons"
import CustomFooter from "./components/CustomFooter";


function App() {
  return <BrowserRouter>
   <MenuNav/>
        <Box px={5} m={1} zIndex="-1000" >
        <Routes>
          <Route exact  path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/projets" element={<Projets/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="*" element={<Error/>}/>
      </Routes>
        </Box>
        <CustomFooter>
               <Text> <TriangleDownIcon/></Text>
               <Text textAlign="center" fontSize={12} justifyContent="center">&copy;All right reserved 2022 .Inc </Text>
               <Text textAlign="right" fontSize={12}>Réglements & autorisations</Text>
        </CustomFooter>
      </BrowserRouter>
}

export default App;

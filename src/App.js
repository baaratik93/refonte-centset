import React from "react"
import { MenuNav } from "./components/MenuNav";
import Blog from "./components/Blog"
import Projets from "./components/Projets"
import Actus from "./components/Actus"
import Contacts from "./components/Contacts"
import Home from "./Home"
import Error from "./components/Error"
import {BrowserRouter , Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import {Box} from "@chakra-ui/react"

const CustomFooter = styled.div`
position: fixed;
background: wheat;
height:10vh;
bottom:0;
right:0;
left:0;
`


function App() {
  return <BrowserRouter>
   <MenuNav/>
        <Box px={5} m={1}>
        <Routes>
          <Route exact  path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/projets" element={<Projets/>}/>
          <Route path="/Actus" element={<Actus/>}/>
          <Route path="/Contacts" element={<Contacts/>}/>
          <Route element={<Error/>}/>
      </Routes>
        </Box>
      <CustomFooter/>
      </BrowserRouter>
}

export default App;

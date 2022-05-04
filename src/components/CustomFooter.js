import React from 'react'
import styled from "@emotion/styled";
const Footer= styled.div`
position: fixed;
background: lightblue;
height:10vh;
bottom:0;
right:0;
left:0;
padding:10px;
display: grid;
grid-template-columns: repeat(3,1fr)
`

const CustomFooter = ({children}) => {
  return <Footer>
      {children}
  </Footer>
}

export default CustomFooter
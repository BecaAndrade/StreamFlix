import React from "react";
import {createGlobalStyle} from "styled-components"

import Header from "./Components/header"
import Main from "./Components/main"

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
function App(){
  return(
    <>
    <GlobalStyle/>
    <Header/>
    <Main/>
    </>
  )
}
export default App
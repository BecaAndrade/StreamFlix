import styled from "styled-components";
import Fundo from "./../../public/Img/wandinha.png"; // Importação correta para arquivos fora de public

export const Main = styled.main`
  height: 120vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  
`;
// ------------------------------------------------------PRIMEIRA SESSÃO------------------------------------------------------------------------
// estilização da section MAE
export const BOXMAE =styled.section`
  /* border: solid red; */
  background-image: url(${Fundo}); 
  background-repeat: no-repeat;
  background-size: cover; 
  background-color: black;
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`
// section informaçoes
export const Box1 = styled.section`
  /* border: solid 2px green; */
  margin-left:60px ;
  height: 75%;
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color:white;

  p{
    font-size: 1.5em;
  }
`
// div grupo idade e informaçoes
export const Group = styled.div`
  /* border: solid green; */
  width: 32%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
// caixa p
export const Caixap = styled.div`
  /* border: solid red; */
  width: 36vw;
`
// caixa dos buttons
export const BoxButton = styled.div`
  /* border: solid yellow; */
  margin-left:60px ;
  width: 42vw;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
// button 1
export const Button1 = styled.button`
  /* border: solid red; */
  border-radius: 10px;
  width: 14vw;
  height: 9vh;
  background-color: #35D7DA;
  font-size: 1.5em;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-evenly;


`
// button 2
export const Button2 = styled.button`
  /* border: solid orange; */
  border-radius: 10px;
  width: 24vw;
  height: 9vh;
  background-color: white;
  font-size: 1.5em;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

// --------------------------------------------------------Segunda Sessão---------------------------------------------------------------------------

export const BOXMAE2 = styled.section`
   /* border: solid white; */
   background-color: black;
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`
export const Caixadiv =styled.div`
  /* border: solid red; */
  display: flex;
  justify-content:flex-start;
  width: 92%;
  height: 15%;
`
export const CaixaText =styled.div`
  /* border: solid red; */
  display: flex;
  justify-content:flex-start;
  width: 92%;
  height: 15%;
`

export const CaixadeImagens = styled.div`
  /* border: solid red; */
  /* margin-right: 100px; */
  width: 100%;
  height: 57%;
  display: flex;
  justify-content: space-between;
  padding-left: 40px;
`
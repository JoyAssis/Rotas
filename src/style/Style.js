import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }`
//Navigation
export const Container = styled.header`
`
export const Nav = styled.nav`
height: 10vh;
background-color: #4a5759;
display: flex;
justify-content:center;
color:#ffffff;
font-weight: 900;
text-transform: uppercase;

ul{
  display:flex;
  width: 50%;
  height: 10vh;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  li{
    border-left: solid 1px #4a5759;
    border-rigth: solid 1px #4a5759;
    width: 15vw;
    height: 5vh;
    text-align: center;
    background-color:  #a5a58d;
    padding:5px 5px 5px 5px;
  }
  li:hover{
    cursor: pointer;
  }
}
`
export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`
export const Dcontent = styled.ul`
  position: absolute;
  top: 40px;
  background-color: #a5a58d;
  min-width: 198px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
`
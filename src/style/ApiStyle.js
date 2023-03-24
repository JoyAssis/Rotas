import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
}
`;

export const Container = styled.div`
  background-color: #3d405b;
  img {
    width: 12vw;
    border: solid #81b29a;
    border-radius: 10px;
  }
  button {
    width: 10vw;
    background-color: #e07a5f;
    border-radius: 10px;
    border: none;
  }
`;
export const Title = styled.h1`
  font-family: "Lilita One", cursive;
  font-size: 3.2em;
  margin: 0 0 0 0.3em;
`;
export const Input = styled.input`
  margin: 1.5em 0 0 1em;
  background-color: #dad7cd;
  border-radius: 10px;
  height: 3vh;
`;
export const DivideOne = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 200vh;
  width: 100%;
  gap: 5px;
`;
export const Card = styled.div`
  width: 15vw;
  height: 45vh;
  background-color: #e07a5f;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  transition: all 0.25s;
  :hover {
    background-color: #f2cc8f;
  }
  font-family: "Shadows Into Light", cursive;
`;
export const Divide = styled.div`
  width: 100%;
  height: 17vh;
  text-align: center;
  line-height: 1.5em;
`;

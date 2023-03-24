import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import da biblioteca react-router-dom (npm install react-router-dom)

//import das páginas
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import ToDo from "../pages/ToDo";
import Api from "../pages/Api";
//import estilo
import * as S from "../style/Style";
import styled from "styled-components";
const Links = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;

export default class Navegation extends React.Component {
  state = {
    open: false
  }//estado da lista para o dropdown
  
  // função para abrir o dropdown ! significa o contrario (se open for false ele é true e se for true ele é false)
  handleList =()=>{
    this.setState({
      open:!this.state.open
    })
  }
  render() {
    return (
      <S.Container>
      <S.GlobalStyle/>
        <BrowserRouter>
          <S.Nav>
            <ul>
              <li>
                <Links to="/">Início</Links>
              </li>
              <S.Dropdown>
              {/* evento de clique que ativa a função de "abrir e fechar a lista" junto com um ternário para mostar alguma coisa nessa mudança */}
              <li onClick={this.handleList}>
                {this.state.open? "ᐁ " : "ᐅ "}
                Projects
              </li>
              {/* quando o estado for true ele mostra tambem a lista "escondida"(renderização condicional) */}
              {this.state.open && (
                <S.Dcontent>
                  <li>
                    <Links to="/todo">ToDo</Links>
                  </li>
                  <li>
                    <Links to="/api">API</Links>
                  </li>
                </S.Dcontent>
              )}
              </S.Dropdown>
              <li>
                <Links to="/contact">Contato</Links>
              </li>
            </ul>
          </S.Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/api" element={<Api />} />
          </Routes>
        </BrowserRouter>
      </S.Container>
    );
  }
}

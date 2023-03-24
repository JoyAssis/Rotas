import React from "react";
import axios from "axios";
import * as S from "../style/ApiStyle";
//2º passo - importart axios e usar o metodo create para guardar a url de onde virão as informações
const API = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});

export default class Api extends React.Component {
  //1º passo criar um estados com uma array vazia que iá receber as informações
  //da api
  state = {
    infos: [],
    filtro: [] //array de que vai receber a lista filtrada
  };
  /**
   * Async/Await - usados juntos
   *  - maneira de escrever promises (Syntactit Sugar - maneira elegante)
   *   uma função assincrona que vai esperar pela resposta da promessa
   *
   *  --- promessa (um objeto JS)
   * A promessa de que algo irá acontecer poderá dar certo ou errado,mas irá acontecer.
   */

  //3º passo criar uma função que vai pegar* a api e mapear* o conteúdo que ela tiver e passar para o state
  pegarPersonagens = async () => {
    const resposta = await API.get(); // essa varíavel roda o await que vai *esperar* a promessa ser retornada, ou seja nossa api ser retornada
    // console.log(resposta) ver no console a função pegando/recebendo a api
    //variavel que vai acessar e mapear a seção de results onde estão guardados os personagens em da api
    const itensApi = resposta.data.results.map((item) => {
      return {
        ...item //spread - usamos quando todos os elementos de um objeto ou array precisam ser
        //incluídos em um novo array ou objeto.
      };
    });
    //agora vamos colocar esses resultados dentro da array que criamos no state
    this.setState({
      infos: itensApi
    });
  };

  //4º passo - o component didMount vai montar nossa função deixando ela pronta pra gente
  componentDidMount() {
    this.pegarPersonagens();
  }
  //5º passo - mapear o state e pegar as informação que a genet quer
  render() {
    return (
      <S.Container>
        <div>
          <S.Title>Rick and Morty</S.Title>
          <S.Input placeholder="Search" />
          <button>Next</button>
        </div>

        <S.DivideOne>
          {this.state.infos.map((item) => (
            <S.Card>
              <img src={item.image} alt="" />
              <S.Divide>
                <h2>{item.name}</h2>
                <p>{item.species}</p>
                <p>{item.gender}</p>
                <p>{item.origin.name}</p>
              </S.Divide>
            </S.Card>
          ))}
        </S.DivideOne>
      </S.Container>
    );
  }
}

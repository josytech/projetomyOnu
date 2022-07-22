import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

const CaixaPrincipal = styled.div`
    width: 100%;
    height: 100%;
    background-color:#6699CC;
`

const Introducao = styled.div`
    width: 50%;
    height: 80px;
    background-color: #ff853f;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 25%;
    margin-top:1%;
`

const Solucoes = styled.div`
width: 50%;
height: 300px;
background-color:white;
margin: auto;
display: flex;
flex-direction: column;
margin-top: 2%;
border: 6px solid black;
border-radius: 20px;


`

const Agaum = styled.h1`
    font-size:2em;
    color: black;
    font-family: monospace;
    overflow: hidden; 
    border-right: .15em solid orange; 
    white-space: nowrap;
    margin: 0 auto; 
    letter-spacing: .15em; 
    animation: 
    typing 1.5s steps(30, end),
    blink-caret .5s step-end infinite;
  
  

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color:orange }
  }
`

const Paragrafos = styled.h2`
    font-size:1.2em;
    color: black;
    margin-left:5%;
`

const ParagrafosObj = styled.h3`
    font-size: 1em;
    color: #D2691E;
    margin-left:40%;
`


const EnglobaInf = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 20%;
justify-content: space-around;
`

const CaixaInicio = styled.div`
  width: 60px;
  height: 30px;
  background-color:#ffcc58;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-left:5%;
  border-radius: 10px;
  border: 2px solid black;
    
`;


export default function Reciclagem() {
  return (
    <CaixaPrincipal>
            <Introducao>

              <EnglobaInf>
                  <Agaum>LIXO</Agaum>
              </EnglobaInf>

            </Introducao>

            <Solucoes>
                <ParagrafosObj>O lixo transforma</ParagrafosObj>
                <br/>
                <Paragrafos>
                    
                    1-Criação de centro de informações sobre meio ambiente e reciclagem,com o objetivo de desenvolver inovação e gerar impacto socioambiental.


                </Paragrafos>
                
                <br/>


                <Paragrafos>
                    2- Campanha de coleta seletiva .
                </Paragrafos>
                
                <CaixaInicio><Link to='/'>Home</Link></CaixaInicio>
            </Solucoes>
        </CaixaPrincipal>
  );
}

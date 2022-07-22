import React from "react"
import styled from "styled-components"




const CaixaPrincipal = styled.div`
    background-color:#6699CC;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`
const H1 = styled.h1`
    font-size: 2em;
    color: black;
    
`

const CaixaPara = styled.div`
    width: 50%;
    height: 60%;
    margin-top:60px;
    margin-left:50px;
    color:black;
    font-size: 0.90em;
`

export default function Home (){
    return(
       
        <CaixaPrincipal>

            <H1>A proposta é desenvolver projetos com o objetivo<br/> de proporcionar uma rotina mais prática e um dia a dia <br/>mais sustentável e mais bem-estar para os seus habitantes.  </H1>
            <CaixaPara>
                <p>Desenvolvido por Joseane Vieira como projeto final da formação desenvolvedor Front End do curso Vai Na Web
                </p>
            </CaixaPara>
        </CaixaPrincipal>
    )
} 
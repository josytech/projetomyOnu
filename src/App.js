import React from 'react'
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Animais from './pages/Animais'
import Home from "./Home"
import Asfalto from './pages/Asfalto'

import Reciclagem from './pages/Reciclagem'
import Social from './pages/Social'
import Edu from './pages/Edu'

import cardanimal from "../src/image/cardanimal.png"
import cardedu from "../src/image/cardedu.png"
import cardsocial from "../src/image/cardsocial.png"
import cardasfalto from "../src/image/cardasfalto.png"
import cardreciclagem from "../src/image/cardreciclagem.png"



const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration:none;
    list-style: none;
    
  }

  
  `

 


  const Para = styled.p`
  color:white;
  padding-top:50px;
  display: flex;
  justify-content:center;
  align-items: center;
  font-size:30px;
	font-weight:bold;

  `
 
  const ParteHeader  = styled.div`
    background-color:#6699CC;
  


.card{
    width: 10vw;
    height:18;
    display: flex;
    justify-content:center;
    align-items: center;
    border: 2px solid black;
    cursor: pointer;

}

.initial{
      
  margin-left:1.5%;
  width:7%;
  height: 5vh;
  text-align: center;
  font: normal normal normal 16px/32px Roboto;
  background-color:white;
  border-radius:6px;
  font-size:1em;
  margin-bottom:1.5%;
    
  }
  `
 
  


const CardTodos = styled.ul`
  background-color:#ffbc40;
  width: 80vw;
  height:50vh;
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin-left: 10%;
  padding:15px;
  border-top: 30px solid black;

`;







  
  

  

export default function App() {
  return (
    <body>
            

       <GlobalStyle/>
       
       <ParteHeader>

       <Para>Os Objetivos de Desenvolvimento Sustentável no Bracuhy</Para>
    <Router>
      
        
        <p className='initial'>   <Link to='/'><li>Início</li></Link> </p>
   
     
      <CardTodos>
        
          <Link to='/Animais'><li><img src={cardanimal} alt="cardanimal" className='card'  /></li></Link>
          <Link to='/Edu'><li><img src={cardedu} alt="cardedu"  className='card' /></li></Link>
          <Link to='/Social'><li><img src={cardsocial} alt="cardsocial" className='card' /></li></Link>
          <Link to='/Asfalto'><li><img src={cardasfalto} alt="cardasfalto" className='card' /></li></Link>
          <Link to='/Reciclagem'><li><img src={cardreciclagem} alt="cardreciclagem" className='card' /></li></Link>
        
         

        
       
        
      </CardTodos>
    

      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/Animais' element={<Animais/>}/>
        <Route path='/Edu' element={<Edu/>}/>
        <Route path='/Social' element={<Social/>}/>
        <Route path='/Asfalto' element={<Asfalto/>}/>
        <Route path='/Reciclagem' element={<Reciclagem/>}/>
      
      </Routes>
     

    </Router>
    </ParteHeader>
    </body>
  );
}

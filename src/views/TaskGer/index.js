import React from 'react';
import * as S from './styles';


//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function TaskGer() {
    return (
    <S.Container>
      <Header/>
      <S.Company>
          <h1>Metalúrgica 01</h1>
      </S.Company>
      <S.Title>
        <h2> Novo Ponto de Coleta </h2>
      </S.Title>
      <S.InputArea>
        <S.Input>
            <span>Coletor</span>
            <input></input>
            <span>Material</span>
            <input></input>
            <span>Quantidade</span>
            <input></input>
            
        </S.Input>
      </S.InputArea>
      
        
      
      <Footer/>
    </S.Container>
    
    )
  }
  
  export default TaskGer ;
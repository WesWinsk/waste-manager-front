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
        <S.TextArea>
          <span>Descrição</span>
          <textarea rows={7} placeholder=" Atual estado do material descartado"/>
        </S.TextArea>
      </S.InputArea>
     


      <S.ButtomArea>
        <button href="#" id = "cancelar">Cancelar</button>
        <button href="#" id = "salvar">Salvar</button>
      </S.ButtomArea>
        
      
      <Footer/>
    </S.Container>
    
    )
  }
  
  export default TaskGer ;
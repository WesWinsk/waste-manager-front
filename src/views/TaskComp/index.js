import React from 'react';
import * as S from './styles';


//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function TaskComp() {
    return (
    <S.Container>
      <Header/>
      <S.Company>
          <h1>Metalúrgica 01</h1>
      </S.Company>
      <S.Title>
        <h2> Nova Busca de Material</h2>
      </S.Title>
      <S.InputArea>
        <S.Input>
            
            <span>Material</span>
            <input></input>
            <span>Quantidade</span>
            <input></input>
            
        </S.Input>
        
      </S.InputArea>
     


      <S.ButtomArea>
        <button href="#" id = "cancelar">Cancelar</button>
        <button href="#" id = "salvar">Salvar</button>
      </S.ButtomArea>
        
      
      <Footer/>
    </S.Container>
    
    )
  }
  
  export default TaskComp ;
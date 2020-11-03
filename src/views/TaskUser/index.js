import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';


//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function TaskUser() {
    return (
    <S.Container>
      <Header/>
      
      <S.Title>
        <h2> Novo Cadastro </h2>
      </S.Title>
      <S.InputArea>
        <S.Input>
            <span>Nome</span>
            <input></input>
            <span>E-mail</span>
            <input></input>
            <span>Organização</span>
            <input></input>
            <span>Senha</span>
            <input></input>
            <span>Confirmar Senha</span>
            <input></input>
            <span>Tipo de Usuário</span>
            <select>
              <option>Gerador de Resíduos</option>
              <option>Reciclador de Resíduos</option>
            </select>
           
           
        </S.Input>
        <S.OptionArea>
          
          <h3>Tipo de Usuário</h3>
          
          <S.Options>
         
          <div>
            <input type="checkbox"/>
            <span>Gerador de Resíduos</span>
          </div>
          <div>
            <input type="checkbox"/>
            <span>Reciclador de Resíduos</span>
          </div>
         

        </S.Options>
        </S.OptionArea>


        
      </S.InputArea>
      


      <S.ButtomArea>
        <button><Link to = "/" >Cancelar</Link></button>
        <button><Link to = "/">Salvar</Link></button>
      </S.ButtomArea>
        
      
      <Footer/>
    </S.Container>
    
    )
  }
  
  export default TaskUser ;
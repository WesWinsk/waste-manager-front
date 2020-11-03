import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';



function NoteGer() {

  
  
    return (
    <S.Container>
      <Header/>
      <S.Company>
          <h1>Metalúrgica 01</h1>
      </S.Company>
      <S.Title>
        <h2> Notificações </h2>
      </S.Title>
      <S.NotificArea>
          <S.NotifierBox>
            <h2>Empresa Multimetal Metalúrgica - LTDA apresenta interesse em seu material armazenado. - Aço Inox. </h2>
            <button href = "#"> Recusar Pedido </button>
            <button href = "#" > Abrir Negociação </button>
          </S.NotifierBox>
      </S.NotificArea>
      
      <Footer/>
    </S.Container>
    
    )
  }
  export default NoteGer;
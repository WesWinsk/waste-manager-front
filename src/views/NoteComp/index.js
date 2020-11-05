import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';





function NoteGer() {

  const [companyUser, setCompanyUser] = useState ([]);

  const idUser= localStorage.getItem('userId');

  async function loadCompany(){
    await api.get(`/users/${idUser}`)
    .then(response => {
      setCompanyUser(response.data); 
    })
  }

  useEffect(() => {

       loadCompany();
       
     }, [])

  
    return (
    <S.Container>
      <Header/>
      <S.Company>
          <h1>{companyUser.map(comp => (comp.company))}</h1>
      </S.Company>
      <S.Title>
        <h2> Notificações </h2>
      </S.Title>
      <S.NotificArea>
          <S.NotifierBox>
            <h2>Empresa Multimetal Metalúrgica - LTDA apresenta materiais que condizem com sua busca. - Aço Prata </h2>
            <button> Remover Notificação </button>
            <button> Notificar Empresa </button>
          </S.NotifierBox>
          


      </S.NotificArea>
      
      <Footer/>
    </S.Container>
    
    )
  }
  export default NoteGer;
import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';

//NOSSOS COMPONENTES

import Footer from '../../components/Footer';
import HeaderComp from '../../components/HeaderComp';





function NoteComp() {

  const [notification, setNotification] = useState([]);
  const [companyUser, setCompanyUser] = useState ([]);
  const [providerCompany, setProviderCompany] = useState();

  const idUser= localStorage.getItem('userId');

  async function loadNotification(){
    await api.get(`notifications/${idUser}`)
    .then(response => {
      setNotification(response.data);
    })
  }

  async function loadCompany(){
    await api.get(`/users/${idUser}`)
    .then(response => {
      setCompanyUser(response.data); 
    })
  }


  async function createProviderNotification(providerUser, search_id){
    await api.post(`/notification`,{
      user_id: providerUser,
      search_id,
      messege: "teste messege",
      accepted: false
    }).then()
  }

  async function loadProviderDiscard(material_id, type_id, curr_quant){
    await api.post(`notifications/discardinfo`,{
      material_id,
      type_id,
      curr_quant
    }).then (response => {
      setProviderCompany(response.data.user_id)
    });
    }
  

  useEffect(() => {

       loadCompany();
       loadNotification();
       
     }, [])

  
    return (
    <S.Container>
      <HeaderComp/>
      <S.Company>
          <h1>{companyUser.map(comp => (comp.company))}</h1>
      </S.Company>
      <S.Title>
        <h2> Notificações </h2>
      </S.Title>
      <S.NotificArea>
      {notification.map(notification =>(
          <S.NotifierBox>
            <button href = "#"> Remover Notificação </button>
            <button href = "#" > Notificar Empresa </button>
          </S.NotifierBox>
          ))
        }
      </S.NotificArea>
      
      <Footer/>
    </S.Container>
    
    )
  }
  export default NoteComp;
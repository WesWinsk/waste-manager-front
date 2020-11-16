import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';



function NoteGer() {

  const [notification, setNotification] = useState([]);
  const [companyUser, setCompanyUser] = useState ([]);
 
  

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

  useEffect(() => {
    loadNotification();
    loadCompany();
  }, [])
  return (
    <S.Container>
      <Header/>
      <S.Company>
          <h1>{companyUser.map(company => (company.company))}</h1>
      </S.Company>
      <S.Title>
        <h2> Notificações </h2>
      </S.Title>
      <S.NotificArea>
        {notification.map(notification =>(
          <S.NotifierBox>
            <h2> {notification.Search.User.company} apresenta interesse em seu material: {notification.Search.Material.name}. </h2>
            <button href = "#"> Recusar Pedido </button>
            <button href = "#" > Abrir Negociação </button>
          </S.NotifierBox>
          ))
        }
      </S.NotificArea>
      
      <Footer/>
    </S.Container>
    
    )
  }
  export default NoteGer;
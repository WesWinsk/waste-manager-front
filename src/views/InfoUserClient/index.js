import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';
import {Link, } from 'react-router-dom';

//NOSSOS COMPONENTES
import HeaderComp from '../../components/HeaderComp';
import Footer from '../../components/Footer';


function InfoUserClient() {

    const idUser= localStorage.getItem('userId');
    const [companyUser, setCompanyUser] = useState ([]);
    const [user, setUser] = useState([]);


  

    async function loadCompany(){
      await api.get(`/users/${idUser}`)
      .then(response => {
        setCompanyUser(response.data); 
      })
    }


    

    async function loadUser(){
      await api.get(`/users/${idUser}`)
      .then(response => {
        setUser(response.data)
       
      })
    } 
  

    useEffect(() => {
      loadCompany();
      loadUser();
      
    }, [])

    return (
    <S.Container>
      <HeaderComp/>
      
      <S.Title>
        <h2> Informações Gerais do Usuário</h2>
      </S.Title>
      <S.InfoArea>
            {
          user.map(user => (
            <S.InfoBox>
                <p> <b>Empresa: </b>{user.company}</p>
                <p> <b>Nome:</b> {user.name}</p>
                <p> <b>E-mail:</b> {user.email} </p>
                <p> <b>Tipo de Usuário:</b> {user.type} </p>
                
                <button><Link to = "/homecomp"> VOLTAR </Link> </button>       
            </S.InfoBox>))
          }
      </S.InfoArea>
      <Footer/>
    </S.Container>
    )
  }
  export default InfoUserClient;


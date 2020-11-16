import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';
import {Link, useRouteMatch} from 'react-router-dom';

//NOSSOS COMPONENTES
import HeaderComp from '../../components/HeaderComp';
import Footer from '../../components/Footer';



function InfoSearch() {

    const idUser= localStorage.getItem('userId');
    const [companyUser, setCompanyUser] = useState ([]);   
    const [tasks, setTasks] = useState([]);
    const {params} = useRouteMatch();
  

    async function loadCompany(){
      await api.get(`/users/${idUser}`)
      .then(response => {
        setCompanyUser(response.data); 
      })
    }


    async function loadTasks(){
      await api.get(`/searchs/info/${params.id}`)
      .then(response => {
        setTasks(response.data)
       
      })
    } 

    async function deleteSearch(){
         await api.delete(`/searchs/${params.id}`)
          .then(response => 
          {
          alert('Buscar Pr Material Deletada') 
      } )
    }
  

    useEffect(() => {
      loadCompany();
      loadTasks();
      
    }, [])

    return (
    <S.Container>
      <HeaderComp/>
      <S.Company>
          <h1>{companyUser.map(company => (company.company))}</h1>
      </S.Company>
      <S.Title>
        <h2> Informações</h2>
      </S.Title>
      <S.InfoArea>
       
        {
          tasks.map(search => (
        <S.InfoBox>
            <p> <b>Informações da Busca</b> </p>
            <p> <b>Material:</b> {search.Material.name} </p>
            <p> <b>Quantidade:</b> {search.quantity}Kg </p>
            <p> <b>Estado:</b> {search.Type.name}</p>
            
            <button><Link to = "/homecomp"> VOLTAR </Link> </button>
            <button><Link to = "/homecomp" onClick={() => deleteSearch()}> EXCLUIR </Link> </button>
            
        </S.InfoBox>))
        }
      </S.InfoArea>
      <Footer/>
    </S.Container>
    )
  }
  export default InfoSearch;
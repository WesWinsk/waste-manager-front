import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';
import {Link} from 'react-router-dom';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchItem from '../../components/SearchItem';

import addSearch from '../../Assets/AddSearch.png'

function HomeComp() {
  const [tasks, setTasks] = useState([]);
  const [companyUser, setCompanyUser] = useState ([]);

  const idUser= localStorage.getItem('userId');


  async function loadTasks(){
    await api.get(`/searchs/${idUser}` )
    .then(response => {
      setTasks(response.data)
     
    })
  }

  async function loadCompany(){
    await api.get(`/users/${idUser}`)
    .then(response => {
      setCompanyUser(response.data); 
    })
  }

  async function deleteSearch(searchId){
    await api.delete(`searchs/${searchId}`)
    .then(response => {
      setTasks(response.data)
    
    })
  }


  useEffect(() => {
    loadTasks();
    loadCompany();
  }, [])


    return (
    <S.Container>
      <Header/>
      <S.Company>
        <h1>{companyUser.map(comp => (comp.company))}</h1>
      </S.Company>
      <S.Title>
        <h2> Minhas Buscas </h2>
      </S.Title>
      <S.GenArea>
        <S.SearchArea>
          {
          tasks.map(t => (
        <SearchItem material={t.Material.name} quantity={t.quantity} deleteSearch={t} />
         ))
          }
        </S.SearchArea>
          
        <S.AddSearch>
          <Link to = "/homecomp/taskcomp">
            <img src={addSearch} alt="Adicionar Busca"/>
          </Link>
          <h2>Adicionar </h2>
        </S.AddSearch>
      
      </S.GenArea>     
      <Footer/>
    </S.Container>
    
    )
  }
  
  export default HomeComp;
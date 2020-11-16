import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';
import {Link} from 'react-router-dom';

//NOSSOS COMPONENTES
import HeaderComp from '../../components/HeaderComp';
import Footer from '../../components/Footer';
import SearchItem from '../../components/SearchItem';

import addSearch from '../../Assets/AddSearch.png'

function HomeComp() {

  const [search, setSearch] = useState([]);
  const [companyUser, setCompanyUser] = useState ([]);
  const [notifyCount, setNotifyCount] = useState([]);
 
  const idUser= localStorage.getItem('userId');
 
 
  //carrega companhia do usuário
  async function loadCompany(){
    await api.get(`/users/${idUser}`)
    .then(response => {
      setCompanyUser(response.data); 
    })
  }
  
  //carrega todas as buscas e prepara o ambiente para cada uma dela
  async function loadSearchs(){
    await api.get(`/searchs/${idUser}` )
    .then(response => {
      setSearch(response.data);     
    })
  }


  async function deleteSearch(searchId){
    await api.delete(`searchs/${searchId}`)
    .then(response => {
      setSearch(response.data)
    })
  }


  useEffect(() => {
    loadCompany();
    loadSearchs();
    
    }, [])

    return (
    <S.Container>
      <HeaderComp notifyCount={notifyCount} />
      <S.Company>
        <h1>{companyUser.map(comp => (comp.company))}</h1>     
      </S.Company>
      <S.Title>
        <h2> Minhas Buscas </h2>
      </S.Title>
      <S.GenArea>
        <S.SearchArea>          
          {
            search.map(search => (             
             <SearchItem 
              key={search.id} 
              id={search.id}             
              material={search.Material.name} 
              quantity={search.quantity}    
              userId= {idUser}          
              />           
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
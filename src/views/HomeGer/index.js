import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';

import {Link} from 'react-router-dom'; 

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Collector from '../../components/Collector';

import addCol from '../../Assets/AddCollet.png';

function HomeGer() {

  //variáveis do usuário
  const [user, setUser] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [notifyCount, setNotifyCount] = useState([]);
  const [userId, setUserID] = useState (0);
  const [companyUser, setCompanyUser] = useState ([]);
  

  const idUser= localStorage.getItem('userId');


  //em teoria é pra carregar os coletores
  async function loadTasks(){
    await api.get(`/discards/${idUser}` )
//  await api.get(`/discards/${'endereço do Id via parametro'}`)
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


  //verificando as notificações 
   async function notifyVerify(){
      await api.get(`/notifications/${idUser}`)
      .then(response => {
        setNotifyCount(response.data.length); 
      })
    }


  useEffect(() => {
    // loadUserData();    
    loadTasks();
    notifyVerify();
    loadCompany();
  }, [])

  return (
  <S.Container>
    <Header notifyCount={notifyCount}/>
    <S.Company>
      <h1>{companyUser.map(comp => (comp.company))}</h1>
    </S.Company>
    <S.Title>
      <h2> Pontos de Descarte </h2>
    </S.Title>
    <S.GenArea>
      <S.CollectorArea>
        {
          tasks.map(t => (
          <Collector 
            key={t.id}
            id={t.id}
            material={t.Material.name} 
            status={t.Type.name} 
            qttotal={t.max_cap} 
            qtact={t.curr_quant}  />
          ))
        }
      </S.CollectorArea>     
        <S.AddSearch>
            <Link to = "/homeger/taskger">
              <img src={addCol} alt="Adicionar Busca"/>
            </Link>
          <h2>Adicionar </h2>
        </S.AddSearch>      
      </S.GenArea>   
    <Footer/>
  </S.Container>

  )
}

export default HomeGer;

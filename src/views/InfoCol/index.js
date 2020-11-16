import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';
import {Link, useRouteMatch} from 'react-router-dom';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Collector from '../../components/Collector';


function InfoCol() {

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
      await api.get(`/discards/info/${params.id}`)
      .then(response => {
        setTasks(response.data)
       
      })
    } 

    async function deleteDiscard(){
         await api.delete(`/discards/${params.id}`)
          .then(response => 
          {
          alert('Pondo de Descarte Deletado') 
      } )
    }
  

    useEffect(() => {
      loadCompany();
      loadTasks();
      
    }, [])

    return (
    <S.Container>
      <Header/>
      <S.Company>
          <h1>{companyUser.map(company => (company.company))}</h1>
      </S.Company>
      <S.Title>
        <h2> Informações</h2>
      </S.Title>
      <S.InfoArea>
       {
          tasks.map(t => (
          <Collector 
          material={t.Material.name} 
          status={t.Type.name} 
          qttotal={t.max_cap} 
          qtact={t.curr_quant}  
          description={t.description}/>
          ))
        }
        {
          tasks.map(t => (
        <S.InfoBox>
            <p> <b>Ponto de Descarte</b></p>
            <p> <b>Capacidade máxima:</b> {t.max_cap} Kg</p>
            <p> <b>Quantidade Atual:</b> {t.curr_quant} Kg </p>
            <p> <b>Material:</b> {t.Material.name} </p>
            <p> <b>Status:</b> {t.Type.name} </p>
            <p> <b>Descrição:</b> {t.description}</p>
            <button><Link to = "/homeger"> VOLTAR </Link> </button>
            <button><Link to = "/homeger" onClick={() => deleteDiscard()}> EXCLUIR </Link> </button>
            
        </S.InfoBox>))
        }
      </S.InfoArea>
      <Footer/>
    </S.Container>
    )
  }
  export default InfoCol;
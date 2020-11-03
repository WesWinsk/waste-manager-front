import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';
import {Link} from 'react-router-dom';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Collector from '../../components/Collector';


function InfoCol() {

    const [tasks, setTasks] = useState([]);
    //em teoria é pra carregar os coletores
    async function loadTasks(){
      await api.get(`/discards/info/5` )
      .then(response => {
        setTasks(response.data)
       
      })
    } 
    useEffect(() => {
      loadTasks();
    }, [])
    return (
    <S.Container>
      <Header/>
      <S.Company>
          <h1>Metalúrgica 01</h1>
      </S.Company>
      <S.Title>
        <h2> Informações</h2>
      </S.Title>
      <S.InfoArea>
       {
          tasks.map(t => (
          <Collector 
          material={t.Material.name} 
          status={t.Material.state} 
          qttotal={t.max_cap} 
          qtact={t.curr_quant}  
          description={t.description}/>
          ))
        }
        {
          tasks.map(t => (
        <S.InfoBox>
            <p> <b>Ponto de coleta 001</b></p>
            <p> <b>Capacidade máxima:</b> {t.max_cap} Kg</p>
            <p> <b>Quantidade Atual:</b> {t.curr_quant} Kg </p>
            <p> <b>Material:</b> {t.Material.name} </p>
            <p> <b>Status:</b> {t.Material.state} </p>
            <p> <b>Descrição:</b> {t.description}</p>
            <button><Link to = "/homecomp"> VOLTAR </Link> </button>
            
        </S.InfoBox>))
        }
      </S.InfoArea>
      <Footer/>
    </S.Container>
    )
  }
  export default InfoCol;
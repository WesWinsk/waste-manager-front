import React from 'react';
import * as S from './styles';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Collector from '../../components/Collector';

import addCol from '../../Assets/AddCollet.png';

function HomeGer() {
  return (
  <S.Container>
    <Header/>
    <S.Company>
        <h1>Metalúrgica 01</h1>
    </S.Company>
    <S.Title>
      <h2> Pontos de Coleta </h2>
    </S.Title>
    <S.GenArea>
      <S.CollectorArea>
        <Collector/>
        <Collector/>
        <Collector/>
        <Collector/>
      </S.CollectorArea>
      <S.AddSearch>
          <a href = "#" id = "addCol">
            <img src={addCol} alt="Adicionar Busca"/>
          </a>
          <h2>Adicionar </h2>
      </S.AddSearch>
    </S.GenArea>
    
    
      
    
    <Footer/>
  </S.Container>
  
  )
}

export default HomeGer;

import React from 'react';
import * as S from './styles';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchItem from '../../components/SearchItem';

import addSearch from '../../Assets/AddSearch.png'

function HomeComp() {
    return (
    <S.Container>
      <Header/>
      <S.Company>
        <h1>Metalúrgica 02</h1>
      </S.Company>
      <S.Title>
        <h2> Minhas Buscas </h2>
      </S.Title>
      <S.GenArea>
        <S.SearchArea>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
        </S.SearchArea>
          
        <S.AddSearch>
          <a href = "#" id = "addSearch">
            <img src={addSearch} alt="Adicionar Busca"/>
          </a>
          <h2>Adicionar </h2>
        </S.AddSearch>
      
      </S.GenArea>
  
      
        
      
      <Footer/>
    </S.Container>
    
    )
  }
  
  export default HomeComp;
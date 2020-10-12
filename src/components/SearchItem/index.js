import React from 'react';
import * as S from './styles'

import { Container } from './styles';

import search from '../../Assets/Search.png'
import info from '../../Assets/info.png'
import trash from '../../Assets/trash.png'

const SearchList = () => {
  return (
    <Container>
      <S.SimbolName>
        <img src={search} alt="Busca"/>
        <h2> Latão - 10kg </h2>
      </S.SimbolName>
      <S.Info>
        <a href = "#" id = "info">
         <img src={info} alt="Informações"/>
        </a>
      </S.Info>
      <S.Delete>
        <a href = "#" id = "delete">
          <img src={trash} alt="Informações"/>
        </a>
      </S.Delete>
    </Container>
  );
};

export default SearchList;

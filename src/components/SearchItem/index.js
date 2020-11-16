import React, { useState, useEffect } from 'react';
import * as S from './styles'
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container } from './styles';

import search from '../../Assets/Search.png'
import info from '../../Assets/info.png'
import trash from '../../Assets/trash.png'





const SearchList = ( {id, material, quantity, deleteFunction } ) => {

  const [messege, setMessege] = useState('');
  const [showmessege, setShowmessege] = useState(false); 
  
  const idUser= localStorage.getItem(`userId`);


  return (
    
    <>
      <Container>
        <S.SimbolName>
          <img src={search} alt="Busca"/>
          <h2> {material} - {quantity}kg </h2>
        </S.SimbolName>
        <S.Info>
          <Link to = {`/homecomp/searchinfo/${id}`}>
          <img src={info} alt="Informações"/>
          </Link>
        </S.Info>
        

      </Container>
      {showmessege && <p>{messege}</p>}
    
    </>
  );
};

export default SearchList;

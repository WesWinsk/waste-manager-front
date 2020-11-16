import React from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';

import info from '../../Assets/info.png';

function Collector( { id, material, status, qttotal, qtact, description} ) {
  return (
    <S.Container>
      
        <S.Tittle>
          
          Descarte
          <Link to = {`homeger/gerinfo/${id}`}>
            <img src={info} alt="Informações"/>
        </Link>
        
        </S.Tittle>       
        <S.ShortInfoMat><b>Material:</b> {material}</S.ShortInfoMat>
        <S.ShortInfoStats><b>Status:</b> {status}</S.ShortInfoStats>
        <S.nivelCap><h3>{qtact*100/qttotal}% da capacidade total atingida</h3></S.nivelCap>
        
        
    </S.Container>
  )
}

export default Collector;
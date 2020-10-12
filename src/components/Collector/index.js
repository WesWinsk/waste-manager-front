import React from 'react';
import * as S from './styles'

import info from '../../Assets/info.png';

function Collector() {
  return (
    <S.Container>
      
        <S.Tittle>Coletor 001<a href = "#" id = "info">
            <img src={info} alt="Informações"/>
        </a></S.Tittle>       
        <S.ShortInfoMat>Material: Cobre</S.ShortInfoMat>
        <S.ShortInfoStats>Status: Rebarba Pura</S.ShortInfoStats>
        <S.nivelCap>20%</S.nivelCap>
        
    </S.Container>
  )
}

export default Collector;
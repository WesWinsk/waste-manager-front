import React from 'react';
import * as S from './styles'

import info from '../../Assets/info.png';

function Collector( { material, status, qttotal, qtact, description} ) {
  return (
    <S.Container>
      
        <S.Tittle>Discard<a href = "#" id = "info">
            <img src={info} alt="Informações"/>
        </a></S.Tittle>       
        <S.ShortInfoMat><b>Material:</b> {material}</S.ShortInfoMat>
        <S.ShortInfoStats><b>Status:</b> {status}</S.ShortInfoStats>
        <S.nivelCap>{qtact*100/qttotal}%</S.nivelCap>
        
        
    </S.Container>
  )
}

export default Collector;
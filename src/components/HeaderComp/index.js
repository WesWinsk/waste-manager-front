import React, { useState, useEffect } from 'react';
import * as S from './styles'
import {Link} from 'react-router-dom';

import api from '../../services/api';

import logo from '../../Assets/Logo.png';
import bell from '../../Assets/bell.png';

function HeaderComp( {notifyCount} ) {


  return (
    <S.Container>
      <S.LeftSide>
        <img src = {logo} alt = "Logo " />
      </S.LeftSide>
      <S.RightSide>
        <Link to = "/homecomp">INÍCIO</Link>
        <span className="dividir"/>
        <a href = "/homecomp/usercompinfo">MINHA CONTA</a>
        <span className="dividir"/>
        <Link to = "/homecomp/matchlistclient">MINHA MATCHLIST</Link>
        <span className="dividir"/>
        <Link to = "/">SAIR</Link>

        
      </S.RightSide>
    </S.Container>
  )
}

export default HeaderComp;
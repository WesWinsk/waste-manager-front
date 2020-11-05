import React, { useState, useEffect } from 'react';
import * as S from './styles'
import {Link} from 'react-router-dom';

import api from '../../services/api';

import logo from '../../Assets/Logo.png';
import bell from '../../Assets/bell.png';

function Header( {notifyCount}) {


  return (
    <S.Container>
      <S.LeftSide>
        <img src = {logo} alt = "Logo " />
      </S.LeftSide>
      <S.RightSide>
        <a href = "./">INÍCIO</a>
        <span className="dividir"/>
        <a href = "#">MINHA CONTA</a>
        <span className="dividir"/>
        <Link to = "/">SAIR</Link>

        {
          notifyCount &&
        <>
        <span className="dividir"/>
        <Link to  = "/homeger/noteger" id = "notification">
          <img src={bell} alt="Notificação"/>
          <span>{notifyCount}</span>
        </Link>
        </>    
      }
      </S.RightSide>
    </S.Container>
  )
}

export default Header;
import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';


import api from '../../services/api';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';



function Login({history}) {


  const [user, setUser] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login(){
    await api.post('/userslogin' , {
      email, 
      password_hash:password
    })
      .then( response => {
        setUser(response.data);
        localStorage.setItem('userId', response.data.id);
        if(response.data.type==='cliente')
          history.push('homecomp');
        else    
          history.push('homeger');
      } )
  }
  

  return (
  <S.Container>
    
    
    <S.Title>
      <h2> Início </h2>
    </S.Title>
    <S.LogArea>
        <S.LogBox>
            <h2>Acessar Conta</h2>
            <span>Email  </span>
            <input type="text" placeholder="Digite seu E-mail" 
            onChange={e=>setEmail(e.target.value)} value={email}></input>
            <span>Senha  </span>
            <input type="password" placeholder="Digite sua senha" 
            onChange={e=>setPassword(e.target.value)} value={password}></input>
            <button onClick = {login} > Entrar </button>
            <button> <Link to = "/taskuser">Criar Conta</Link></button>


        </S.LogBox>
    </S.LogArea>   
    <Footer/>
  </S.Container>
  
  )
}
export default Login;
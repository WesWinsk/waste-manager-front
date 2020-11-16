import React, { useState } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Select from "react-dropdown-select";


function TaskUser() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const types = [ {value: '1', label: 'fornecedor'}, {value: '2', label: 'cliente'}   ]



  async function Save(){
    await api.post('/users', {
      name,
      password,
      password_hash: passwordHash,
      email,
      company,
      type: selectedType
    }).then(response => 
      {
      alert('Novo Usuário Cadastrado')
      console.log(response.data);
      }
    )
  }

    return (
    <S.Container>
      
      <S.Title>
        <h2> Novo Cadastro </h2>
      </S.Title>
      <S.InputArea>
        <S.Input>
            <span>Nome{name}</span>
            <input type='text' onChange={e=>setName(e.target.value)} value={name}></input>
            <span>E-mail</span>
            <input type='text' onChange={e=>setEmail(e.target.value)} value={email}></input>
            <span>Organização</span>
            <input type='text' onChange={e=>setCompany(e.target.value)} value={company}></input>
            <span>Senha</span>
            <input type='password' onChange={e=>setPassword(e.target.value)} value={password}></input>
            <span>Confirmar Senha</span>
            <input type='passord' onChange={e=>setPasswordHash(e.target.value)} value={passwordHash}></input>
            <span>Tipo de Usuário</span>
          <Select 
            options={types} placeholder={'Selecione o tipo de usuário'}
            onChange={ (values) => {
            setSelectedType(values[0].label) 
              }
            } 
          />
               
        </S.Input>
      
      </S.InputArea>
      <S.ButtomArea>
        <button><Link to = "/" >Cancelar</Link></button>
        <button><Link to = "/">Salvar</Link></button>
      </S.ButtomArea>
      
      <Footer/>
    </S.Container>
    
    )
  }
  
  export default TaskUser ;
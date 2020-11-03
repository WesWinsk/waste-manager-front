import React from 'react';
import ReactDOM from 'react-dom';


//Telas de Login
import Login from './views/Login';
import TaskUser from './views/TaskUser';


//Telas Iniciais
import HomeGer from './views/HomeGer';
import HomeComp from './views/HomeComp';
//Telas de Cadastros
import TaskGer from './views/TaskGer';
import TaskComp from './views/TaskComp';
//Telas de Notificações
import NoteGer from './views/NoteGer';
import NoteComp from './views/NoteComp';
//Telas de Informações
import InfoCol from './views/InfoCol';


import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    < Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);



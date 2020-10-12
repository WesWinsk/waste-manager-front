import React from 'react';
import ReactDOM from 'react-dom';
import HomeGer from './views/HomeGer';
import HomeComp from './views/HomeComp';
import TaskGer from './views/TaskGer';
import TaskComp from './views/TaskComp';


ReactDOM.render(
  <React.StrictMode>
    <TaskComp />
  </React.StrictMode>,
  document.getElementById('root')
);



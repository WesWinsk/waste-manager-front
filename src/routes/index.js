import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from '../views/Login';
import TaskUser from '../views/TaskUser';

import HomeComp from '../views/HomeComp';
import TaskComp from '../views/TaskComp';
import NoteComp from '../views/NoteComp';
import InfoSearch from '../views/InfoSearch';

import HomeGer from '../views/HomeGer';
import TaskGer from '../views/TaskGer';
import NoteGer from '../views/NoteGer';
import InfoCol from '../views/InfoCol';
import MatchlistViewClient from '../views/MatchlistViewClient';
import MatchlistViewProvider from '../views/MatchlistViewProvider';
import InfoUserProvider from '../views/InfoUserProvider';
import InfoUserClient from '../views/InfoUserClient';


//vai ser editado: vou precisar de mais um filtro de login
export default function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/taskuser" exact component={TaskUser}/> 
                <Route path="/homeger/" exact component={HomeGer}/>
                <Route path="/homeger/usergerinfo" exact component={InfoUserProvider}/>
                <Route path="/homeger/taskger" exact component={TaskGer}/>       
                <Route path="/homeger/noteger" exact component={NoteGer}/>   
                <Route path="/homeger/gerinfo/:id" exact component={InfoCol}/> 
                <Route path="/homeger/matchlistprovider" exact component={MatchlistViewProvider}/> 
                <Route path="/homecomp" exact component={HomeComp}/>   
                <Route path="/homecomp/taskcomp" exact component={TaskComp}/>   
                <Route path="/homecomp/notecomp" exact component={NoteComp}/>
                <Route path="/homecomp/matchlistclient" exact component={MatchlistViewClient}/>  
                <Route path="/homecomp/searchinfo/:id" exact component={InfoSearch}/>
                <Route path="/homecomp/usercompinfo" exact component={InfoUserClient}/>

            </Switch>     
        </BrowserRouter>
    )
}
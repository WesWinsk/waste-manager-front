import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import * as S from './styles';
import {Link} from 'react-router-dom'; 


import Header from '../../components/Header';
import Footer from '../../components/Footer';


function MatchlistViewClient() {

    const [companyUser, setCompanyUser] = useState ([]);
    const [matches, setMatches] = useState([]);

    
    const idUser= localStorage.getItem('userId');

    async function loadCompany(){
        const response = await api.get(`/users/${idUser}`);
        setCompanyUser(response.data); 
        
    }
        
    async function loadMatchs(){
        const response = await api.get(`/userprovider/notification/${idUser}`);
        setMatches(response.data);
    }  

    async function setProviderAccepted(not_id){
        const response = await api.put (`/notification/provider/${not_id}`);
        loadMatchs();
    }
    
    
    useEffect(() => {
          loadCompany();
          loadMatchs();

    }, [])
    
    return(

        <S.Container>
            <Header notiryCount={0}/>

            <S.Company>
                <h1>{companyUser.map(comp => (comp.company))}</h1>
            </S.Company>

            <S.Title>
                <h2> Minha Lista de Matchs </h2>
            </S.Title>

            <S.MatchArea>
                    {matches.map(match => (
                        <S.MatchBox>
                            <S.SearchArea> 
                                <h2> Armazenado </h2>
                                <h3> Material: {match.Discard.Material.name} <br/>
                                 Quantidade: {match.Discard.curr_quant}Kg/{match.Discard.max_cap}Kg <br/>
                                 Estado: {match.Discard.Type.name} </h3>
                            </S.SearchArea>
                            <S.ProviderArea>
                                <h2> Buscas ao material armazenado </h2>
                                <h3>Empresa: {match.Search.User.company}<br/>
                                Quantidade: {match.Search.quantity}Kg<br/>
                                Tipo: {match.Search.Type.name} </h3>                               
                            </S.ProviderArea>
                            <S.DesicionArea>

                                {!match.provider_accepted &&
                                     <>
                                        <button> <Link to="/homeger/matchlistprovider" 
                                        onClick={() => setProviderAccepted(match.id)}>
                                        Notificar Disponibilidade </Link> 
                                        </button>
                                    </>
                                }
                                <>                          
                                { (!match.accepted && !match.provider_accepted) &&
                                <S.StatusBox> 
                                    Não Solicitado 
                                </S.StatusBox>
                                }
                                </>  
                                { (match.accepted && !match.provider_accepted) &&
                                <>
                                <S.StatusBox01> 
                                    Solicitado para venda
                                </S.StatusBox01>
                                </>
                                }
                                { (match.accepted && match.provider_accepted) &&
                                <>
                                <S.StatusBox02> 
                                    Aceito
                                </S.StatusBox02>
                                </>
                                }
                                { (match.provider_accepted && !match.accepted) &&
                                <>
                                <S.StatusBox03> 
                                    Oferecido 
                                </S.StatusBox03>
                                </>
                                }
                            </S.DesicionArea>
                        
                        </S.MatchBox>)
                    )}
                    <button><Link to = "/homeger"> VOLTAR </Link> </button>  

            </S.MatchArea>
            <Footer/>
        </S.Container>        
    )
}
export default MatchlistViewClient;
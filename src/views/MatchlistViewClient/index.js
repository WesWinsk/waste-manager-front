import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import * as S from './styles';
import {Link} from 'react-router-dom'; 


import HeaderComp from '../../components/HeaderComp';
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
        const response = await api.get(`/userclient/notification/${idUser}`);
        setMatches(response.data);
    }  

    async function setClientAccepted(not_id){
        const response = await api.put (`/notification/client/${not_id}`);
        loadMatchs();
    }
    
    
    useEffect(() => {
          loadCompany();
          loadMatchs();

    }, [])

   
    
    return(

        <S.Container>
            <HeaderComp notiryCount={0}/>

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
                                <h2> Busca Base </h2>
                                <h3> Material: {match.Discard.Material.name} <br/>
                                 Quantidade: {match.Search.quantity}Kg <br/>
                                 Estado: {match.Discard.Type.name}</h3>
                            </S.SearchArea>
                            <S.ProviderArea>
                                <h2> Detalhamento do Resultado da Busca </h2>
                                <h3>Empresa: {match.Discard.User.company}<br/>
                                Quantidade: {match.Discard.curr_quant}Kg<br/>
                                Preço: R$ {match.Discard.price}<br/>
                                Descrição: {match.Discard.description}</h3>                               
                            </S.ProviderArea>
                            <S.DesicionArea>
                            {!match.accepted &&
                                <>
                                    <button> <Link to="/homecomp/matchlistclient" 
                                        onClick={() => setClientAccepted(match.id)}>
                                        Solicitar Material </Link> 
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
                                    Solicitado para compra
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
                    <button><Link to = "/homecomp"> VOLTAR </Link> </button>   
            </S.MatchArea>
            <Footer/>
        </S.Container>        
    )
}
export default MatchlistViewClient;
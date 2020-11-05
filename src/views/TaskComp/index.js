import React,{ useState, useEffect}  from 'react';
import * as S from './styles';
import api from '../../services/api';
import {Link} from 'react-router-dom';


//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function TaskComp(userId) {

  const [user, setUsers] = useState([userId]);
  const [materials, setMaterials] = useState([]);
  const [material, setMaterial] = useState([]);
  const [quantity, setQuantity] = useState ([]);
  const [types, setTypes] = useState([]);
  const [type, setType] =useState ([]);
  const [find, setFind] = useState ([false]);

  const [companyUser, setCompanyUser] = useState ([]);

  const idUser= localStorage.getItem('userId');

  async function loadMaterials(){
    await api.get(`/materials`)
      .then(response => {
       setMaterials(response.data); 
      })
  }

  async function loadCompany(){
    await api.get(`/users/${idUser}`)
    .then(response => {
      setCompanyUser(response.data); 
    })
  }

  async function Save(){
    await api.post('/discards', {
      user,
      material,
      quantity,
      type,
      find,
    }).then(
      alert('Nova Busca Cadastrado')
    )
  }


  async function loadTypes(){
    await api.get(`/types`)
      .then(response => {
        setTypes(response.data); 
      })
  }

  useEffect(() => {
    // loadUserData();    
       loadMaterials();
       loadTypes();
       loadCompany();
       
     }, [])

  return (
  <S.Container>
    <Header/>
    <S.Company>
      <h1>{companyUser.map(comp => (comp.company))}</h1>
    </S.Company>
    <S.Title>
     <h2> Nova Busca de Material</h2>
   </S.Title>
  <S.InputArea>
    <S.Input>      
      <span>Material</span>
      <select >{materials.map(t => (
        <option value = {t.id} > {t.name}</option>
      ))}
      </select>  
      <span>Quantidade</span>
      <input type="number" placeholder="Quantidade em Kg" 
        onChange={e=>setQuantity(e.target.value)} value={quantity}></input>

      <span>Estado do Material</span>  
      <select >{types.map(t => (
        <option value = {t.id} > {t.name}</option>
      ))}
      </select>  
    </S.Input>

  </S.InputArea>
  <S.ButtomArea>
    <button><Link to ="/homecomp">Cancelar</Link></button>
    <button><Link to ="/homecomp" onClick={Save}>Salvar</Link></button>
  </S.ButtomArea>    
  <Footer/>
  </S.Container>  
      )
    } 
    
    export default TaskComp ;
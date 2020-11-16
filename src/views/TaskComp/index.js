import React,{ useState, useEffect}  from 'react';

import * as S from './styles';

import api from '../../services/api';
import {Link} from 'react-router-dom';


//NOSSOS COMPONENTES
import HeaderComp from '../../components/HeaderComp';
import Footer from '../../components/Footer';
import Select from "react-dropdown-select";


function TaskComp(userId) {


   //opções de materiais


  const [user, setUsers] = useState([userId]);


  const [materials, setMaterials] = useState([]);
  const [materialId, setMaterialId] = useState(0);
  const [material, setMaterial] = useState("");

  const [quantity, setQuantity] = useState (0);

  const [selectedMaterial, setSelectedMaterial] = useState(0);
  const [selectedType, setSelectedType] = useState(0);


  const [types, setTypes] = useState([]);
  const [typeId, setTypeId] = useState(0);
  const [type, setType] =useState ("");
  
  
  const [find, setFind] = useState (false);

  const [companyUser, setCompanyUser] = useState ([]);

  const idUser= localStorage.getItem('userId');


  async function loadMaterials(){
    await api.get(`/materialslist`)
      .then(response => {
       setMaterials(response.data); 
      })
  }

  async function loadTypes(){
    await api.get(`/typeslist`)
      .then(response => {
        setTypes(response.data); 
      })
  }
  async function loadCompany(){
    await api.get(`/users/${idUser}`)
    .then(response => {
      setCompanyUser(response.data); 
    })
  }

  async function Save(){
    await api.post('/searchs', {
      user_id: idUser,
      material_id: selectedMaterial,
      quantity,
      was_find: false,
      Type_id: selectedType,
    }).then(response => 
      {
      alert('Nova Busca Cadastrada')
    }
    )
  }


  

  useEffect(() => {
    // loadUserData();    
       loadMaterials();
       loadTypes();
       loadCompany();
       
     }, [])

  return (
  <S.Container>
    <HeaderComp/>
    <S.Company>
      <h1>{companyUser.map(comp => (comp.company))}</h1>
    </S.Company>
    <S.Title>
     <h2> Nova Busca de Material</h2>
   </S.Title>
  <S.InputArea>
    <S.Input>      
      <span>Material{}</span>
      <Select 
          options={materials} 
          placeholder={'Material a ser buscado'}
          onChange={(values) => {setSelectedMaterial(values[0].value); 
          console.log(values[0].value)
          console.log(selectedMaterial)
        }}
      />
      
      
      <span>Quantidade</span>
      <input type="number" placeholder="Quantidade em Kg" 
        onChange={e=>setQuantity(e.target.value)} value={quantity}></input>

      <span>Estado do Material</span>  
     
     <Select options={types} placeholder={'Estado do material a ser buscado'}
          onChange={ (values) => {
          setSelectedType(values[0].value) 
          console.log(selectedType);
          }
        } />
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
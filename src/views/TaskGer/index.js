import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as S from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom';
//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Select from "react-dropdown-select";

function TaskGer(userId) {

//carrega todos os dados na combobox
const [user, setUser] = useState([userId]);
const [materials, setMaterials] = useState([]);
const [types, setTypes] = useState([]);

//altera os dados separadamente
const [materialId, setMaterialId] = useState([]);
const [quantity, setQuantity] = useState('0');
const [quantityActual, setQuantityActual] = useState('0');
const [typeId, setTypeId] = useState([]);
const [description, setDescription] = useState('');
const [companyUser, setCompanyUser] = useState ([]);
const [price, setPrice] = useState('0');
const [selectedOptionTruck,setSelectedOptionTruck] = useState({});

const [selectedMaterial, setSelectedMaterial] = useState(0);
const [selectedType, setSelectedType] = useState(0);

const [selectedTypeTruck, setSelectedTypeTruck] = useState([]);


const idUser= localStorage.getItem('userId');



function loadMaterials() {
 api.get(`/materialslist`)
  .then(response => {
    setMaterials(response.data);
    
  })
}

async function loadTypes() {
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
  
function handleSelectMaterial(id){
    setMaterialId(id)
}

function handleSelectType(id){
  setTypeId(id)
}

//materials 
function handleSelectedTruck(materialsList){        
  console.log(materialsList);
  //setSelectedOptionTruck({id: materialsList[0].value});
  //console.log(materialsList[0].value);
  console.log(selectedOptionTruck);
};

function handleSelectedTypesTruck(typesList){
  setSelectedTypeTruck(typesList);
  console.log(selectedTypeTruck);
}


async function Save(){
  await api.post('/discards', {
    user_id: idUser,
    material_id: selectedMaterial,
    max_cap: quantity,
    curr_quant: quantityActual,
    description,
    Type_id: selectedType,
    price
  }).then(response => 
    {
    alert('Pondo de Descarte Cadastrado')
    console.log(response.data);
    }
  )
}

useEffect(() => {    
  loadMaterials();
  loadTypes();
  loadCompany();
  
}, [])

return (
  <S.Container>
    <Header />
    <S.Company>
      <h1>{companyUser.map(comp => (comp.company))}</h1>
    </S.Company>
    <S.Title>
      <h2> Novo Ponto de Descarte </h2>
    </S.Title>
    <S.InputArea>
      <S.Input>
        <span>Material </span>

        <Select 
          options={materials} 
          onChange={(values) => {setSelectedMaterial(values[0].value); 
          console.log(values[0].value)
          console.log(selectedMaterial)
        }}
        />

        <span>Capacidade Total</span>
        <input type="number" placeholder="Quantidade em Kg" 
        onChange={e=>setQuantity(e.target.value)} value={quantity}></input>

        <span>Quantidade Atual</span>
        <input type="number" placeholder="Quantidade em Kg" 
        onChange={e=>setQuantityActual(e.target.value)} value={quantityActual}></input>
        
        <span>Preço de Negociação(BRL)</span>
        <input type="decimal" placeholder="Preço de negociação" 
        onChange={e=>setPrice(e.target.value)} value={price}></input>

        <span>Estado do Material</span>
        
        <Select options={types} 
          onChange={ (values) => {
          setSelectedType(values[0].value)
          }
        } />
      </S.Input>

      <S.TextArea>
        <span>Descrição</span>
        <textarea rows={5} placeholder=" Atual estado do material descartado" 
        onChange={e=>setDescription(e.target.value)} value={description}/>
      </S.TextArea>
    </S.InputArea>
    <S.ButtomArea>
      <button><Link to="/homeger">Cancelar</Link></button>
      <button><Link to="/homeger" onClick={() => Save()}>Salvar</Link></button>
    </S.ButtomArea>
    <Footer />
  </S.Container>

)
}

export default TaskGer;
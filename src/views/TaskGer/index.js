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


const [selectedOptionTruck,setSelectedOptionTruck] = useState('');

const idUser= localStorage.getItem('userId');

const formatedMaterials = [];

function loadMaterials() {
 api.get(`/materials`)
  .then(response => {
    setMaterials(response.data);
    materials.map( material => formatedMaterials.push({ value: material.id , label: material.name }) );
    setMaterialId(formatedMaterials);
    
  })
}


async function loadTypes() {
  await api.get(`/types`)
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
    setMaterialId(id);
    
}

//
const optionsTruck = [
  { value: 'IXS9299', label: 'IXS9299' },
  { value: 'IYL1413', label: 'IYL1413' },
  { value: 'ABC1A33', label: 'ABC1A33' },
];

function handleSelectedTruck(selectedOptionTruck){        
  setSelectedOptionTruck({ selectedOptionTruck });
 
};



async function Save(){
  await api.post('/discards', {
    user_id: idUser,
    material_id: materialId,
    max_cap: quantity,
    curr_quant: quantityActual,
    description,
    type_id: typeId
  }).then(
    alert('Pondo de Descarte Cadastrado')
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

        <Select options={materialId} value={selectedOptionTruck.label} 
        onChange={handleSelectedTruck} />

        <span>Quantidade Total</span>
        <input type="number" placeholder="Quantidade em Kg" 
        onChange={e=>setQuantity(e.target.value)} value={quantity}></input>

        <span>Quantidade Atual</span>
        <input type="number" placeholder="Quantidade em Kg" 
        onChange={e=>setQuantityActual(e.target.value)} value={quantityActual}></input>
        
        <span>Estado do Material</span>
        
        <select >{types.map(typ => (
          <option key={typ.id} value={typ.id} > {typ.name}</option>
        ))}
        </select>
      </S.Input>

      <S.TextArea>
        <span>Descrição</span>
        <textarea rows={5} placeholder=" Atual estado do material descartado" 
        onChange={e=>setDescription(e.target.value)} value={description}/>
      </S.TextArea>
    </S.InputArea>
    <S.ButtomArea>
      <button><Link to="/homeger">Cancelar</Link></button>
      <button><Link to="/homeger" onClick={() => console.log(materialId)}>Salvar</Link></button>
    </S.ButtomArea>
    <Footer />
  </S.Container>

)
}

export default TaskGer;
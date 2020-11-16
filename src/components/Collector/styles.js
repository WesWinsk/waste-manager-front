import styled from 'styled-components'


// TEM QUE REVISAR TUDO, FUI ATÉ AQUI

export const Container = styled.div `
    width: 150px;
    height: 250px;
    background: #065E12;
    border-radius: 10px;
    
    display: flex; 
    flex-direction: column;
    margin:10px;
   
`

export const Tittle = styled.div `
    
    
    color: #FFF;
    font-weight: bold;
    font-size: 20px;
    background: #065E12;
    padding: 5px 5px;
    padding-bottom: 20px;
    align-self: center;
    border-radius: 10px;
    a{
        

        
        img {
            width: 20px;
            height: 20px;
            padding-left: 10px;        
        }

        &:hover{
            opacity: 0.5;
        }

        
    }
`

export const ShortInfoMat = styled.div `
    
    display: flex; 
    align-items: left;
    justify-content: left;
    padding: 0px 10px;
    font-size: 15px;
    
`

export const ShortInfoStats = styled.div `
    
    display: flex; 
    align-items: left;
    justify-content: left;
    padding: 0px 10px;
    font-size: 15px;
    padding-bottom: 10px; 
   
`

export const nivelCap = styled.div `
    
    
    width: 130px;
    height: 120px;
    background: #FFF;
    padding-top: 10px;
    display:flex;
    margin-bottom: 30px;
    margin-left: 10px;
    border-radius: 10px;
   
    h3{
        
        color: #171253;
        margin: 2px;
        font-size: 17px;
    }
`

export const nivelCap2 = styled.div `
    
    width: 120px;
    height: 50px;
    background: #FFF5;
    align-self: center ;
    padding-top: 10px;
    position: fixed;
   
`
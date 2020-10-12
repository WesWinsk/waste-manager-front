import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Company = styled.div`
    
    margin: 20px;
    margin-bottom: -50px;
`

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #171253; 
    display: flex;
    justify-content: center;
   

    h2{
        color: #171253;
        position: relative;
        top: 30px;
        background: #FFF;
        padding: 0 20px;
        
    }

`

export const InputArea = styled.div`

    
    align-content: center;
    padding:20px 150px;
    
`


export const Input = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column; 
    
    span{
        color: #171253;
        font-size: 20px;
        font-weight: bold;
        padding: 5px;
    }
`
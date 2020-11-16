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
    margin-bottom: 30px;
    
    span{
        color: #171253;
        font-size: 20px;
        font-weight: bold;
        padding: 5px;
    }

    select {
        height: 25px;
        color: #171253;
        font-weight: bold;
    
    }
`

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    margin-top: 20px;
    span{
        color: #171253;
        font-size: 20px;
        font-weight: bold;
        padding: 5px;
    }

    
`

export const OptionArea = styled.div`
    h3{
        color: #171253;
        font-size: 21px;
        font-weight:bold;
        margin-left:5px;
    }
` 

export const Options = styled.div`
    margin-top: 0px;
    padding: 0px 5px;
    span{
        color: #171253;
        font-size: 17px;
        padding: 5px;
    }
`


export const ButtomArea= styled.div`
    width:100%;
    position: relative;
    display: flex;
    justify-content: space-around;
    
    a {
        text-decoration: none;
        color: #FFF;
    }

    button{
        
        width:  140px;
        height: 30px;
        background: #065E12;
        color: #FFF;
        font-size: 17px;
        font-weight: bold;
        border-radius: 10px;
        margin-bottom: 120px;
        &:hover{
            color: #171253;
        }
            
    }
`
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`



export const LogArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const LogBox = styled.div`
    margin-top: 50px;
    width: 300px;
    height:400px;
    border:10px;
    box-shadow: 0px 0px 11px 3px rgba(23,23,138,0.82);
    border-radius: 10px;
    border-color: #171253;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 15px;

    a {
        text-decoration: none;
        color: black;
    }
    

    h2{
        margin-top: -20px;
        margin-left: 30px;    
        color: #171253;
    }

    span {
        margin-left: 30px;
        font-weight: bold;
        color: #171253;
        
    }

    input{
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 15px;
        margin-bottom: 15px;

    }

    button{
        margin-left: 20px;
        margin-right: 20px;
        margin-top:10px;
        border-radius: 5px;
        border-color: #171253;

    }

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
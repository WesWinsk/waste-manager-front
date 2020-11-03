import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
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

export const NotificArea = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 60px; 
    align-items: center;

`

export const NotifierBox = styled.div`

    width: 80%;
    height: 140px;
    background: #FFF;
    box-shadow: 0px 0px 11px 3px rgba(23,23,138,0.82);
    border-radius: 10px;
    margin:15px;
    display: flex;
    justify-content: space-around;

    h2 {
        width: 70%;
        margin-left: 20px;
        font-size: 22px;
    }

    button {
        width: 260px;
        height: 40px;
        margin-top: 50px;
        margin-right: 10px;
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
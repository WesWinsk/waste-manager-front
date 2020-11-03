import styled from 'styled-components';


export const Container = styled.div`

    width: 480px;
    height: 70px;
    background: #FFF;
    box-shadow: 0px 0px 11px 3px rgba(23,23,138,0.82);
    border-radius: 10px;
    display: flex; 
    margin:10px;

`

export const SimbolName= styled.div`

    display: flex;

    img{
        align-self: center;
        margin-left: 10px;
        margin-right: 10px;
        width: 50px;
        height: 50px;
    }
    h2 {
        color: #171253;
    }

`

export const Info = styled.div`

    display: flex;
    align-self: center;

    img{
        
        margin-left: 85px;
        margin-right: 5px;
        width: 40px;
        height: 40px;
    }
    &:hover{
            opacity: 0.5;
        }
`

export const Delete = styled.button`

    display: flex;
    align-self: center;
    background-color: #FFF;
    border: none;

    img{
        
        margin-left: 5px;
        margin-right: 10px;
        width: 38px;
        height: 38px;
    }
    &:hover{
            opacity: 0.5;
     }
`

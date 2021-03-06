import styled from 'styled-components'

export const Container = styled.div `
    width: 100%;
    height: 70px;
    background: #065E12;
    border-bottom: 5px solid #171253;
    display: flex; 
    
`
export const LeftSide = styled.div `
    width: 30%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;


    img {
        width: 230px;
        height: 40px;
    }
    

`

export const RightSide = styled.div `
    width: 70%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    a {
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover{
            color: #171253;
        }
    
    }

    #notification{

        img{
            width: 25px;
            height: 30px;
        }

        span{
            background: #FFF;
            color: #171253;
            padding: 3px 7px;
            border-radius: 50%;
            position: relative;
            top: -20px;
            right: 10px;
        }

        &:hover{
            opacity: 0.5;
        }
    }

    .dividir::after{
        content: "|";
        margin: 0  10px; 
        color: #FFF;
    }

`
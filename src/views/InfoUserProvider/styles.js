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

export const InfoArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
`

export const InfoBox = styled.div`
    width: 60%;
    p{
        font-size: 18px;
        color: #171253
    }
    a{
        text-decoration:none;
        color:#FFF;
        &:hover{
            color: #171253;
        }
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
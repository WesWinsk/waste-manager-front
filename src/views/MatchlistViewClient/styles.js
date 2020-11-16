import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;


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
        margin-bottom: 60px;
        &:hover{
            color: #171253;
        }
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

export const MatchArea = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 60px; 
    align-items: center;

`

export const MatchBox = styled.div`

    width: 80%;
    height: 180px;
    background: #FFF;
    box-shadow: 0px 0px 11px 3px rgba(23,23,138,0.82);
    border-radius: 10px;
    margin:15px;
    display: flex;
    align-items: center;
    justify-content: center; 

    

    
`

export const SearchArea = styled.div`
    width:25%;
    height:100%;
    flex-direction: column;
    justify-content:space-around;
    margin: 5px;
    margin-bottom: 5px;
    

    h2{
        color: #065E12;
    }

    h3{
        color: #171253;
    }
`

export const ProviderArea = styled.div`
    width:55%;
    height:100%;
    flex-direction: column;
    justify-content:space-around;
    margin: 5px;
    margin-bottom: 5px;
    

    h2{
        color: #065E12;
    }

    h3{
        color: #171253;
        
    }
`

export const DesicionArea = styled.div`
    width:20%;
    height:100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;

    button {
        margin-top:40px;
        width: 90%;
        height: 35%;
        
        &:hover{
            color: #171253;
        }
    }
`

export const StatusBox = styled.div`
    font-style: bold;
    border-color: black;
    border-radius: 5px;
    margin-top: -40px;
    width: 110px;
    height:30px;
    background-color: #A52A2A;
    display: flex;
    justify-content:center;
    align-items: center;
`

export const StatusBox01 = styled.div`
    font-style: bold;
    border-color: black;
    border-radius: 5px;
    margin-top: -40px;
    width: 110px;
    height:50px;
    background-color: #FFFF00;
    display: flex;
    align-items: center;
`

export const StatusBox02 = styled.div`
    font-style: bold;
    border-color: black;
    border-radius: 5px;
    margin-top: -40px;
    width: 110px;
    height:30px;
    background-color: #7FFF00;
    display: flex;
    justify-content:center;
    align-items: center;
`

export const StatusBox03 = styled.div`
    font-style: bold;
    border-color: black;
    border-radius: 5px;
    margin-top: -40px;
    width: 110px;
    height:30px;
    background-color: #B0E0E6;
    display: flex;
    justify-content:center;
    align-items: center;
`


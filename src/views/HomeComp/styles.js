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

export const GenArea = styled.div`
    width: 100%;
    display: flex;
`

export const SearchArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;


`

export const AddSearch = styled.div`


    width: 100%;
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    

    img{
        
        margin-left: 150px;
        width: 120px ;
        height: 120px ;
        &:hover{
            opacity: 0.5;
        }
    }

    h2 {
        margin-left: 150px;
        width: 150px;
        height: 75px;
    }
`

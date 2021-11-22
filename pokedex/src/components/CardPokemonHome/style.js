import styled from "styled-components";


export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
`
export const ContainerPokemon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 30px;
    border: 1px solid #7c7c7c;
    background-color: #a7a7a7;
    padding: 5px;
    img {
        height: 170px;
    }
    h3 {
        padding-top: 3px;
    }
`
export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    button {
        margin: 5px;
        padding: 5px;
    }
`
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
    width: 220px;
    height: 220px;
    border-radius: 30px;
    background-color: #cacaca;
    box-shadow: 2px 1px #888888;
    padding: 5px;
    img {
        height: 140px;
    }
`
export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    button {
        margin: 3px;
        padding: 7px;
    }
`
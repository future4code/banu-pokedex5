import styled from "styled-components";

export const ContainerCardPokedex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #262c4c;
    background-color: #333d61;
    border-radius: 20px;
    margin: 5px;
    padding: 5px;
    width: 400px;
    img {
        width: 100px;
        border-radius: 50%;
    }
`
export const ContainerDate = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #9aadb4;
    border-top-left-radius:     20px;
    border-bottom-left-radius:  20px;
    padding: 5px 10px 5px 10px;
    button {
        padding: 3px;
    }
`
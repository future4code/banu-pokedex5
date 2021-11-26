import styled from "styled-components";

export const DetailNumber = styled.div`
    border-radius: 1rem;
    padding: 0.2rem 0.4rem;
    background-color: rgba(255,255,255,0.3);

`
export const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    h3 {
        margin-bottom: 0.2rem;
    }

    button {
        color: rgb(22, 22, 22);
        padding: .5rem;
        margin-top: 1rem;
        border: none;
        border-radius: 0.2rem;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.185);
    }
`
export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
        margin: 3px;
        padding: 3px;
    }
`
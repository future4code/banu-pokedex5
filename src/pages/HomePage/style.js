import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #06214c;
    width: 100%;
    h1 {
        color: #f7ba14;
        margin: 5px;
    }
    button {
        color: #f7ba14;
        background-color: #267cc7;
        border-radius: 10px;
        outline:none;
        margin: 5px;
        padding: 5px;
    }
`

export const AllContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
export const LoadMore = styled.button`
    background: #f5f5f5 linear-gradient(#f5f5f5,#f1f1f1) repeat-x;
    border-radius: 2px;
    border: 1px solid #c6c6c6;
    color: #444;
    padding: 0.5rem 1.5rem;
    min-width: 50%;
    margin-top: 1rem;
    margin-bottom: 10px;
`

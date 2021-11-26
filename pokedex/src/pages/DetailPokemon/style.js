import styled from "styled-components";

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
export const Main = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
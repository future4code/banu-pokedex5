import React from 'react'
import {DetailNumber, DetailWrapper, ContainerButton} from './style'
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

export const CardPokeHome = ({id, image, name, type, _callback }) => {
    const style = type + " thumb-container";
    const [pokedex, setPokedex] = useState([])
    const navigate = useNavigate();

    const onClickAdd = () => {
        localStorage.setPokedex("pokedex", JSON.stringify())
    }
    const onClickDetails = () => {
        navigate("/detailPokemon");
    }

    return (
        <div className={style}>
            <DetailNumber><small>#0{id}</small></DetailNumber>
            <img src={image} alt={name} />
            <DetailWrapper>
                <h3>{name}</h3>
                <small>Tipo: {type}</small>
            </DetailWrapper>
            <ContainerButton>
                <button onClick={onClickAdd}>Adicionar</button>
                <button onClick={onClickDetails}>Ver Detalhes</button>
            </ContainerButton>
        </div>
    )
}
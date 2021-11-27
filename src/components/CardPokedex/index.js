import {Pikachu} from '../../source'
import {ContainerCardPokedex, ContainerDate} from './style'
import {useState, useEffect, useNavigate } from 'react';

export const CardPokedex = () => {
    const [pokedex, setPokedex] = useState([])
    
    return (
        <ContainerCardPokedex>
            <img src={Pikachu} />
            <ContainerDate>
                <h3>N#</h3>
                <h3>Pikachu</h3>
                <button>Ver detalhes</button>
                <button>Excluir</button>
            </ContainerDate>
        </ContainerCardPokedex>
    )
}
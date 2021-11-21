import styled from "styled-components";
import Pikachu from '../img/pikachu.png'
import Charmander from '../img/charmander.png'

const ContainerCardPokemonHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 250px;
    width: 250px;

    border: 1px solid black;
    padding: 5px;
    margin: 5px;

    img {
        height: 170px;
    }
    button {
        margin: 5px;
        padding: 5px;
    }
`


export const CardPokemonHome = () => {

    return (
        <div>
            <ContainerCardPokemonHome>
            <img src={Pikachu} alt='Pikachu'/>
            <h1>Pikachu</h1>
            <div>
                <button>Adicionar a Pokedex</button>
                <button>Detalhes</button>
            </div>
        </ContainerCardPokemonHome>
        <ContainerCardPokemonHome>
            <img src={Charmander} alt='Charmander'/>
            <h1>Charmander</h1>
            <div>
                <button>Adicionar a Pokedex</button>
                <button>Detalhes</button>
            </div>
        </ContainerCardPokemonHome>
        </div>
    )
}
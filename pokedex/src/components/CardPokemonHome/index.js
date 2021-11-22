import Pikachu from '../../img/pikachu.png'
import Charmander from '../../img/charmander.png'
import {ContainerCardPokemonHome} from './style'



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
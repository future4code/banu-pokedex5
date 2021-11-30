import {useState, useEffect} from 'react';
import {CardPokeHome} from '../../components/CardPokeHome';
import {ContainerHome, Header, AllContainer, PokemonContainer, LoadMore} from './style'
import {BASE_URL} from '../../source'
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const[allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState(`${BASE_URL}pokemon?limit=20`)
    const navigate = useNavigate();

    const getAllPokemons = async () => {
        const res = await fetch(loadMore)
        const data = await res.json()

        setLoadMore(data.next)

        function createPokemonObject(results)  {
            results.forEach( async pokemon => {
            const res = await fetch(`${BASE_URL}pokemon/${pokemon.name}`)
            const data =  await res.json()
            setAllPokemons( currentList => [...currentList, data])
            await allPokemons.sort((a, b) => a.id - b.id)
            })
        }
        createPokemonObject(data.results)
    }

    useEffect(() => {
        getAllPokemons() 
    }, [])

    const onClickPokedex = () => {
        navigate("/pokedex");
    }

    return (
        <ContainerHome>
            <Header>
                <div></div>
                <h1>POKEDEX</h1>
                <button onClick={onClickPokedex}>Pokedex</button>
            </Header>
                <AllContainer>
                    {allPokemons.map( (pokemonStats, index) => 
                        <CardPokeHome
                            key={index}
                            id={pokemonStats.id}
                            image={pokemonStats.sprites.other.dream_world.front_default}
                            name={pokemonStats.name}
                            type={pokemonStats.types[0].type.name}
                        />
                    )}
                </AllContainer>
                <LoadMore onClick={() => getAllPokemons()}>Load more</LoadMore>
        </ContainerHome>
    );
}
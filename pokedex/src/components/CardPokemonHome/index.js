import * as React from 'react';
import Pikachu from '../../img/pikachu.png'
import Charmander from '../../img/charmander.png'
import {ContainerCard, ContainerPokemon , ContainerButton} from './style'

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';


export const CardPokemonHome = () => {

    return (
        <div>
            <ContainerCard>
                <ContainerPokemon>
                    <img src={Pikachu} alt='Pikachu'/>
                    <h3>Pikachu</h3>
                </ContainerPokemon>
                <Stack direction="row" spacing={2}>
                    <ContainerButton>
                        <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                        <button>Adicionar a Pokedex</button>
                        <button>Detalhes</button>
                    </ContainerButton>
                </Stack>
            </ContainerCard>
        {/* <ContainerCardPokemonHome>
            <img src={Charmander} alt='Charmander'/>
            <h1>Charmander</h1>
            <div>
                <button>Adicionar a Pokedex</button>
                <button>Detalhes</button>
            </div>
        </ContainerCardPokemonHome> */}
        </div>
    )
}
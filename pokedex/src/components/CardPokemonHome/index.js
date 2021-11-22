import * as React from 'react';
import Pikachu from '../../img/pikachu.png';
import Charmander from '../../img/charmander.png';
import {ContainerCard, ContainerPokemon , ContainerButton} from './style';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Paper from '@mui/material/Paper';


export const CardPokemonHome = () => {

    return (
        <div>
            <ContainerCard>
                <ContainerPokemon>
                    <img src={Pikachu} alt='Pikachu'/>
                    <Typography variant="h6" component="div">Pikachu</Typography>
                    <ContainerButton>
                        <Tooltip title="Detalhes">
                            <Fab variant="extended" 
                                size="small" 
                                color="success" 
                                aria-label="details">
                                <MoreHorizIcon/>
                            </Fab>
                        </Tooltip>

                        <Tooltip title="Adicionar">
                            <Fab variant="extended" 
                                size="small" 
                                aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Tooltip>
                    </ContainerButton>
                </ContainerPokemon>
            </ContainerCard>
        </div>
    )
}


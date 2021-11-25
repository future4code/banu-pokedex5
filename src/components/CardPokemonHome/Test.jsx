import React from 'react'



const Test = () => {   
            

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
        
export default Test

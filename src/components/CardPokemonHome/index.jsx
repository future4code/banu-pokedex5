import * as React from 'react'
import styled from 'styled-components'
import { Button, ButtonGroup } from "@chakra-ui/react"


const IntroContent = styled.div`
    position: absolute;
    z-index: 0;
    width: 200px;
    height: 200px;
    left: 0;    
    color: #fff;
    text-align: center;
    text-shadow: 1px 1px 2px rgb(0 0 0 / 40%);
    padding: 100px 0px 0px 100px;

`
const Cards = styled.h1`
    background-color: white;
    border: 1px solid white;
    height: 35vh;
    width: 250px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    
`
const CardCover = styled.div`
    background: rgb(241, 241, 241);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
   
`
const CardContent = styled.div`
    height: 25%;
    flex: 1;
    background-color: white;
    color: blue;
`
const Botoes = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const ImageCard = styled.img`
    height: 70%;
    width: 85%;
`



const CardPokemonHome = () => {

    return (
        
        <IntroContent>
            <Cards>     
                <CardCover>
                        <ImageCard src="https://gamepress.gg/pokemonmasters/sites/pokemonmasters/files/2020-04/pm0008_00_kameil_256.ktx_.png" alt="wartortle" />
                </CardCover>
                <CardContent>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore dicta vitae iure ration</p>
                </CardContent>
                <Botoes>
                    <Button colorScheme="blue" size="md">Add a Pokedéx</Button>
                    <Button colorScheme="orange" size="md">Ver detalhes</Button>
                </Botoes>

     
                
            </Cards>
            
        </IntroContent>
       
        
    )
}

export default CardPokemonHome

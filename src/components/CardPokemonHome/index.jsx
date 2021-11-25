import * as React from 'react'
import styled from 'styled-components'


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
    display: flex;
    /* Put a card in the next row when previous cards take all width */
    flex-wrap: wrap;
    margin-left: 88px;
    margin-right: 8px;
`
const CardItem = styled.div`
border: 1px solid black;
flex-basis: 1%;
padding-left: 8px;
padding-right: 8px;
color: black;
`



const CardPokemonHome = () => {

    return (
        
            <IntroContent>
                <Cards>
     {/* A card with given width  */}
                <CardItem>
                        <h1>Here should have an image and a description</h1>
                </CardItem>

     {/* Repeat other cards  */}
                
                </Cards>
            
            </IntroContent>
       
        
    )
}

export default CardPokemonHome

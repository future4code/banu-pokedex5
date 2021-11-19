import React from 'react'
import styled from 'styled-components'
import { Button, ButtonGroup } from "@chakra-ui/react"



const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    -moz-column-gap: 24px;
    column-gap: 24px;
    align-items: center;
    justify-content: center;
    z-index: 100;
    background: rgba(8,34,78,.9);
    padding: 8px 24px;
    transition: transform .5s ease;
    transform: translateY(0);
    color: white;
`
const VerPokedex = styled.div`
    padding-left: 15px;
`
export default function Home(){
    return (
        <Container>
            <VerPokedex>
                <Button colorScheme="blue" size="md">Button</Button>
            </VerPokedex>

            <div>
               Lista de pokemons
            </div>
        </Container>
    )
}



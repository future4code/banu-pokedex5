import React from 'react'
import styled from 'styled-components'
import { Button, ButtonGroup } from "@chakra-ui/react"



const Navbar = styled.div`
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

const BodyContainer = styled.div`
    font-weight: 300;
    background: rgb(131,205,237);
background: linear-gradient(86deg, rgba(131,205,237,1) 35%, rgba(194,231,247,1) 100%);
    color: #18242e;
    font-family: "Lato",sans-serif;
    line-height: 1.4;
    height: 100vh;
`
const IntroBackground = styled.div`
    font-weight: 300;
    background: #0c1c3e;
    color: #18242e;
    font-family: "Lato",sans-serif;
    line-height: 1.4;
    margin: 0;
`
const IntroBackgroundImage = styled.div`
    font-weight: 300;
    background: #0c1c3e;
    color: #18242e;
    font-family: "Lato",sans-serif;
    line-height: 1.4;
    margin: 0;
`
const PictureBackground = styled.div`
    font-weight: 300;
    background: #0c1c3e;
    color: #18242e;
    font-family: "Lato",sans-serif;
    line-height: 1.4;
    margin: 0;
`
export default function Home(){
    return (
        
        <div>
            
            
                <Navbar>
                    <VerPokedex>
                        <Button colorScheme="blue" size="md">Ver Pokedex</Button>
                    </VerPokedex>
                    <div>
                       Lista de pokemons
                    </div>
                </Navbar>

                <IntroBackground>
                   <IntroBackgroundImage>
                   <PictureBackground>
                   
                   <source
                   type="image/webp" 
                   srcset="https://c4.wallpaperflare.com/wallpaper/280/139/794/pokemon-background-desktop-wallpaper-preview.jpg" 
                    media="(min-width: 768px) and (max-width: 1023px)">
                    </source>
                    <img
                    class="image tablet-gt"
                    decoding="async" 
                    loading="lazy" 
                    src="https://c4.wallpaperflare.com/wallpaper/280/139/794/pokemon-background-desktop-wallpaper-preview.jpg" alt="" width="2127" height="1197"></img>
                    
                       

                   </PictureBackground>
                   </IntroBackgroundImage>

                </IntroBackground>
            
            
        </div>

          


    )
}


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Home } from './pages/Home';
import {Pokedex} from './pages/Pokedex'
import {DetailPokemon} from './pages/DetailPokemon'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} exact element={<Home/>} />
                <Route path={"/pokedex"} exact element={<Pokedex />} />
                <Route path={"/detailPokemon"} exact element={<DetailPokemon />} />
            </Routes>
        </BrowserRouter>
    )
}
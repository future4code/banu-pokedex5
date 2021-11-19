import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Pokedex from './pages/pokedex/Pokedex'
import Detalhes from './pages/detalhes/Detalhes'
import { ChakraProvider } from "@chakra-ui/react"



function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/detalhes" element={<Detalhes />} />
        
        </Routes> 
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

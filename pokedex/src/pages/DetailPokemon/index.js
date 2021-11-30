import { CardPokeDetails } from '../../components/CardPokeDetails'
import {Header, Main, Footer} from './style'
import { useNavigate } from "react-router-dom";

export const DetailPokemon = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header>
                <div></div>
                <h1>Pokedex</h1>
                <button onClick={() => navigate(-1)}>Voltar</button>
            </Header>
            <Main>
                <CardPokeDetails />
            </Main>
            <Footer>
                <span>Rodape</span>
            </Footer>
        </div>
    )
}
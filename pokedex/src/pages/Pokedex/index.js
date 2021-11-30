import {Header, Main, Footer} from './style'
import { useNavigate } from "react-router-dom";
import {CardPokedex} from '../../components/CardPokedex'

export const Pokedex = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header>
                <div></div>
                <h1>Pokedex</h1>
                <button onClick={() => navigate(-1)}>Voltar</button>
            </Header>
            <Main>
                <CardPokedex />
            </Main>
            <Footer>
                <span>Rodape</span>
            </Footer>
        </div>
    )
}
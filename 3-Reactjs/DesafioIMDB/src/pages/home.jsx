import { useState, useEffect } from 'react';
import axios from 'axios';
import FilmeCard from '../component/FilmeCard.jsx';

function Home() {
    const [filmeInput, setFilmeInput] = useState("");
    const [filmes, setFilmes] = useState([]);
    const [filmeDetalhes, setFilmeDetalhes] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);



    const apiKey = "b12bcf6e"

    async function procurarFilmes() {
        setError(null);
        const getSearch = `https://www.omdbapi.com/?apikey=${apiKey}&s=${filmeInput}`
        setLoading(true);
        try {
            const response = await axios.get(getSearch);
            if (response.data.Search && Array.isArray(response.data.Search)) {
                const filmesOrdenados = [...response.data.Search].sort((a, b) => a.Year.localeCompare(b.Year));
                setFilmes(filmesOrdenados);
            } else {
                setFilmes([]);
                setError(`Nenhum filme com: ${filmeInput} foi encontrado.`);
            }
            setLoading(false);
        } catch (err) {
            setError('Erro ao carregar filmes:');
            setLoading(false);
        }
    }


    async function detalhesFilme(imdbID) {
        setError(null);
        const getDetalhes = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
        setLoading(true);
        try {
            const response = await axios.get(getDetalhes);
            if (response.data) {
                setFilmeDetalhes(response.data);
            } else {
                setFilmeDetalhes(null);
                setError('Detalhes do filme não encontrados.');
            }
            setLoading(false);
        } catch (err) {
            setError('Erro ao carregar detalhes do filme:');
            setLoading(false);
        }
    }

    return (
        <div className="container">
            <h1>Bem-vindo ao Desafio IMDB</h1>
            <input type="text"
                placeholder='Digite o nome do filme'
                value={filmeInput}
                onChange={(e) => setFilmeInput(e.target.value)}
            />
            <button onClick={procurarFilmes}>Buscar</button>
            <FilmeCard
                filmes={filmes}
                loading={loading}
                error={error}
                detalhesFilme={detalhesFilme}
            />
        </div>
    )
}


export default Home;
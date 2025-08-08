
function FilmeCard({ filmes, error, loading, detalhesFilme }) {
    return (
        <div className='lista-filmes'>
            {filmes.length > 0 && filmes.map((filme) => (
                <div key={filme.imdbID} className='card'>
                    <h2>{filme.Title}</h2>
                    <p>Ano: {filme.Year}</p>
                    <img
                        src={filme.Poster !== "N/A" ? filme.Poster : "https://via.placeholder.com/150"}
                        alt={filme.Title}
                    />
                    <button onClick={() => detalhesFilme(filme.imdbID)}>Veja mais</button>
                </div>
            ))}
            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
        </div>
    )
}


export default FilmeCard
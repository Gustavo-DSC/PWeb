import React from 'react';

export default async function Home({ searchParams }) {
  const { titleSearchKey = 'bagdad' } = await searchParams;
  const apiKey = '617c7269'; // Substitua pela sua chave
  const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${titleSearchKey}`;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`Erro na requisição: ${res.status}`);
    }
    const data = await res.json();

    if (!data.Search || data.Search.length === 0) {
      return <div style={{color: 'white', textAlign: 'center', padding: '20px'}}>Nenhum filme encontrado para "{titleSearchKey}".</div>;
    }

    return (
      <div className="movie-grid"> {/* Usando uma classe para o grid */}
        {data.Search.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}
              alt={`${movie.Title} Poster`}
              className="movie-poster"
            />
            <div className="movie-info">
              <h3 className="movie-title">{movie.Title}</h3>
              <p className="movie-year">{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    return <div style={{color: 'white', textAlign: 'center', padding: '20px'}}>Erro ao buscar filmes. Tente novamente.</div>;
  }
}
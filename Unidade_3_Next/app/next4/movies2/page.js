'use client';
import Image from 'next/image';
import './styles2.css';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const initialSearchTerm = searchParams.get('titleSearchKey') || ''; 
    const initialFilter = searchParams.get('type') || 'all';

    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
    const [filter, setFilter] = useState(initialFilter); // Novo estado para o filtro
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (searchTerm === '') {
                setMovieData(null); 
                return;
            }
            setLoading(true);
            setError(null);

            try {
                const apiKey = '617c7269'; // Substitua pela sua chave
                const typeParam = filter !== 'all' ? `&type=${filter}` : ''; // Adiciona o filtro de tipo
                const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}${typeParam}`;
                const res = await fetch(apiUrl);
                if (!res.ok) {
                    throw new Error(`Erro na requisição: ${res.status}`);
                }
                const data = await res.json();
                setMovieData(data);
            } catch (err) {
                console.error('Erro ao buscar filmes:', err);
                setError('Erro ao buscar filmes. Tente novamente.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [searchTerm, filter]);

    const handleSearch = (event) => {
        event.preventDefault();
        const queryParams = new URLSearchParams({ 
            titleSearchKey: searchTerm, 
            type: filter 
        });
        router.push(`/next4/movies2?${queryParams.toString()}`, { scroll: false });
    };

    return (
        <div>
            <div className="search-container">
                <form onSubmit={handleSearch} style={{ display: 'flex', width: '100%' }}>
                    <input
                        type="text"
                        id="search"
                        name="search"
                        className="search-input"
                        placeholder="Buscar filme ou série..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select 
                        className="filter-select" 
                        value={filter} 
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="all">Todos</option>
                        <option value="movie">Filmes</option>
                        <option value="series">Séries</option>
                    </select>
                    <button type="submit" className="search-button">Buscar</button>
                </form>
            </div>

            {loading && <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>Carregando...</div>}
            {error && <div className="error-message">{error}</div>}

            {movieData && movieData.Search && (
                <div className="movie-grid">
                    {movieData.Search.map((movie) => (
                        <div key={movie.imdbID} className="movie-card">
                            <img
                                src={movie.Poster !== 'N/A' ? movie.Poster : '/images/noimage.png'}
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
            )}
            {movieData && !movieData.Search && !loading && !error && searchTerm !== '' && (
                <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>Nenhum resultado encontrado.</div>
            )}
        </div>
    );
}

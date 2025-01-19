'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { searchMovies } from './actions/movieActions';
import './styles2.css';

export default function Home() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const initialSearchTerm = searchParams.get('titleSearchKey') || ''; 
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (searchTerm === '') {
            setMovieData(null);
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await searchMovies(searchTerm);
                setMovieData(data);
            } catch (err) {
                setError('Erro ao buscar filmes. Tente novamente.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [searchTerm]);

    const handleSearch = (event) => {
        event.preventDefault();
        const queryParams = new URLSearchParams({ titleSearchKey: searchTerm });
        router.push(`/next4/movies5?${queryParams.toString()}`, { scroll: false });
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
                        placeholder="Buscar filme..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit" className="search-button">Buscar</button>
                </form>
            </div>

            {loading && <div className="loading-message">Carregando...</div>}
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
                <div className="no-results">Nenhum resultado encontrado.</div>
            )}
        </div>
    );
}

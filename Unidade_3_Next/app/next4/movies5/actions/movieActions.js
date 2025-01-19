'use server';

export async function searchMovies(titleSearchKey) {
    if (!titleSearchKey) {
        return null;
    }

    try {
        // Chamar a API interna que consulta a OMDB
        const apiUrl = `/movies5/api/searchMovies?titleSearchKey=${titleSearchKey}`;
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`Erro na requisição: ${res.status}`);
        }

        const data = await res.json();

        if (data.error) {
            throw new Error(data.error);  // Se houver erro na resposta
        }

        return data;  // Retornar os dados dos filmes
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        throw new Error('Erro ao buscar filmes. Tente novamente.');
    }
}

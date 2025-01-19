export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const titleSearchKey = searchParams.get("titleSearchKey");

    // Verificar se o parâmetro 'titleSearchKey' foi fornecido
    if (!titleSearchKey) {
        return Response.json({ error: "Parâmetro titleSearchKey é necessário" }, { status: 400 });
    }

    // Fazer a requisição para a API OMDB
    const httpRes = await fetch(`http://www.omdbapi.com/?apikey=617c7269&s=${titleSearchKey}`);
    
    // Verificar se a resposta da OMDB foi bem-sucedida
    const jsonRes = await httpRes.json();

    // Se a OMDB retornar um erro, enviar uma mensagem de erro
    if (jsonRes.Error) {
        return Response.json({ error: jsonRes.Error }, { status: 400 });
    }

    // Retornar a resposta JSON com os filmes encontrados
    return Response.json(jsonRes);
}

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const titleSearchKey = searchParams.get("titleSearchKey");

    if (!titleSearchKey) {
        return Response.json({ error: "Parâmetro titleSearchKey é necessário" }, { status: 400 });
    }

    const httpRes = await fetch(`http://www.omdbapi.com/?apikey=617c7269&s=${titleSearchKey}`);
    const jsonRes = await httpRes.json();

    return Response.json(jsonRes);
}

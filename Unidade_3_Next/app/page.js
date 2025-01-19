import Link from 'next/link';

export default function Home() {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Página Principal</h1>
            <p>Receitas de Next.js de Pwebs! Escolha a receita:</p>
            <div>
                <Link href="/next1" style={buttonStyle}>
                    Ir para Receita 1
                </Link>
            </div>

            <div>
                <Link href="/next2" style={buttonStyle}>
                    Ir para Receita 2
                </Link>
            </div>

            <div>
                <Link href="/next3" style={buttonStyle}>
                    Ir para Receita 3
                </Link>
            </div>

            <div>
                <Link href="/next4/movies1" style={buttonStyle}>
                    Ir para Receita 4 - Movies
                </Link>
            </div>

            <div>
                <Link href="/next4/movies2" style={buttonStyle}>
                    Ir para Receita 5 - Movies
                </Link>
            </div>

            <div>
                <Link href="/next4/movies3" style={buttonStyle}>
                    Ir para Receita 6 - Movies
                </Link>
            </div>

            <div>
                <Link href="/next4/movies4" style={buttonStyle}>
                    Ir para Receita 7 - Movies    
                </Link>
            </div>

            <div>
                <Link href="/next4/movies5" style={buttonStyle}>
                    Ir para Receita 8 - Movies
                </Link>
            </div>

        </div>
    );
}

const buttonStyle = {
    display: 'inline-block', // Garante que o Link se comporta como um botão
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none', // Remove underline
};

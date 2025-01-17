import Link from 'next/link';

export default function Home() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Página Principal</h1>
            <p>Bem-vindo ao meu projeto Next.js! Escolha a receita:</p>
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

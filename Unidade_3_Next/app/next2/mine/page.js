import Link from 'next/link';

export default function Mine1() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Atividade 1 - Next.js</h1>
            <p>
                Mine1
            </p>
            <p>
                O objetivo foi entender como o Next.js cria e gerencia rotas de maneira
                simples e eficiente, usando o sistema de arquivos.
            </p>
            <div>
                <Link href="/next2" passHref>
                    <button style={buttonStyle}>
                        Voltar 
                    </button>
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

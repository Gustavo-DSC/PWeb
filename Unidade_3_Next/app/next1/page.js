import VoltarPage from '../components/VoltarPage';

export default function Next1() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Receita 1 - Next.js</h1>
            <p>
                Esta é a primeira Receita em Next.js. Nela, criamos uma nova rota para
                nossa aplicação, utilizando a estrutura de pastas do Next.js. Cada pasta
                dentro da pasta <code>app</code> é mapeada como uma rota da aplicação.
            </p>
            <p>
                O objetivo foi entender como o Next.js cria e gerencia rotas de maneira
                simples e eficiente, usando o sistema de arquivos.
            </p>
            <VoltarPage />
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

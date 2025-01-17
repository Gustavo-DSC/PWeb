import Link from 'next/link';
import VoltarPage from '../components/VoltarPage';

export default function Home() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Explicação da Receita 2 Next </h1>

            <section>
                <h2>1. Criação de Novos Componentes e Páginas</h2>
                <p>Nesta atividade, organizamos o projeto criando novos componentes e</p>
                <p>páginas, além de subdiretórios dentro do diretório <code>next2</code>.</p>
                <p>Cada subdiretório pode conter páginas específicas para diferentes seções do site.</p>
                <p><code>page.js</code> que funciona como página principal dessa rota, e</p>
                <p>subdiretórios como <code>terra</code> e <code>mine</code></p>
                <p>organizam páginas relacionadas a temas específicos. No caso Minecraft e Terraria.</p>
            </section>

            <section>
                <h2>2. Uso de Componentes em Páginas</h2>
                <p>Para promover a reutilização de código, criamos componentes independentes</p>
                <p>que podem ser usados em diversas páginas. Um exemplo é o componente chamado</p>
                <p><code>VoltarPage</code>, que é importado e utilizado em outras paginas.</p>
            </section>
            <div>
                <Link href="/next2/terra" style={buttonStyle}>
                    Terraria
                </Link>
            </div>
            <div>
                <Link href="/next2/mine" style={buttonStyle}>
                    Minecraft
                </Link>
            </div>
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

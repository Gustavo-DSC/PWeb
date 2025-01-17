import Link from 'next/link';
import VoltarPage from '../components/VoltarPage';

export default function Next3() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Receita 2a - Next.js</h1>

            <section>
                <h2>1. Organização com Layouts</h2>
                <p>
                    Nesta etapa, configuramos layouts para organizar melhor o projeto. 
                    O layout principal engloba o menu e serve como base para todas as páginas.
                </p>
                <p>
                    Também foi adicionado um layout específico para os subdiretórios, 
                    o que permite personalizar o estilo de cada seção do site.
                </p>
            </section>

            <section>
                <h2>2. Divisão em Subdiretórios</h2>
                <p>
                    Subdiretórios dentro da pasta <code>app</code> foram criados para separar 
                    páginas e conteúdos relacionados. Cada subdiretório pode ter um layout 
                    e páginas próprias, garantindo maior modularidade e organização.
                </p>
            </section>

            <section>
                <h2>3. O que foi feito até agora?</h2>
                <p>
                    Nas receitas anteriores, já aprendemos a criar componentes reutilizáveis e 
                    organizar nossas rotas. Agora, com layouts e subdiretórios, o projeto está 
                    ainda mais estruturado.
                </p>
            </section>

            <VoltarPage />
        </div>
    );
}

const buttonStyle = {
    display: 'inline-block',
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
};

import Link from 'next/link';

export default function VoltarPage() {
  const buttonStyle = {
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <Link href="/" passHref>
        <button style={buttonStyle}>Voltar para a página principal</button>
      </Link>
    </div>
  );
}

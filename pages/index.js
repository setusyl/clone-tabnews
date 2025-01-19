import React from 'react';

function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', margin: 0, padding: 0 }}>
      <header style={{ backgroundColor: '#4CAF50', color: 'white', padding: '15px', textAlign: 'center' }}>
        <h1>Bem-vindo à Minha Página Home</h1>
      </header>
      <nav style={{ backgroundColor: '#333', overflow: 'hidden' }}>
        <a
          href="#home"
          style={{
            float: 'left',
            display: 'block',
            color: 'white',
            textAlign: 'center',
            padding: '14px 16px',
            textDecoration: 'none',
          }}
        >
          Home
        </a>
        <a
          href="#sobre"
          style={{
            float: 'left',
            display: 'block',
            color: 'white',
            textAlign: 'center',
            padding: '14px 16px',
            textDecoration: 'none',
          }}
        >
          Sobre
        </a>
        <a
          href="#contato"
          style={{
            float: 'left',
            display: 'block',
            color: 'white',
            textAlign: 'center',
            padding: '14px 16px',
            textDecoration: 'none',
          }}
        >
          Contato
        </a>
      </nav>
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Olá!</h2>
        <p>Esta é uma página inicial para simples conferência. Clique nos links do menu acima para navegar.</p>
      </main>
      <footer
        style={{
          backgroundColor: '#333',
          color: 'white',
          textAlign: 'center',
          padding: '10px 0',
          position: 'fixed',
          width: '100%',
          bottom: 0,
        }}
      >
        <p>&copy; 2025 - Minha Página Simples</p>
      </footer>
    </div>
  );
}

export default Home;

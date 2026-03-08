import React from 'react';
import { BackgroundPage } from './backgroundPage';
import { SalesProducts } from './salesProducts';

function App() {

  return (
    <div className='container gap-20'>

      <header className='header-container'>
        <div className='nav-container'>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
            <h2 style={{ fontWeight: 400 }}>
              ESSÊNCIA
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", alignItems: "center", justifyContent: "center" }}>
            <div className='fb-align-center '>
              <text className='nav-text'>Catalogo</text>
            </div>
            <div className='fb-align-center '>
              <text className='nav-text'>Masculino</text>
            </div>
            <div className='fb-align-center '>
              <text className='nav-text'>Feminino</text>
            </div>
            <div className='fb-align-center'>
              <text className='nav-text'>Unissex</text>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "auto auto", alignItems: "center", justifyContent: "flex-end", gap: "10px" }}>
            <div>Busca</div>
            <div>Carrinho</div>
          </div>
        </div>
      </header>

      <main className='main-content gap-20'>
        <div>
          <BackgroundPage/>
        </div>
        <div>
          <SalesProducts/>
        </div>
      </main>

      <footer className='foot-background'>
        <div className='footer-container'>
          <div className='h-50 fb-column justify-content-center align-items-start gap-20'>
            <h2 className='ftw color-white'>
              ESSÊNCIA
            </h2>
            <text className='footer-text'>
              Perfumes exclusivos selecionados para quem busca sofisticação e elegância em cada detalhe.
            </text>
          </div>
          <div className='h-50 fb-column justify-content-center align-items-start gap-20'>
            <h4 className='ftw color-white'>Navegação</h4>
            <div className='fb-column justify-content-center align-items-start gap-5 footer-text'>
              <text>Home</text>
              <text>Catálogo</text>
              <text>Carrinho</text>
            </div>
          </div>
          <div className='h-50 fb-column justify-content-center align-items-start gap-20'>
            <h4 className='ftw color-white'>Categorias</h4>
            <div className='fb-column justify-content-center align-items-start gap-5 footer-text'>
              <text>Masculino</text>
              <text>Feminino</text>
              <text>Unissex</text>
            </div>
          </div>
          <div className='h-50 fb-column justify-content-center align-items-start gap-20 color-white'>
            <h4 className='ftw color-white'>Contato</h4>
            <div className='fb-column justify-content-center align-items-start gap-5 footer-text'>
              <text>contato@essencia.com</text>
              <text>(11) 99999-0000</text>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

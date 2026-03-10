import React from 'react';
import { BackgroundPage } from './backgroundPage';
import { SalesProducts } from './salesProducts';

function App() {

  return (
    <div class='grid grid-rows-[1fr_375px] min-h-dvh gap-20'>

      <header class="grid grid-cols-1 xl:grid-cols-[1fr_1280px_1fr] w-full h-[65px] fixed bg-white">
        <div class='grid xl:col-start-2 xl:col-end-3 grid-cols-3 '>
          <div class="flex justify-start items-center">
            <h2 class="font-normal">
              ESSÊNCIA
            </h2>
          </div>
          <div class="grid grid-cols-4">
            <div class='flex justify-center items-center'>
              <text class='text-sm text-gray-500 font-[Inter,sans-serif]'>Catalogo</text>
            </div>
            <div class='flex justify-center items-center'>
              <text class='text-sm text-gray-500 font-[Inter,sans-serif]'>Masculino</text>
            </div>
            <div class='flex justify-center items-center'>
              <text class='text-sm text-gray-500 font-[Inter,sans-serif]'>Feminino</text>
            </div>
            <div class='flex justify-center items-center'>
              <text class='text-sm text-gray-500 font-[Inter,sans-serif]'>Unissex</text>
            </div>
          </div>
          <div class="grid grid-cols-[auto_auto] justify-end items-center gap-5">
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

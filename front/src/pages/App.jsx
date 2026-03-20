import React from 'react';
import { BackgroundPage } from './backgroundPage';
import { SalesProducts } from './salesProducts';
import { NewProducts } from './newProductsPage';
import { CategoryProducts } from './categoryProducts';

function App() {

  return (
    <div className='grid grid-rows-[65px_1fr_375px] min-h-dvh'>

      <header className="grid grid-cols-1 xl:grid-cols-[1fr_1280px_1fr] w-full sticky top-0 z-50 bg-white">
        <div className='grid xl:col-start-2 xl:col-end-3 grid-cols-3 '>
          <div className="flex justify-start items-center">
            <h2 className="font-normal">
              ESSÊNCIA
            </h2>
          </div>
          <div className="grid grid-cols-4">
            <div className='flex justify-center items-center'>
              <p className='text-sm text-gray-500 font-[Inter,sans-serif]'>Catalogo</p>
            </div>
            <div className='flex justify-center items-center'>
              <p className='text-sm text-gray-500 font-[Inter,sans-serif]'>Masculino</p>
            </div>
            <div className='flex justify-center items-center'>
              <p className='text-sm text-gray-500 font-[Inter,sans-serif]'>Feminino</p>
            </div>
            <div className='flex justify-center items-center'>
              <p className='text-sm text-gray-500 font-[Inter,sans-serif]'>Unissex</p>
            </div>
          </div>
          <div className="grid grid-cols-[auto_auto] justify-end items-center gap-5">
            <div>Busca</div>
            <div>Carrinho</div>
          </div>
        </div>
      </header>

      <main className='grid grid-rows-[700px_1fr] gap-[80px] mb-[40px]'>
        <div>
          <BackgroundPage/>
        </div>
        <div>
          <SalesProducts/>
        </div>
        <div>
          <CategoryProducts/>
        </div>
        <div>
          <NewProducts/>
        </div>
      </main>

      <footer className='bg-[#1c1a17] grid grid-cols-[1fr_1280px_1fr] justify-center'>
        <div className='col-start-2 col-end-3 grid grid-cols-4 gap-[50px] items-center justify-center'>
          <div className='h-[50%] flex flex-col items-start gap-20'>
            <h2 className='ftw color-white'>
              ESSÊNCIA
            </h2>
            <text className='footer-text'>
              Perfumes exclusivos selecionados para quem busca sofisticação e elegância em cada detalhe.
            </text>
          </div>
          <div className='h-[50%] flex flex-col items-start gap-20'>
            <h4 className='font-normal text-white'>Navegação</h4>
            <div className='flex flex-col justify-center items-start gap-5 text-sm text-gray-400 font-[Inter,sans-serif]'>
              <text>Home</text>
              <text>Catálogo</text>
              <text>Carrinho</text>
            </div>
          </div>
          <div className='h-[50%] flex flex-col items-start gap-20'>
            <h4 className='font-normal text-white'>Categorias</h4>
             <div className='flex flex-col justify-center items-start gap-5 text-sm text-gray-400 font-[Inter,sans-serif]'>
              <text>Masculino</text>
              <text>Feminino</text>
              <text>Unissex</text>
            </div>
          </div>
          <div className='h-[50%] flex flex-col items-start gap-20'>
            <h4 className='font-normal text-white'>Contato</h4>
             <div className='flex flex-col justify-center items-start gap-5 text-sm text-gray-400 font-[Inter,sans-serif]'>
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

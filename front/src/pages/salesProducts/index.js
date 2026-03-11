import { formatToReal } from "../../assets/utils/FormaValueToReal/index.js"

const products = [
  {
    name: "Sauvage",
    company_name: "DIOR",
    price: 689.90
  },
  {
    name: "Bleu de Chanel",
    company_name: "CHANEL",
    price: 749.90
  },
  {
    name: "Acqua di Giò",
    company_name: "GIORGO ARMANI",
    price: 599.90
  },
  {
    name: "1 Million",
    company_name: "PACO RABANNE",
    price: 529.90
  },
];



export const SalesProducts = () => {
    return (
        <div className="grid grid-cols-[1fr_1280px_1fr]">
            <div className="col-start-2 col-end-3 flex flex-col gap-20">
                <div>
                    <h1 className="font-normal">Mais Vendidos</h1>
                </div>
                <div className="grid grid-cols-4 gap-20">
                    {products?.map((p, index) => {
                        return (
                            <div className="h-[400px] bg-[#eee] grid grid-rows-[3fr_1fr] gap-[5px]" key={index}>
                                <div className="flex items-center justify-center bg-[blue]">
                                    IMAGEM DO PRODUTO
                                </div>
                                <div className="grid gap-[5px]">
                                <div className="grid">
                                  <text className="text- text-gray-600">{p.company_name}</text>
                                  <h3 className="text-lg font-medium">{p.name}</h3>
                                </div>
                                <text className="font-[Inter,sans-serif] font-medium">{formatToReal(p.price)}</text>
                                <button className="h-[30px]">Adicionar</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
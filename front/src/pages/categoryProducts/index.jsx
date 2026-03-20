import image from "../../assets/images/backGround.png";

const products = [
  {
    name: "Sauvage",
    company_name: "DIOR",
    price: 689.90,
    photo: `${image}`
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


export const CategoryProducts = () => {
    return (
        <div className="grid grid-cols-[1fr_1280px_1fr]">
            <div className="col-start-2 col-end-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] h-[580px]">
                    <div className="relative h-full">
                        <img
                            src={products[0].photo}
                            alt={products[0].name}
                            className="w-full h-full object-cover brightness-[0.8]"
                        />
                        <div className="absolute bottom-0 p-[20px] text-white flex flex-col ">
                            <h2 className="font-semibold text-2xl">Masculino</h2>
                            <p className="text-sm">Ver coleção</p>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <img
                            src={products[0].photo}
                            alt={products[0].name}
                            className="w-full h-full object-cover brightness-[0.8]"
                        />
                        <div className="absolute bottom-0 p-[20px] text-white flex flex-col ">
                            <h2 className="font-semibold text-2xl">Feminino</h2>
                            <p className="text-sm">Ver coleção</p>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <img
                            src={products[0].photo}
                            alt={products[0].name}
                            className="w-full h-full object-cover brightness-[0.8]"
                        />
                        <div className="absolute bottom-0 p-[20px] text-white flex flex-col ">
                            <p className="font-semibold text-2xl">Unissex</p>
                            <p className="text-sm">Ver coleção</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const products = [
  {
    name: "Sauvage",
    company_name: "Dior",
    price: 689.90
  },
  {
    name: "Bleu de Chanel",
    company_name: "Chanel",
    price: 749.90
  },
  {
    name: "Acqua di Giò",
    company_name: "Giorgio Armani",
    price: 599.90
  },
  {
    name: "1 Million",
    company_name: "Paco Rabanne",
    price: 529.90
  },
];



export const SalesProducts = () => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1300px 1fr" }}>
            <div style={{  gridColumn: "2/3", display: "flex", flexDirection: "column", gap: "20px"}}>
                <div>
                    <h1>Mais Vendidos</h1>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
                    {products?.map((p, index) => {
                        return (
                            <div key={index} style={{ height: "400px", background: "#eee", display: "grid", gridTemplateRows: "2fr 1fr" }}>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center",backgroundColor: "blue" }}>
                                    IMAGEM DO PRODUTO
                                </div>
                                <div style={{ display: "grid"}}>
                                <text>{p.company_name}</text>
                                <text>{p.name}</text>
                                <text>{p.price}</text>
                                <button style={{ height: "30px"}}>Adicionar</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
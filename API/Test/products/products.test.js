import ProdutcsController from "../../Controller/Products/products.js"
import db from "../../db.js";
import mockRes from "../mockRes.js";

const defaultRes = mockRes();
let product1, product2, product3, product4, product5;

beforeEach(async () => {
    await db.sync({ force: true });

    product1 = await db.models.products.create({
        name: "Perfume Rosa",
        description: "Perfume cheioroso",
        type: "Floral",
        price: 100,
        photo: "https://example.com/perfume-rosa.jpg"
    });

    product2 = await db.models.products.create({
        name: "Perfume Azul",
        description: "Perfume cheioroso",
        type: "Cítrico",
        price: 200,
        photo: "https://example.com/perfume-azul.jpg"
    });

    product3 = await db.models.products.create({
        name: "Perfume Verde",
        description: "Perfume cheioroso",
        type: "Amadeirado",
        price: 200,
        photo: "https://example.com/perfume-verde.jpg"
    });

    product4 = await db.models.products.create({
        name: "Perfume Amarelo",
        description: "Perfume cheioroso",
        type: "Cítrico",
        price: 400,
        photo: "https://example.com/perfume-amarelo.jpg"
    });

    product5 = await db.models.products.create({
        name: "Perfume Roxo",
        description: "Perfume cheioroso",
        type: "Floral",
        price: 500,
        photo: "https://example.com/perfume-roxo.jpg"
    });

})

test("Criando um produto com sucesso", async () => {
    
    const body = {
        name: "Permume Rosa",
        description: "Perfume cheioroso",
        type: "Floral",
        price: 100,
        photo: "https://example.com/perfume-rosa.jpg"
    }

    await ProdutcsController.createProducts({ body }, defaultRes);
})

test("buscando todos os produtos, e filtrando", async () => {
    const products = await ProdutcsController.getAllProducts({query: {}}, defaultRes);
    expect(products.length).toEqual(5);

    const productsFilterByType = await ProdutcsController.getAllProducts({query: { type: "Cítrico" }}, defaultRes);
    expect(productsFilterByType.length).toEqual(2);
    expect(productsFilterByType[0].type).toEqual("Cítrico");
    expect(productsFilterByType[0].name).toEqual(product2.name);
    expect(productsFilterByType[1].type).toEqual("Cítrico");
    expect(productsFilterByType[1].name).toEqual(product4.name);

    const productsFilterByName = await ProdutcsController.getAllProducts({query: { name: ["Perfume Verde", "Perfume Roxo"] }}, defaultRes);
    expect(productsFilterByName.length).toEqual(2);
    expect(productsFilterByName[0].name).toEqual(product3.name);
    expect(productsFilterByName[1].name).toEqual(product5.name);

    const productsFilterByMinPrice = await ProdutcsController.getAllProducts({query: { minPrice: 300 }}, defaultRes);
    expect(productsFilterByMinPrice.length).toBe(2);
    expect(productsFilterByMinPrice[0].name).toEqual(product4.name);
    expect(productsFilterByMinPrice[1].name).toEqual(product5.name); 

    const productsFilterByMaxPrice = await ProdutcsController.getAllProducts({query: { maxPrice: 300 }}, defaultRes);
    expect(productsFilterByMaxPrice.length).toEqual(3);
    expect(productsFilterByMaxPrice[0].name).toEqual(product1.name);
    expect(productsFilterByMaxPrice[1].name).toEqual(product2.name);
    expect(productsFilterByMaxPrice[2].name).toEqual(product3.name);

    const productsFilterByMaxPriceAndType = await ProdutcsController.getAllProducts({query: { maxPrice: 300, type: "Floral" }}, defaultRes);
    expect(productsFilterByMaxPriceAndType.length).toEqual(1);
    expect(productsFilterByMaxPriceAndType[0].name).toEqual(product1.name);

})

test("Buscando um produto por id", async () => {
    const product = await ProdutcsController.getProductById({ params: { product_id: product1.id }}, defaultRes);

    expect(product).toBeDefined();
    expect(product.name).toEqual(product1.name);
    expect(product.description).toEqual(product1.description);
    expect(product.type).toEqual(product1.type);
    expect(product.price).toEqual(product1.price);
    expect(product.photo).toEqual(product1.photo);
})

test("Atulizando um produto e buscando ele depois", async () => {
    await ProdutcsController.updateProduct({ params: { product_id: product1.id }, body: { name: "Perfume Rosa Atualizado", price: 150 }}, defaultRes);

    const updatedProduct = await ProdutcsController.getProductById({ params: { product_id: product1.id }}, defaultRes);

    expect(updatedProduct).toBeDefined();
    expect(updatedProduct.name).toEqual("Perfume Rosa Atualizado");
    expect(updatedProduct.price).toEqual(150);
})

test.only("Deletando um produto e tentando buscar ele depois", async () => {
    await ProdutcsController.deleteProduct({ params: { product_id: product1.id }}, defaultRes);
    const deletedProduct = await ProdutcsController.getProductById({ params: { product_id: product1.id }}, defaultRes);
    expect(deletedProduct.message).toEqual("Produto não encontrado");
})





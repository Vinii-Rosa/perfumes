import db from "../../db.js";
import Products from "../../Models/product.js";

const ProdutcsController = {

    createProducts: async (req, res) => {
        let transaction;
        try{
        const { name, description, type, price, photo } = req.body;


        if(!name){
            return res.status(400).send({ message: 'O nome é obrigatório!' });
        }

        if(!price) {
            return res.status(400).send({ message: 'O preço do produto é obrigatório!' });
        }

        transaction = await db.transaction();

        await Products.create({
            name,
            description,
            type,
            price,
            photo
        }, { transaction })

        await transaction.commit();
        return res.status(200).send({ message: 'Produto criado com sucesso!' });
    }catch (error) {
        console.error('Erro ao criar produto:', error);
        await transaction.rollback();
        return res.status(500).send({ message: 'Ocorreu um erro ao criar o produto' });
    }},

    getAllProducts: async (req, res) => {
        console.log("chegou aqui")
        try {
            const { type, name, minPrice, maxPrice } = req?.query;

            const where = {};

            if (type) {
                where.type = type;
            }

            if (name) {
                where.name = name;
            }

            if (minPrice) {
                where.price = { ...where.price, [db.Sequelize.Op.gte]: parseInt(minPrice) };
            }

            if (maxPrice) {
                where.price = { ...where.price, [db.Sequelize.Op.lte]: parseInt(maxPrice) };
            }

            const products = await Products.findAll({
                attributes: ['id', 'name', 'description', 'type', 'price', 'photo'],
                where
            });

            return res.status(200).send(products);
        }catch (error){
            console.error('Erro ao buscar produtos:', error);
            return res.status(500).send({ message: 'Ocorreu um erro ao buscar os produtos' });
        }
    },

    getProductById: async (req, res) => {
        try {
            const { product_id } = req.params;

            const product = await Products.findOne({
                where: { id: product_id },
                attributes: ['id', 'name', 'description', 'type', 'price', 'photo']
            });

            if (!product) {
                return res.status(404).send({ message: 'Produto não encontrado' });
            }

            return res.status(200).send(product);
        }catch (error){
            console.error('Erro ao buscar produto por ID:', error);
            return res.status(500).send({ message: 'Ocorreu um erro ao buscar o produto' });
        }
    },

    updateProduct: async (req, res) => {
        let transaction;
        try {
            const { product_id } = req.params;
            const { name, description, type, price, photo } = req.body;

            const product = await Products.findOne({ where: { id: product_id }});

            if (!product) {
                return res.status(404).send({ message: 'Produto não encontrado' });
            }

            transaction = await db.transaction();

            await product.update({
                name: name || product.name,
                description: description || product.description,
                type: type || product.type,
                price: price || product.price,
                photo: photo || product.photo
            }, { transaction });

            await transaction.commit();
            return res.status(200).send({ message: 'Produto atualizado com sucesso!' });
        }catch (error){
            console.error('Erro ao atualizar produto:', error);
            if (transaction) await transaction.rollback();
            return res.status(500).send({ message: 'Ocorreu um erro ao atualizar o produto' });
        }
    },

    deleteProduct: async (req, res) => {
        let transaction;
        try {
            const { product_id } = req.params;

            const product = await Products.findOne({ where: { id: product_id }});

            if (!product) {
                await transaction.rollback();
            }
            
            transaction = await db.transaction();

            await product.destroy({ transaction });
            await transaction.commit();
            return res.status(200).send({ message: 'Produto deletado com sucesso!' });
        }catch (error){
            console.error('Erro ao deletar produto:', error);
            if (transaction) await transaction.rollback();
            return res.status(500).send({ message: 'Ocorreu um erro ao deletar o produto' });
        }
    }

}

export default ProdutcsController;
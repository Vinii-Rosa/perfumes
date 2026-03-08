import { Sequelize } from "sequelize";

const db = new Sequelize('product_perfume', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

export default db;
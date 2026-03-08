import { Sequelize } from "sequelize";
import db from "../db.js";

const Products = db.define('products', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER, 
    allowNull: false
  },
  photo: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

export default Products;
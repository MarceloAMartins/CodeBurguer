import Sequelize from "sequelize";
import mongoose from 'mongoose'

import User from "../app/models/User"
import Product from "../app/models/Product"
import configDatabase from "../config/database"
import Category from "../app/models/Category"

const models = [User, Product, Category]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(configDatabase);
    models.map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models)
      )
  }
  
  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/codeburguer',
      {useNewUrlParser: true,
        useUnifiedTopology: true,
      }
      )
  }
}

export default new Database()

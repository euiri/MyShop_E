import dotenv from 'dotenv'
import users from './data/users'
import products from './data/products'
import User from './models/userModel'
import Product from './models/productModel'
import connectDB from './config/db'

dotenv()
connectDB()

const importData = async() => {

  
}
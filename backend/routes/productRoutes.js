import express from 'express'
import { getProduct, getProductById } from '../controllers/productController.js';

const router = express.Router()

// @desc    Fetch all products
// @route   GET /api/products/
// @access  public
router.get('/', getProduct)


// @desc    Fetch single product by id
// @route   GET /api/products/:id
// @access  public
router.get('/:id', getProductById)



export default router

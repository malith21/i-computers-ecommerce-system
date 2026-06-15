import express from 'express';
import { getAllProducts } from '../controllers/productController.js';
import { createProduct } from '../controllers/productController.js';
import { deleteProduct } from '../controllers/productController.js';
import { updateProduct } from '../controllers/productController.js';
import { getProductById } from '../controllers/productController.js';

const productRouter = express.Router();


productRouter.get("/",getAllProducts);
productRouter.post("/",createProduct);
productRouter.get("/search",()=>{
    console.log("Search API");
});
productRouter.delete("/:productId", deleteProduct);
productRouter.put("/:productId",updateProduct);
productRouter.get("/:productId",getProductById);


export default productRouter;
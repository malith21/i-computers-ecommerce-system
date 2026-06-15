import Product from '../models/product.js';

//check user is admin or not
function isAdmin(req){
    return req.user != null && req.user.isAdmin;
}

export async function createProduct(req, res){

    //validate user
    if(!isAdmin(req)){
        return res.status(403).json({
            message : "Only admin can create products."
        });
    }

    try{

        const existingProduct = await Product.findOne({
            productId : req.body.productId
        });

        if(existingProduct != null){
            return res.status(400).json({
                message : "Product with this productId already exists."
            });
        }

        const newProduct = new Product({
            productId : req.body.productId,
            name : req.body.name,
            altname : req.body.altname,
            price : req.body.price,
            labelledPrice : req.body.labelledPrice,
            description : req.body.description,
            images : req.body.images,
            brand : req.body.brand,
            model : req.body.model,
            category : req.body.category,
            stock : req.body.stock
        });

        await newProduct.save();

        res.status(201).json({
            message : "Product created successfully."
        });

    }catch(error){

        res.status(500).json({
            message : "Error creating product",
            error : error.message
        });
    }
}

export async function getAllProducts(req, res){

    try{

        if(isAdmin(req)){
            const products = await Product.find();
            return res.json(products);
        }

        const products = await Product.find({
            isAvailable : true
        });

        res.json(products);

    }catch(error){

        res.status(500).json({
            message : "Error fetching products",
            error : error.message
        });
    }
}

export async function deleteProduct(req, res){
    if(!isAdmin(req)){
        return res.status(403).json({
            message : "Only admin can delete products."
        
        });
        return;
    }

        try{

            await Product.deleteOne({
                productId : req.params.productId
            })
            res.json({
                message : "Product deleted successfully."
            });
            
        }catch(error){
            res.status(500).json({
                message : "Error deleting product",
                error : error.message
            });
        }



}

export async function updateProduct(req,res){
    if(!isAdmin(req)){
        return res.status(403).json({
            message : "Only admin can update products."
        });
    }   


    try{

        await Product.updateOne({
            productId : req.params.productId
        },{
            name : req.body.name,
            altname : req.body.altname,
            price : req.body.price, 
            labelledPrice : req.body.labelledPrice,
            description : req.body.description,
            images : req.body.images,
            brand : req.body.brand,
            model : req.body.model,
            category : req.body.category,
            stock : req.body.stock,
            isAvailable : req.body.isAvailable
        })

        res.json({
            message : "Product updated successfully."
        });

    }catch(error){
        res.status(500).json({
            message : "Error updating product",
            error : error.message
        });

    }
}

export async function getProductById(req, res){
    try{
        const product = await Product.findOne({
            productId : req.params.productId
        })

        if(product == null){
            res.status(404).json({
                message : "Product not found."
            });

        }else{
           if(product.isAvailable){
                res.json(product);
            }else{
                if(isAdmin(req)){
                    res.json(product);
                }else{
                    res.status(403).json({
                        message : "Only admin can access product details."
                    });
                }
            }
        }


    }catch(error){
        res.status(500).json({
            message : "Error fetching product",
            error : error.message
        });
    }
}

import exp from 'express'
import { ProductModel } from '../models/productModel.js'

export const productApp= exp.Router()

//get products

productApp.get('/products',async(req,res)=>{
    let products= await ProductModel.find()
    res.status(200).json({message:"products list:",payload:products})
})

//get product by pid
productApp.get('/products/:id',async(req,res)=>{
    let objId= Number(req.params.id)
    let obj= await ProductModel.find({pid:objId})
    res.status(200).json({message:"product",payload:obj})
})

//add products
//----validators in product model only works during creation

productApp.post('/products',async(req,res)=>{
    let product=req.body
    let newproductdoc= ProductModel(product)
    await newproductdoc.save()
    res.status(201).json(newproductdoc)
    
})

//update product
//---need to manually add validation (runValidators:true)

productApp.put('/products/:id',async(req,res)=>{
    let objId= Number(req.params.id)
    let modifiedObj= req.body
    let updatedObj=await ProductModel.findOneAndUpdate({pid:objId},{$set:{...modifiedObj}},{new:true,runValidators:false}) 
    res.status(200).json({message:"upadated successfully...",payload:updatedObj})
})

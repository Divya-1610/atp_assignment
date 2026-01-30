//productapi.js

import exp from 'express'

export const productApp=exp.Router()

//resource
let products=[]

productApp.get('/products',(req,res)=>{
    res.status(200).json({message:"products list:",payload:products})
})

//get products by id
productApp.get('/products/:id',(req,res)=>{
    let pid= Number(req.params.id)
    let product=products.find(product=>product.id==pid)

    if (!product)
        return res.status(404).json({message:"product not found"})
    res.status(200).json({message:"product found"})
})
//get products by name
productApp.get('/products-name/:name',(req,res)=>{
    let pname=req.params.name
    let product=products.find(product=>product.name==pname)
    if (!product)
        return res.status(404).json({message:"product not found"})
    res.status(200).json({message:"product found",payload:product})
})


//add products
productApp.post('/products',(req,res)=>{
    let newproduct=req.body
    products.push(newproduct)
    res.status(201).json({message:"product added successfuly"})
})

productApp.put('/products',(req,res)=>{
    const modifiedproduct = req.body
    let productindex= products.findIndex(obj=>obj.id==modifiedproduct.id)
    if (productindex==-1)
        res.status(404).json({message:"product not found"})
    let mp= products.slice(productindex,1,modifiedproduct)
    res.status(200).json({message:"product modified",payload:mp})

})
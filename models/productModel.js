import {Schema,model} from 'mongoose'

const productSchema= new Schema({
    pid : {
    type: Number,
    min:3,
    max:1000000,
    required: true
    },
    productName:{
        type:String,
        minLength:4,
        maxLength:10,
        required:true
    },
    price:{
        type:Number,
        required: true,
    }
},{
    strict:"throw",
    timestamps:true
})

export const ProductModel= model("product",productSchema)
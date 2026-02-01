//create user schema 
//create use model with that schema

import {Schema, model} from 'mongoose'

//user schema has - username, password , age
const userSchema = new Schema({
    username :{
        //specify dataype and validation rules
        type: String,
        required: [true,"user name is required"], //msg is displayed in case of error
        minLength: [3, "min length should be 3"],
        maxLength: [12, "max length exceeded"]
    },
    password : {
        type:String,
        required: [true, "password is required"]
    },
    age : {
        type:Number,
        required: [true, "age is required"],
        min : [18, "age should be above 18"] ,
        max: [25, "age should be below 25"]
    }
    
},{
    strict: "throw",
    timestamps: true
})


export const UserModel = model("user",userSchema) //creates users collection (plural)
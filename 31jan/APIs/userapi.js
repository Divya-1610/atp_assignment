import exp from 'express'
import {UserModel} from '../models/usermodel.js'
export const userApp = exp.Router()


//api routes

//read users from database
userApp.get('/users',async(req,res)=>{
    //usermodel gives the collection name
    //find returns promise
    let users= await UserModel.find()
    res.status(200).json({message:"users list:",payload:users})
})

//read user by _id (created by mongodb)
userApp.get('/users/:id', async(req,res)=>{
    let ObjId= req.params.id
    let user = await UserModel.findById(ObjId) //findById is a predefined method 
    res.status(200).json({message:"user:",payload:user})
})

//create user
//----validators in user model only works during creation
userApp.post('/users',async(req,res)=>{
    let newUser=req.body;
    let newUserDoc = UserModel(newUser)
    await newUserDoc.save()
    res.status(201).json(newUserDoc)
})

//update user by id 
//----manually need to add validation (runValidator:true)
userApp.put('/users/:id' , async(req,res)=>{
    let objId= req.params.id
    let modifiedUser=req.body
    let latestUser=await UserModel.findByIdAndUpdate (objId,{$set:{...modifiedUser}},{new:true,runValidators:true}) 
    //instead of using findOne+updateOne = findByIdandUpdate defined by mongoose
    res.status(200).json({message:"user modified",payload:latestUser})
 
})
//delete user
userApp.delete('/users/:id',async(req,res)=>{
    let objId=req.params.id
    let deletedUser= await UserModel.findByIdAndDelete(objId)
    res.status(200).json({message:"deleted user:",payload:deletedUser})
})

//testing
userApp.get('/test',(req,res)=>{
    res.status(200).json({message:"works"})
})
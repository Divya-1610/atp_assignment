//userapi.js
import exp from 'express'

//create mini express userApp(separate userApp)
export const userApp = exp.Router()
//resource
let users=[]

//create api (req handlers - route (get, post, update, del))
userApp.get('/users',(req,res)=>{
    res.status(200).json({message:"all users",payload:users});
})

//read user by id
userApp.get('/users/:id',(req,res)=>{

    let userId= Number(req.params.id) // {id : '200'} - paramters in url are considered string
    let user=users.find(userobj=>userobj.id==userId)

    if(user)
        res.status(200).json({message:"user",payload:user})
    else
        return res.status(404).json({message:"user not found"})
})


//to create user
userApp.post('/users',(req,res)=>{
    let newuser=req.body
    users.push(newuser)
    res.status(201).json({message:"user created successfully"})
    
})

//modify user
userApp.put('/users/:id',(req,res)=>{
   
    const modifiedUser = req.body
    let userIndex=users.findIndex(userobj=>userobj.id==modifiedUser.id)//match found 1 =success , -1=failure
    
    if (userIndex==-1){
       return res.status(404).json({message:"user not found"})
    }

    let delUsers=users.splice(userIndex,1,modifiedUser)
    res.status(200).json({message:"user modified successfully"})
})

//deleter user by id
userApp.delete('/users/:id',(req,res)=>{
    let userid=Number(req.params.id)
    let userIndex=users.findIndex(userobj=>userobj.id==userid)
    if (userIndex==-1)
        return res.status(404).json({message:"user not found"})
    let deluser=users.splice(userIndex,1)
    res.status(201).json({message:"user deleted successfully",payload:deluser})
})

import exp from 'express'
import {userApp} from './APIs/userapi.js'
import {productApp} from './APIs/productAPI.js'
import {connect} from 'mongoose'
const app =exp()

//connect to db server
async function connectDB(){
    try{
        await connect('mongodb://localhost:27017/jan31')
        console.log("connected to the DBserver")
        app.listen(7777,()=>console.log("server listening on port 7777......"))
    }
    catch(err){
        console.log("error connecting to DBserver",err)
    }
    //---older syntax
    // .then(()=>console.log("connected"))
    // .catch((err)=>console.log("connection failed",err))
}

connectDB()

app.use(exp.json()) //body parsing middleware 

app.use('/user-api',userApp)
app.use('/product-api',productApp)

//error handling middleware
function errorHandler(err,req,res,next){
    res.json({message:"error",reason:err.message})
}

//error handler is always placed at middle
app.use(errorHandler) //default error handler (error is returned in json format rather than html)

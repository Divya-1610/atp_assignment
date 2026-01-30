import exp from "express";
import { userApp } from "./userapi.js"
import { productApp } from "./productapi.js";

//create http server 
const app = exp()
app.listen(4000,()=> console.log("http server on listening on port 4000...."))

//body parsing middleware (built-in)
app.use(exp.json())

//forward requests to userapp when route '/user-api' or '/product-api'
app.use('/user-api',userApp)
app.use('/product-api',productApp)

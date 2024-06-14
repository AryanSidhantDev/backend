import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port:${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed!!!",err);
})















// import express from "express"
// const app=expess()

// ( async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}`)
//         app.on("errror",(error)=>{
//             console.log("ERRR:",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     }catch(error){
//         console.log("ERROR:",error)
//         throw err
//     }
// })()
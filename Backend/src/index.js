import dotenv from "dotenv"
import connectDb from "./db/index.js"
import app from "./app.js"

dotenv.config(
    {path : '/.env'}
)
connectDb()
.then(()=>{
    app.listen(process.env.PORT||8000 , ()=>{
        console.log("server in running on port",`${process.env.PORT}`)
    })   
    app.on("error" , (error)=>{
        console.error(error)
        process.exit(1)
    }) 
})
.catch((error)=>{
    console.error ("DATA BASE CONNECTION ERROR",error) ;
})
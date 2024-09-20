import express, { json } from "express" 
import cors from "cors"
import cookieparser from "cookie-parser"


const app = express() 

app.use(cors({
    origin:process.env.CORS_ORIGIN ,
    Credential : true
}))
app.get('/',(req,res)=>{
    res.send("hello")
})
app.use(json({
    limit : "16kb"
}))
app.use(express.json({
    limit : "16kb"
}))
app.use(express.urlencoded({
    limit : "16kb"
}))
app.use(express.static("public"))
app.use(cookieparser())

// import cors from 'cors';
// app.use(cors({ origin: 'https://todomyd-fpsiwbatc-anuj-s-projects-6ea949e7.vercel.app' }));


// routes import
import UserRouter from "./routes/User.routes.js"

// routes decliration 
app.use("/api/v1/users", UserRouter)

export default app
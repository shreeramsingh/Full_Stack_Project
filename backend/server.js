import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import 'dotenv/config'

//app config
const app = express()
const port = process.env.PORT || 4000;

//middleware
app.use(express.json())
app.use(cors())
//db connection
connectDB();

//api endpoints
app.use("/api/food/",foodRouter);
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)



app.get("/",(req,res)=>{
  res.send("Hello World API WORKING");
})
app.listen(port,()=>{
  console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://shreeramsingh1707:9814892161@cluster0.9ign2k0.mongodb.net/?
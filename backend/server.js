import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './controllers/config/mongodb.js';
import connectCloudinary from './controllers/config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js';


// App Config

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()


// middleWares
app.use(express.json())
app.use(cors())

//Api Endpoint
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.listen(port,()=>{
    console.log('Server Started on PORT :' + port);
})
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from '../src/config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/user.route.js';
import productRouter from './routes/product.route.js';
import cartRouter from './routes/cart.route.js';
import orderRouter from './routes/order.route.js';

// APP CONFIG----->
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// MIDDLEWARES----->
app.use(express.json())
app.use(cors());

// API ENDPOINTS---->
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res)=>{
    res.send("API WORKING");
});

// app.listen(port, ()=> {
//     console.log(`Server started on PORT: http://localhost:${port}`)
// });

export default app;
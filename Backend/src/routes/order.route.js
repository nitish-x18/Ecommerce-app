import express from 'express';
import { placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus } from '../controllers/order.controller.js';
import adminAuth from '../middleware/adminAuth.middleware.js';
import authUser from '../middleware/auth.middleware.js';

const orderRouter = express.Router();

// ADMIN FETURES--->>
orderRouter.post('/list',adminAuth ,allOrders);
orderRouter.post('/status',adminAuth ,updateStatus);

// PAYMENT FEATURES-->>
orderRouter.post('/place',authUser, placeOrder);
orderRouter.post('/stripe',authUser, placeOrderStripe);
orderRouter.post('/razorpay',authUser, placeOrderRazorpay);

// USER FEATURES--->>>
orderRouter.post('/userorders', authUser, userOrders);

export default orderRouter;
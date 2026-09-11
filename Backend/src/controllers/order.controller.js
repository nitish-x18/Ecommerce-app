import orderModel from '../models/order.model.js';
import userModel from '../models/user.model.js'

// PLACING ORDER USING COD METHOD--->>
const placeOrder = async (req, res) => {

    try {

        const { userId, items, amount, address, paymentMthod } = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cardData: {}})

        res.json({
            success: true,
            message: 'Order Placed'
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }

}

// PLACING ORDER USING STRIPE METHOD--->>
const placeOrderStripe = async (req, res) => {

}

// PLACING ORDER USING RAZORPAY METHOD--->>
const placeOrderRazorpay = async (req, res) => {

}

// ALL ORDER DATA FRO ADMIN PANEL--->>
const allOrders = async(req, res) => {

    try {

        const orders = await orderModel.find({})
        res.json({
            success: true,
            orders
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            success: true,
            message: error.message
        })
    }

}

// USER ORDER DATA FOR FRONTEND--->>
const userOrders = async (req, res) => {

    try {

        const { userId } = req.body;

        const orders = await orderModel.find({ userId })
        res.json({
            success: true,
            orders
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            success: true,
            message: error.message
        })
    }

}

// UPDATE ORDER STATUS FROM ADMIN PANEL--->>
const updateStatus = async (req, res) => {

}

export { placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus }
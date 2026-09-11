import orderModel from '../models/order.model.js'
import userModel from '../models/user.model.js'
import Stripe from 'stripe'

// GLOBAL VAR--->>
const currency = 'inr'
const deliveryCharges = 10

// GATEWAY INITIALIZE--->>
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// PLACING ORDER USING COD METHOD--->>
const placeOrder = async (req, res) => {

    try {

        const { userId, items, amount, address } = req.body;

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

    try {

        const { userId, items, amount, address } = req.body;  
        const { origin } = req.headers
        
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: 'Stripe',
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save()

        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: 'Delivery Charges'
                },
                unit_amount: deliveryCharges * 100
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`, 
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment'
        })

        res.json({
            success: true,
            session_url: session.url
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }

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

    try {

        const { orderId, status } = req.body;
        await orderModel.findByIdAndUpdate(orderId, {status})

        res.json({
            success: true,
            message: 'Status Updated'
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            success: true,
            message: error.message
        })
    }

}

export { placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus }
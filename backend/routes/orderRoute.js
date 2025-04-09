import express from 'express'
import{PlaceOrder,PlaceOrderPhonepay,PlaceOrderPaytm,allOrder,UsersOrder,updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'
const orderRouter = express.Router()

//Admin Features
orderRouter.post('/list',adminAuth,allOrder)
orderRouter.post('/status',adminAuth,updateStatus)

//Paymeny Features
orderRouter.post('/place',authUser,PlaceOrder)
orderRouter.post('/paytm',authUser,PlaceOrderPaytm)
orderRouter.post('/phonepay',authUser,PlaceOrderPhonepay)

//User Features
orderRouter.post('/userOrder',authUser,UsersOrder)

export default orderRouter
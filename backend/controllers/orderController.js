import orderModel from '../models/orderModel.js';
import oderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js';
//Placing order using COD  Method
const PlaceOrder = async(req,res)=>{

    try {
        const {userId,items,amount,address,payment_Method} = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            payment_Method,
            payment : false,
            date : Date.now()
        }

        const newOrder = new oderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({sucess:true,message:"Order Placed"})
    } catch (error) {
        console.log(error)
        res.json({sucess:false,message:error.message})
    }

}


//Placing order using PAYTM Method
const PlaceOrderPaytm = async(req,res)=>{

}

//Placing order using PHONEPAY  Method
const PlaceOrderPhonepay = async(req,res)=>{

}

// All orders for admin panel
const allOrder = async(req,res)=>{
    try {
        const orders = await orderModel.find({})
        res.json({sucess:true,orders})
    } catch (error) {
        console.log(error)
        res.json({sucess:false , message:error.message})
    }
}

// All orders Data for frontend
const UsersOrder = async(req,res)=>{

    try {
        const {userId} = req.body
        const orders = await orderModel.find({userId})
        res.json({sucess:true , orders})
    } catch (error) {
        console.log(error)
        res.json({sucess:false , message:error.message})
    }

}

// Update order status
const updateStatus = async(req,res)=>{

    try {
        
        const {orderId , status} = req.body

        await orderModel.findByIdAndUpdate(orderId , {status})
        res.json({sucess:true,message:'Status Updated'})

    } catch (error) {
        console.log(error)
        res.json({sucess:false , message:'Not Found'})
    }

}

export{PlaceOrder,PlaceOrderPhonepay,PlaceOrderPaytm,allOrder,UsersOrder,updateStatus}
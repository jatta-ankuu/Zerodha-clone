const {model} =require("mongoose");
const {orderSchema} = require("../schemas/order");

const orderModel = new model("orderModel", orderSchema);

module.exports ={orderModel};
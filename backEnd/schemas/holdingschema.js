const {Schema} = require("mongoose");

const Holdingschema = new Schema({
    name:String,
    qyt: Number,
    avg:Number,
    price: Number,
    net : String,
    day : String
});

module.exports ={Holdingschema};
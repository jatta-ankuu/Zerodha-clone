const {model} =require("mongoose");
const {postionSchema} = require("../schemas/postion");

const postionModel = new model("postionModel", postionSchema);

module.exports ={postionModel};
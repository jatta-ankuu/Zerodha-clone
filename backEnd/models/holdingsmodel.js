const {model} = require("mongoose");

const {Holdingschema} = require("../schemas/holdingschema");

const Holdingmodel = new model("holdingmodel" ,Holdingschema);

module.exports ={Holdingmodel};
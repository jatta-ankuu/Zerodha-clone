require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const {postionModel} =require("./models/positionmodel");
const {Holdingmodel} =require("./models/holdingsmodel");
const {orderModel} =require("./models/ordermodel");
const User =require("./models/user");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport =require("passport");
const local =require("passport-local");

const app = express();

const sessionOpt = {
    secret:"mysupersecret",
    resave:false,
    saveUninitialized:true,
}

app.use(session(sessionOpt));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

passport.use(new local(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

// app.get("/send", ( (req,res)=>{

//     let alldata =  [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];
//     alldata.forEach((item)=>{
//         let newpostion =  new postionModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//     net: item.net,
//     day:item.day,
//     isLoss: item.isLoss
//         });
       
//        newpostion.save();
//     });
//     res.send("DONE");
// }));

app.post("/login", passport.authenticate("local", {
    failureRedirect: "/login", // Agar login fail ho to wapas /login par bhej do
    failureMessage: true, // Error message bhejo
}), async(req,res)=>{
    // Agar authentication successful hai, to yeh function chalega
    res.status(200).json({ message: "Login successful!", user: req.user });
});


app.post("/register", async (req, res) => {
    try {
        // Yahan aap req.body se data nikal rahe hain
        const { email, username, password } = req.body; 

        // Yahan aap User ka naya instance bana rahe hain
        const newUser = new User({ email, username });

        // Aur yahan aap User.register method se data save kar rahe hain
        // Yahi sahi tarika hai
        const data = await User.register(newUser, password);
        res.status(200).json({ message:"Rejistered Successfully..!", user: data });
        
    } catch (error) {
        console.error("Registration error:", error);
        res.status(400).json({ message: error.message });
    }
});

app.post("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ message: "Logout failed" });
    res.status(200).json({ message: "Logged out successfully" });
  });
});


app.get("/allholding",async(req , res)=>{
    let holdingData = await Holdingmodel.find({});
    res.json(holdingData);
});
app.get("/allposition",async(req , res)=>{
    let positionData = await postionModel.find({});
    res.json(positionData);
});
app.post("/newOrder", async(req,res)=>{
    let newOrder =new orderModel({
        name: req.body.name,
    qty :req.body.qty,
    price: req.body.price,
    mode : req.body.mode
    });
    newOrder.save();

    res.send("ORDER DONE")
});
app.get("/allorder",async(req , res)=>{
    let orderData = await orderModel.find({});
    res.json(orderData);
});



app.listen(PORT, ()=>{
    console.log("port is clicked at 3002");
    mongoose.connect(url);
    console.log("DB CONNECTED")
});
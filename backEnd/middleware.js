const islogin = (req,res)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
    return res.redirect("/login");
    };
};

module.exports={islogin};
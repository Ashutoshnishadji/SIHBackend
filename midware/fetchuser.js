

const Jwt = require("jsonwebtoken");


module.exports.fetchuser = async (req,res,next)=>{
    const token = req.header('authtocken');
    
if(!token){
 return res.status(401).send("Plese use currect details");
}
try {   
    var user =await Jwt.verify(token , "hellowsiriamashutoshnishad");
    req.user = user.userid;
    next();
} catch (error) {
    console.log(error);
    res.status(500).send("internal Server Error ! ");
}
}


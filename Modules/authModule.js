const jwt= require ("jsonwebtoken");

//Authentication
exports.authenticUser = (req,res,next) => {
    // check whether access token exists in header
    if(!req.headers.accesstoken)
        return res.status(400).send({msg:"Token not found"});
    //verify token
    try{
        const user= jwt.verify(req.headers.accesstoken,process.env.SECRET_KEY);
        req.body.currentUser= user;
        next();
    }catch(err){
        console.error(err);
        res.status(400).send({msg: "unauthorised"});
    }
};

// Authorisation

exports.authoriseUser= (req,res,next) => {
    if(req.body.currentUser.role === "admin") 
       next();
    else 
       return res.status(404).send({msg: "Forbidden: Access Denied"});
   };
const {getUser} = require('../service/auth');
function  checkForAuthentication(req, res,next){
    const tokenCookie = req.cookies?.token;
    req.user = null;

    if (!tokenCookie) return next();   

    const token = tokenCookie;
    const user = getUser(token);  

    req.user = user;
    return next();
}

// async function restrictToLoggedinUserOnly(req, res, next){
//     const userUid = req.headers["authorization"];

//     if(!userUid) return res.redirect('/login');
//     const token = userUid.split('Bearer ')[1]; //"Bearer [23uhbsafgag2gab]"
//     const user = getUser(token);

//     if(!user) return res.redirect("/login");


//     req.user = user;
//     next();
// }

// async function checkAuth(req,res,next){
// const userUid = req.headers["authorization"];
//     const token = userUid.split('Bearer ')[1];
//     const user = getUser(token);

//     req.user = user;
//     next();
// }



// function restrictTo(roles){
//     return function(req,res,next){
//         if(!req.user) return res.redirect('/login');
//         if(!roles.includes(req.user.role)) return res.end("UnAuthorized");
        
//         return next();
//     };
// }
function restrictTo(roles){
    return function(req,res,next){
        console.log("Logged in user:", req.user);

        if(!req.user) return res.redirect('/login');

        console.log("User role:", req.user.role);
        console.log("Allowed roles:", roles);

        if(!roles.includes(req.user.role))
            return res.end("UnAuthorized");
        
        return next();
    };
}


module.exports = {
    // restrictToLoggedinUserOnly,
    // checkAuth,
    checkForAuthentication,
    restrictTo,
};
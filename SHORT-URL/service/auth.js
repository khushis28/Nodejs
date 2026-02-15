//basically it's kind of a diary where you store unique id (for e.g. parking a car in parking lot & guard stores vehicle no. in his diary & provides unique id as a ticket to car owner)


// const sessionIdToUserMap = new Map();


const jwt = require("jsonwebtoken");
const secret = "KhushiS@2873#";

//using user object as payload
function setUser(user){
    // sessionIdToUserMap.set(id, user)
    return jwt.sign(
        {
        _id: user._id,
        email: user.email,
        role: user.role,
        },
        secret
    );
}

function getUser(token){
    if(!token) return null;
    try{
        return jwt.verify(token, secret);  
    } catch(error){
        return null;
    }
  
}

module.exports = {
    setUser,
    getUser,
}
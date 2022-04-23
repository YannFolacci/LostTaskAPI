const jwt        = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET;

exports.checkJWT = async (req, res, next) => {
    console.log("check jwt");
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (!!token && token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json('token_not_valid');
            } else {
                req.decoded = decoded;

                const expiresIn = 24 * 60 * 60;
                const newToken  = jwt.sign({
                    user : decoded.user
                },
                SECRET_KEY,
                {
                    expiresIn: expiresIn
                });

                res.header('Authorization', 'Bearer ' + newToken);
                next();
            }
        });
    } else {
        return res.status(401).json('token_required');
    }
}
exports.checkUser = async (req, res, next) => {
    console.log("check user");
    const {
        id
    } = req.params;
    console.log(id, req.decoded.user._id);
    if(id == req.decoded.user._id){
        next();
    }else{
        return res.status(403).json('unauthorized');
    }
}

exports.checkAdmin = async(req, res, next) => {
    if(req.decoded.user._id == "62305ab21152c61b2e20cd5b" ){
        next();
    }else{
        return res.status(403).json('unauthorized');
    }
}
